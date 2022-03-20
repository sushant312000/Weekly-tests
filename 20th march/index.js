let i = 1;
while (i<=100) {
    if (i%3==0) {
        console.log("fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else if((i%3)&&(i%5)){
        console.log("FizzBuzz");
    }
    else{
        console.log("Enter multiple of 3 or 5 or both");
    }

    i++;
}
