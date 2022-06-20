function procuraNumEmFibonacci(num) {
  sequencia = [];
  
  for(let i = 0; i < (num * 2); i++) {
    if(i <= 1 && i >= 0) {
      sequencia[i] = i;
    }
    else {
      sequencia[i] = sequencia[i-2] + sequencia[i - 1];
    }
    if(sequencia[i] == num) { 
      return 1; 
    }
    else if(sequencia[i] > num) { 
      break;
    }
  }

  return -1;
}
  const num = 5;
  const num2 = 4;
  encontrouNum = procuraNumEmFibonacci(num);
  encontrouNum2 = procuraNumEmFibonacci(num2);

  if(encontrouNum == 1) {
    console.log("%d está na sequência", num);
  }
  else {
    console.log("%d não está na sequência", num);
  }

  
  if(encontrouNum2 == 1) {
    console.log("%d está na sequência", num2);
  }
  else {
    console.log("%d não está na sequência", num2);
  }