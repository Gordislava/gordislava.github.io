var numbers = 1000;

isPrime:
for (var i = 2; i <= numbers; i++) { 

  for (var j = 2; j < i; j++) { 
    if (i % j == 0) continue isPrime; 
  }

  console.log( i ); 
}