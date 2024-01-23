$(function(){
    $(window).scroll(function(){
      var winTop = $(window).scrollTop();
      if(winTop >= 30){
        $("body").addClass("sticky-header");
      }else{
        $("body").removeClass("sticky-header");
      }
    });
});

let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', ()=>{
    navigate(-1);
})

document.querySelector('.next-button').addEventListener('click', () =>{
    navigate(1);
})

function navigate(){
    const galleryContainer = document.querySelector('.gallery-container');
    const totalImages = document.querySelectorAll('.gallery-item').length;

    currentIndex=(currentIndex + direction + totalImages) % totalImages;

    const offset = -currentIndex * 100;

    galleryContainer.style.transform = `translateX(${offset}%)`;
}

let autoplayInterval = null;

function startAutoplay(interval){
    stopAutoplay();
    autoplayInterval = setInterval(()=>{
        navigate(1);
    }, interval);
}

function stopAutoplay(){
    clearInterval(autoplayInterval);
}

startAutoplay(3000);

