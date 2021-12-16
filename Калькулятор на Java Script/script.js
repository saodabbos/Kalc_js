    'use strict';
    let inp = document.querySelector('#inp');
    let elems = document.querySelectorAll('.elem');
    let on = document.querySelector('#on');
    let back = document.querySelector('#back');
    let plus = document.querySelector('#plus');
    let res = document.querySelector('#res');
    let text = document.querySelector('#text');
    
    for(let elem of elems){
        elem.addEventListener('click',function(){
            inp.value += elem.innerHTML;
            text.innerHTML += elem.innerHTML;
        })
    };
    on.addEventListener('click',function(){
        inp.value = null;
        text.innerHTML = null;
    });
    back.addEventListener('click',function(){
        let str = String(inp.value);
        let arr = str.split('');
        arr.pop();
        inp.value = arr.join('');
        text.innerHTML = arr.join('');
    });
    res.addEventListener('click',function(){
        inp.value = eval(inp.value);
        text.innerHTML = eval(inp.value);
    })