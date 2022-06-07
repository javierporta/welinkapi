const ewelink = require('ewelink-api');

(async () => {

  const connection = new ewelink({
    email: '', // Todo: Add email
    password: '', // Add new password here
    region: 'eu',
  });

  /* get all devices */
  //const devices = await connection.getDevices();
  //console.log(devices);

  /* get specific devide info */
  // const device = await connection.getDevice('10014b6070');
  // console.log(device);

   
  /* get specific devide info */
   const devicePowerState = await connection.getDevicePowerState('10014b6070');
   console.log(devicePowerState);

   /* toggle device */
  // await connection.setDevicePowerState('10014b6070', 'on');

})();