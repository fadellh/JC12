
function opp(arr){
    output = []
    for(i=0;i<arr.length;i++){
       output.push(arr[i] * -1)
       
    }
    return output
}

console.log(opp([-2,-9,1,2,3,-4]))


function duplicate(str1,str2){
    var arr1 = str1.split('')
    var arr2 = str2.split('')
    var output = []
    var hasil = []
    for(i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1[i] == arr2[j]){
                output.push(arr1[i])
            }
            
        }
    }for(i=0;i<output.length;i++){
        if(output[i] !== output[i+1]){
            hasil.push(output[i])
        }
    }
    return hasil
}

console.log(duplicate('aa','aaa'))
console.log(duplicate('treysuti','rtelsiti'))