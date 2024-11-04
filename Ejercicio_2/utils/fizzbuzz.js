function fizzbuzz(){
    let num = document.getElementById("numero").value;
    let result=[];
    if (num==1){
        for(i=1;i<=100;i++){
            if (i%3==0){
                result[i]="Fizz";
            } else if (i%5==0){
                result[i]="Buzz";
            } else{
                result[i]=i;
            }
        };
    } else if (num==2){
        for(i=1;i<=100;i++){
            if (i%5==0 && i%3==0){
                result[i]="FizzBuzz";
            } else if (i%3==0){
                result[i]="Fizz";
            } else if (i%5==0){
                result[i]="Buzz";
            } else{
                result[i]=i;
            };
        };
    };
    console.log(result);
}