import { ref } from 'vue';

export default {
  user: ref(null),
  socket: null,
  fileSocket: null,
  currentMessage: ref(''),
  messages: ref([]),
  messagesOffline: ref([]),
  open: ref(false),
  fileInput: ref(null),
  isOnline: ref(navigator.onLine),
  listUsers: ref([]),
};
