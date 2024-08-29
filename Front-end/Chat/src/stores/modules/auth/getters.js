export default {
    isAuthenticated: state => !!state.token,
    user: state => state.user,
    errorMessage: state => state.errorMessage,
    loading: state => state.loading,
  };
  