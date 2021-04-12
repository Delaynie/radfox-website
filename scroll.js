let aosElements = Array.from(document.querySelectorAll('.aos'));
//console.log(aosElements); to test the divs are all showing up

//aosElements.forEach(element =>{
//    console.log(element.getBoundingClientRect());
//})

window.addEventListener('scroll', throttle(scanElements, 50));


function scanElements(){
    aosElements.forEach(element =>{
        if(isVisible(element)){
            element.classList.add('active');
        } else{
            element.classList.remove('active');
        }
    })
}

function isVisible(element) {
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTop = -300;
    return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
}

function throttle(fn, delay){
    let lastCall = 0;
    return (...args)=>{

        let context = this;

        let current = new Date().getTime();
    
        if(current - lastCall < delay){
            return 
        }
        lastCall = current;
        return fn.apply(context, ...args)
    }
}