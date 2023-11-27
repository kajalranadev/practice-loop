function multiplicationTable(number) {
    let i = 1;
  
    do {
      console.log(`${number} x ${i} = ${number * i}`);
      i++;
    } while (i <= 10);
  }
  
  multiplicationTable(5);
  