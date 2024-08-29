import axios from 'axios';

export const fetchMessages = async ({ commit }) => {
  try {
    const res = await axios.get('http://localhost:8000/message/get_all');
    res.data.forEach((msg) => {
      commit('addMessage', {
        'username': msg.username,
        'message': msg.message,
        'type': msg.type
      });
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
  }
};

export const fetchUsers = async ({ commit }) => {
  try {
    const res = await axios.get('http://127.0.0.1:8000/api/user/get_all');
    commit('setListUsers', res.data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export const syncUsersInterval = ({ dispatch }) => {
  setInterval(() => {
    dispatch('fetchUsers');
  }, 2000);
};

// Add other actions as needed
