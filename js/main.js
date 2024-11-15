
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
  
    // Simulate a loading delay
    setTimeout(() => {
      preloader.style.display = "none";
      content.style.display = "block";
    }, 3000); // Adjust the time as needed
  });
  
  $(function(){
    // owl carasal start
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
               
            },
            500:{
              items:2,
            },
            600:{
                items:2,
                
            },
            1000:{
                items:3,
                // nav:true,
                
            }
        }
    
      
    });
  });
  
  
  

