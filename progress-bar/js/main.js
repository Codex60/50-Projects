const progress =document.getElementById('progress')
const prev =document.getElementById('prev')
const next =document.getElementById('next')
const cricles =document.querySelectorAll('.circle');

console.log(cricles);



let currentActive =1
next.addEventListener('click', () => {
    currentActive++
    if( currentActive > cricles.length){
        currentActive = cricles.length
    }
    update()
})

prev.addEventListener('click', () =>{
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }
    update()
})

function update (){
    cricles.forEach((cricle , idx) =>{
        if(idx <currentActive){
            cricle.classList.add('active')
        } else{
            cricle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
     progress.style.width = (actives.length -1 ) /(cricles.length-1) *100 + '%'
   

    if( currentActive === 1 ) {
        prev.disabled = ture
    }
    else if( currentActive === cricle.length )
    {
        next.disabled = ture
    }
    else{
        prev.disabled = false
        next.disabled = false
    }
}