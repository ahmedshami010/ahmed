function openfunction(){
    document.getElementById('menu').style.width = '200px';
    // window.addEventListener('mouseup' , function (event))
    // var box = document.getElementById('menu')
    // if(Event.target != box){
    //     box.style.width = '0px';
    // }


}

function closefunction(){
    document.getElementById('menu').style.width = '0px';



}

function send_open(){
    var x= document.getElementById('send');
   x.classList.add('open');
x.style.opacity="1";



   
}

function send_close(){
    var  x= document.getElementById('send');
    x.classList.remove('close');
    x.style.opacity="0";
}
