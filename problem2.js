let array=[2,2,4,6,6];
findFrequency(array,array.length);

function findFrequency(array,n){
    let hash=new Array(n);
    for (let i = 0; i < array.length; i++) {
        hash[i]=0;
        };
        let i =0;
        //travers all array elements
        while(i<n){
            //update the frequency of array of[i]
            hash[array[i]-1]++;
            //incrise the index
            i++;
        }
        console.log('all of elements')

        for (let i = 0; i < array.length; i++) {
            console.log((i+1),"",hash[i]);    
        };

};