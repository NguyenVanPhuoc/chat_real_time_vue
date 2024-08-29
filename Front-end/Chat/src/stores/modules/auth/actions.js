import axios from 'axios';
import { message } from 'ant-design-vue';

export default {
  async handleLogin({ commit }, credentials) {
    const { username, password } = credentials;

    commit('SET_LOADING', true);

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await axios.post('http://localhost:8000/auth/login', formData);
      localStorage.setItem('token', response.data.access_token);
      commit('SET_TOKEN', response.data.access_token);

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;

      const userInfo = await axios.get('http://localhost:8000/auth/get_current_user');
      commit('SET_USER', { username: userInfo.data.username, status: 'Đăng nhập' });

      commit('SET_LOADING', false);
      commit('SET_ERROR_MESSAGE', '');
    } catch (error) {
      commit('SET_LOADING', false);
      commit('SET_ERROR_MESSAGE', 'Thông tin đăng nhập không đúng!');
    }
  },

  async handleLogout({ commit }) {
    commit('LOGOUT');
    localStorage.removeItem('token');
  },

  async handleSignup({ commit }, credentials) {
    const { username, password, re_password, full_name } = credentials;

    if (password.length < 8) {
      return commit('SET_ERROR_MESSAGE', 'Mật khẩu cần có tối thiểu 8 ký tự!');
    }

    if (password !== re_password) {
      return commit('SET_ERROR_MESSAGE', 'Mật khẩu không khớp!');
    }

    commit('SET_LOADING', true);
    commit('SET_ERROR_MESSAGE', '');

    try {
      const response = await axios.post('http://localhost:8000/auth/register', {
        full_name,
        username,
        password,
      });

      commit('SET_USER', { data: response.data, status: 'Đăng ký' });

      commit('SET_LOADING', false);
    } catch (e) {
      commit('SET_LOADING', false);
      commit('SET_ERROR_MESSAGE', e.response.data.detail);
    }
  },

  async getUser({ commit }) {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

      try {
        const userInfo = await axios.get('http://localhost:8000/auth/get_current_user');
        commit('SET_USER', { username: userInfo.data.username });
      } catch (e) {
        message.error('Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại để tiếp tục!', 3);
        commit('LOGOUT');
        localStorage.removeItem('token');
      }
    }
  },

  clearErrorMessage({ commit }) {
    commit('CLEAR_ERROR_MESSAGE');
  },
};
