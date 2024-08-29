export default {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_ERROR_MESSAGE(state, message) {
      state.errorMessage = message;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    },
    CLEAR_ERROR_MESSAGE(state) {
      state.errorMessage = '';
    },
    LOGOUT(state) {
      state.user = null;
      state.token = null;
    },
  };
  