const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on("data", key => {
  const utfCodes = ['\u0031','\u0032','\u0033','\u0034','\u0035','\u0036','\u0037','\u0038','\u0039']
  // \u0003 maps to ctrl+c input
  if (key === "\u0062") {
    process.stdout.write(".");

  }
  else if( utfCodes.includes(key)){
      console.log(`Setting timer for ${key} seconds!`)
      setTimeout(() => {
        process.stdout.write('\u0007'); 
      }, key * 1000);
  }
  else if (key === "\u0003") {
      console.log('Thanks for using me Ciao!!')
    process.exit();


  }
});