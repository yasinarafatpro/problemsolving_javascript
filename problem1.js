console.log('hello');

let arr=[10,11,20,10,20,30,30];
let n=arr.length;
findTheNumber(arr,n);


function findTheNumber(arr,n){
    let visited=Array.from({length:n},(_,i)=>false)
    for(let i=0;i<n;i++){
        if(visited[i]==true)
            continue;
        let count=1;
         for(let j=i+1;j<n;j++){
            if(arr[i]==arr[j]){
                visited[j]==true;
                count++;
                }
        }
        console.log(" "+arr[i],"  "+count);
    }
    
}