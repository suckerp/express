'use strict';

document.addEventListener('keypress', (event) => {
  const keyName = event.key;

  alert('keypress event\n\n' + 'key: ' + keyName);
});