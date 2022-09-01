const buttons = document.querySelector('.buttons');
const btn = document.querySelectorAll('span');
const value = document.getElementById('value');

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function () {
        if(this.innerHTML == "="){
            value.innerHTML = eval(value.innerHTML);

        }else{
            if(this.innerHTML == "Clear"){
                value.innerHTML= "";
            }
            else{
                value.innerHTML +=  this.innerHTML;
            }
        }
        
    })
}
const html = document.querySelector('html')
const check = document.querySelector("#checkbox");
check.addEventListener('change', function(){
    html.classList.toggle('dark')
})