import { notify } from './common/communication';

chrome.runtime.onMessage.addListener(function({ type, payload }, callback) {
  if (type === 'notify') {
    notify(payload);
  }
});
