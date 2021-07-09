let arr=[56,2,34,45,56,67,78];
let n=arr.length;
console.log('lenght of array is '+n);
let myNumber=34;
findAllNumberUperThenMe(arr,n,myNumber);


function findAllNumberUperThenMe(arr,n,myNumber){
    for(let i=0;i<n;i++){
        while(myNumber<arr[i]){
            console.log(arr[i]);
            break;
        }
    }
        
};
