const os = require('os');


function getCurrentSystemIp(){
  const networkInterfaces = os.networkInterfaces();
  for (const iface of Object.values(networkInterfaces)) {
    for (const interface of iface) {
      if (interface.family === 'IPv4' && !interface.internal) {
        return interface.address;
      }
    }
  }
}

module.exports = {
  getCurrentSystemIp
}