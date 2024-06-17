import schedule from 'node-schedule';

// * * * * * * print every second for ever //
// */5  print every 5 seconds

export const checkDataBase = () => {
  schedule.scheduleJob('*/2 * * * * *', function(){
    // check database
    // delete all users is confirmed is false
    console.log('Check DataBase!');
  })
};


export const sendEmails = () => {
  schedule.scheduleJob('*/2 * * * * *', function(){
    // check database
    // delete all users is confirmed is false
    console.log('send email!');
  })
};
