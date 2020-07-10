window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('https://rochonastore.github.io/serviceworker.js');
  }
}
