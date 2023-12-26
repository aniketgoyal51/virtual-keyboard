let capslock=true
const pe=document.getElementsByClassName('screen')[0]
const display=document.querySelectorAll('.display')
const del=document.getElementsByClassName('del')[0]
const tab=document.getElementsByClassName('tab')[0]
const caps=document.getElementsByClassName('caps')[0]
const enter=document.getElementsByClassName('enter')[0]
const space=document.getElementsByClassName('space')[0]
const shift=document.getElementsByClassName('shift')[0]

var count=0


display.forEach(function(button) {
    button.onclick = function(e) {
        console.log('Clicked: ' + e.target.value);
        console.log(capslock);
        
        // v=e.target.value
        pe.innerHTML += capslock? e.target.value:e.target.value.toUpperCase();
        count+=1
    };
});
del.onclick=function(){
    console.log('cgvjbhk')
    var textContent = pe.textContent;
    if (textContent.length > 0) {
        var newTextContent = textContent.slice(0, -1);
        pe.textContent = newTextContent;
    }
}
tab.onclick=function(){
    console.log('cgvjbhk')
    pe.innerHTML+='&nbsp;&nbsp;&nbsp;&nbsp;';
}
caps.onclick=function(){
    console.log(capslock)
    capslock= !capslock 
    capslock?caps.style.backgroundColor="antiquewhite":caps.style.backgroundColor="burlywood"
}
enter.onclick=function(){
    console.log('cgvjbhk')
    pe.innerHTML+=`<br>`;
}
space.onclick=function(){
    console.log('cgvjbhk')
    pe.innerHTML+='&nbsp;';
}
shift.onclick=
function(){setTimeout(function(){
    console.log(capslock)
    capslock= !capslock
},1000)
capslock=!capslock
}