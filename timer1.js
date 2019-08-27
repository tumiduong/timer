let count = 1000;
let alarms = process.argv;

const timer = () => {
  for (i = 2; i < alarms.length; i++) {
    if (alarms[i] >= 0 && alarms[i] !== NaN) {
      setTimeout(() => {
        process.stdout.write(".");
      }, count * alarms[i])
    }
  }
};

timer(alarms);