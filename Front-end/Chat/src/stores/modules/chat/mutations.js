export const setUser = (state, user) => {
  state.user.value = user;
};

export const setSocket = (state, socket) => {
  state.socket = socket;
};

export const setFileSocket = (state, fileSocket) => {
  state.fileSocket = fileSocket;
};

export const setCurrentMessage = (state, message) => {
  state.currentMessage.value = message;
};

export const addMessage = (state, message) => {
  state.messages.push(message);
};

export const addOfflineMessage = (state, message) => {
  state.messagesOffline.push(message);
};

export const setOpen = (state, isOpen) => {
  state.open.value = isOpen;
};

export const setFileInput = (state, fileInput) => {
  state.fileInput.value = fileInput;
};

export const setIsOnline = (state, isOnline) => {
  state.isOnline.value = isOnline;
};

export const setListUsers = (state, users) => {
  state.listUsers = users;
};
