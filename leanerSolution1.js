let arr=[12,32,14,532,556,74];
let n=arr.length;
let k=74;
let resutl=findTheNumber(arr,n,k);
console.log(resutl);

async function findTheNumber(arr,n,k){
    for(let i=0;i<n;i++){
        if(k==arr[i])
        return i;
    }
    return 'Not Found';
}