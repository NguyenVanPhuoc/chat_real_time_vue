import { createStore } from 'vuex';
import authModule from './modules/auth'; // Import auth module
import chatModule from './modules/chat'; // Import auth chat

const store = createStore({
  modules: {
    auth: authModule, // Register auth module
    chat: chatModule, // Register chat module
    // other modules if any
  },
});

export default store;
