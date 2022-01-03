function minAll(...a){

    let smallest=a[0];
    for(let i=0;i<a.length;i++){

        if(a[i]<smallest){
            smallest=a[i];
        }

    }
    return smallest;
}
let s = minAll(2, 7, 13, 4, 5)
console.log(s);
document.querySelector('p').innerText = s
document.querySelector('p').style.fontSize = '100px';