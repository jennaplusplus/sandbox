onmessage = function(e) {
  if (e.data === 'MasterOpenedTimer') {
    setInterval(postMessage, 15000, 'MasterOpenedCallback');
  } else if (e.data === 'SetMasterStatusTimer') {
    setInterval(postMessage, 500, 'SetMasterStatusCallback');
  }
}
