let array=[10,40,20]
let n=array.length;
console.log('given array'+'')
arrayPrint(array,n);
convertArray(array,n);
console.log(''+'converted array is'+'');
arrayPrint(array,n);


function convertArray(array,n){
    let temp=[...array];
    temp.sort((a,b)=>a-b);
    let umap=new Map();
    // One by one insert elements of sorted
    // temp[] and assign them values from 0
    // to n-1
    let value=0;
    for(let i=0;i<n;i++)
    umap.set(temp[i],value++);
    // Convert array by taking positions from
    // umap
    for(let i=0;i<n;i++)
    array[i]=umap.get(array[i]);
}
function arrayPrint(array,n){
    for(let i=0;i<n;i++)
    console.log(array[i]);
}