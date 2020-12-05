var raspi = require('raspi');
var PWM = require('raspi-pwm').PWM;

raspi.init(function() {
  var  pwm = new PWM('GPIO18');
  
  pwm.write(0.03);
  //pwm.write(0.09);
  while(1);
});

