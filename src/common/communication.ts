export function notify(msg: string, title = '', alwaysShow = false) {
  chrome.notifications.create('', {
    iconUrl: '/images/icon64.png',
    type: 'basic',
    title: title,
    message: msg,
    requireInteraction: alwaysShow
  });
}

export const { sendMessage } = chrome.runtime;
