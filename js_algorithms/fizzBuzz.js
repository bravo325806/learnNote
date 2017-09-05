function fizzBuzz(num){
    for(var i=1 ; i <=num ; i++){
      if(i%3===0 && i%5 === 0) console.log('fizzbuzz');
      if(i%3===0) console.log("fizz");
      else if(i%5===0)console.log("buzz");
      else console.log(i);
    }
  }
  fizzBuzz(20)