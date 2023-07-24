function primeNumber(num) {
if (typeof (num) != "number") {
    console.log ('Invalid input')
}
else{
    for (let index = 2; index < num/2; index++) {   
        if (num%index==0) {
            console.log('This is not prime number');  
            return

        }
    }
        
            console.log('This is prime number')
        
}
    
}
function fibonacci(params) {
    if (typeof(params) != 'number') {
        console.log('invalid number');
    }
    else{
        let a=0 
        let b=1
        let c=0
        let sum=0
        for (let index = 0; index <= params; index++) {
            c=a+b
            sum=sum+b
            console.log(b);
            a=b
            b=c
        }
        console.log('The Sum of fibonacci series is : ',sum);
    }
    
}

function evenOdd(params) {
    if (typeof(params) != 'number') {
        console.log('invalid number');
    }
    else{
        let evencount=0
        let oddcount=0
        for (let index = 1; index <= params; index++) {
            if(index%2==0){
                console.log(index+' Is even number');
                evencount++
            }
            else{
                console.log(index+' Is odd number');
                oddcount++
            }           
            
        }
   console.log('number of even number '+evencount); 
   console.log('number of odd number '+oddcount); 

    
}

}

primeNumber(5)
fibonacci(10)
evenOdd(10)
