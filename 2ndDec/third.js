function fn() {
    let input = document.getElementById("input").value;
    for(let i=1;i<=input;i++){
        let pref = document.createElement('p')
        pref.innerText = i;
        if(i%3==0 && i%5==0)
        {
            pref.innerText = "Fizz Buzz";

        }
        else if(i%3==0){
            pref.innerText = "Fizz";

        }
        else if(i%5==0){
            pref.innerText = "Buzz";

        }


        let div = document.querySelector('div')
        div.appendChild(pref)

    }






}