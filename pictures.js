for (let i = 0; i < 15; i++) {
    var card = document.getElementsByClassName("card")[i]
    card.style.background = "url(resources/prep"+ i + ".png) center no-repeat"
    card.style.backgroundSize = "cover"
}

let horizontScroll=document.querySelector('.content_right');
    let leftBtn=document.getElementById('leftBtn');
    let rightBtn=document.getElementById('rightBtn');
    
    rightBtn.addEventListener('click', ()=> {
        horizontScroll.style.scrollBehavior = 'smooth';
        horizontScroll.scrollLeft +=1535;
    });

    leftBtn.addEventListener('click', ()=> {
        horizontScroll.scrollLeft -=1535;    
    });

