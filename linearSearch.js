let array=[1,2,3,4,5,6,7,8]
let n=array.length;
findElement(array,n);

async function findElement(array,n){
    element=3;
   try{
    for (let i=0;i<n;i++){
        if(element==array[i]){
            return console.log('possiton of element is ' +i);
        }
    }return console.log('element not found');

   }catch(err){
        return err;
   };
};
