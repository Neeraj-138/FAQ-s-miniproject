const accordings=document.querySelectorAll('.according');
console.log(accordings);
accordings.forEach(according=>{
    const icon=according.querySelector('.icon');
    const answer=according.querySelector('.answer');
    
    according.addEventListener('click',()=>{
        if(icon.classList.contains('active'))
        {
            icon.classList.remove('active');
            answer.style.maxHeight=null;
        }
        else{
            icon.classList.add('active');
            answer.style.maxHeight=answer.scrollHeight + 'px';            
        }
    })

})