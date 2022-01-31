let button = document.querySelector('.button')
let lucky = document.querySelector('.lucky')
button.addEventListener('click',function(){
    let input = document.querySelector('.searchBox').value;
    window.location.href=`https://www.google.com/search?q=${input}`
})
lucky.addEventListener('click',function(){
    let input = document.querySelector('.searchBox').value;
    window.location.href=`https://www.google.com/search?q=${input}&btnI`
})