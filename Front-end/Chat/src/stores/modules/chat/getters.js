export const getUsername = (state) => state.user ? state.user.value.username : '';

export const getMessages = (state) => state.messages;

export const getMessagesOffline = (state) => state.messagesOffline;

export const getListUsers = (state) => state.listUsers;

export const getIsOnline = (state) => state.isOnline;

export const getSocket = (state) => state.socket;

export const getFileSocket = (state) => state.fileSocket;
