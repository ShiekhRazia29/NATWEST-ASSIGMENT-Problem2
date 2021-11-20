function nonDivisibleSubset(k, arrayofNumbers) { //k is the divisor and arrayofNumbers is the array of elements.
    let counts=[]
    for(var i = 0 ; i<k ; i++){
        counts.push(0)
    }
    for (i of arrayofNumbers){
        counts[i%k]+=1; //Through the iteration of the loop we are getting the count 
    }                   //of the elements for the possible remainders.
    let countMaxSubset=0
    countMaxSubset=Math.min(counts[0],1)
    for (let i = 1 ; i < Math.floor(k/2)+1;i++){
        if (i == k-i){
            countMaxSubset+=1
        }else{
            countMaxSubset+=Math.max(counts[i],counts[k-i])
        }
    }console.log(`Length of Subset with integers not divisible by given number${countMaxSubset}`)
    return countMaxSubset
}
nonDivisibleSubset(4,[19,25,24,10,12,10,22])
