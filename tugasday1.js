function berapaTahun(x,y,z,n){
    jumlah = x
    tahun = 1
    for(var i = x;i<n;i+=tiapTahun){
            tiapTahun= (jumlah*(y/100))+z
            jumlah = Math.ceil((jumlah + tiapTahun))
        if(jumlah <= n){
            tahun +=1 
        }
    }
    return tahun
}

console.log(berapaTahun(1000,2,50,1200))
console.log(berapaTahun(1500,5,100,5000))
console.log(berapaTahun(1500000,2.5,10000,2000000))