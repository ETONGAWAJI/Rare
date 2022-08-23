$(document).ready(function() {
    $(window).scroll(function(){
        if(this.scrollY > 20 ){
            $('.navbar').addClass("sticky");

        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
        
        }else{
        $('.scroll-up-btn').removeClass("show");
        }

    });


    //  SLIDE SCROLL UP SCRIPT 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    // SEARCH BUTTON SCRIPT
    const searchBtn = document.querySelector('.search_btn');
    const cancelBtn = document.querySelector('.cancel_btn');
    const searchTxt = document.querySelector('.search_txt');
    const searchBox = document.querySelector('.search-box'); 
    
    searchBtn.onclick = () => {
        searchBox.classList.add("active");
        searchTxt.classList.add("active");
        searchBtn.classList.add("active");
        cancelBtn.classList.add("active")
    }

    cancelBtn.onclick = () => {
        searchBox.classList.remove("active");
        searchTxt.classList.remove("active");
        searchBtn.classList.remove("active");
        cancelBtn.classList.remove("active")
    }

    // TOGGLE MENU/NAVBAR SCRIPT 

    $('.menu-btn').click (function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //TYPING ANIMATION SCRIPT

    var typed = new Typed(".typing", {
        strings: ["Graphic Designer", "UI & UX Designer", "Freelancer", "Video Editor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true                                  
    });


    var typed = new Typed(".typing-2", {
        strings: ["Graphic Design", "Web Design", "UI & UX Design", "Motion Graphics", "Photography", "Animation", "Videography"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true                                  
    });


//     //MODAL SCRIPT

//     //P1

//     var modal = document.getElementById("myModal");
//     //getting the image
//     var img = document.getElementById("p1");
//     var modalImg = document.getElementById("img01");
//     var captionText = document.getElementById("caption");

//     img.onclick = function(){
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
//     }

//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() { 
//         modal.style.display = "none";
//   }


//   //P2

//   var modals = document.getElementById("myModals");
//     //getting the image
//     var vid = document.getElementById("p2");
//     var video = document.getElementById("vid01");
//     var captionText = document.getElementById("captions");

//     vid.onclick = function(){
//         modals.style.display = "block";
//         video.src = this.src;
//         captionText.innerHTML = this.alt;
//     }

//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("closes")[0];

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() { 
//         modals.style.display = "none";
//   }


// //P3

//   var modal = document.getElementById("myModal");
//     //getting the image
//     var img = document.getElementById("p3");
//     var modalImg = document.getElementById("img01");
//     var captionText = document.getElementById("caption");

//     img.onclick = function(){
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
//     }

//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() { 
//         modal.style.display = "none";
//   }

//   //P4

//   var modal = document.getElementById("myModal");
//     //getting the image
//     var img = document.getElementById("p4");
//     var modalImg = document.getElementById("img01");
//     var captionText = document.getElementById("caption");

//     img.onclick = function(){
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
//     }

//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() { 
//         modal.style.display = "none";
//   }


//   //P5

//   var modal = document.getElementById("myModal");
//     //getting the image
//     var img = document.getElementById("p5");
//     var modalImg = document.getElementById("img01");
//     var captionText = document.getElementById("caption");

//     img.onclick = function(){
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
//     }

//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() { 
//         modal.style.display = "none";
//   }


//   //P6

//   var modal = document.getElementById("myModal");
//   //getting the image
//   var img = document.getElementById("p6");
//   var modalImg = document.getElementById("img01");
//   var captionText = document.getElementById("caption");

//   img.onclick = function(){
//       modal.style.display = "block";
//       modalImg.src = this.src;
//       captionText.innerHTML = this.alt;
//   }

//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];

//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() { 
//       modal.style.display = "none";
// }


// //P7

// var modal = document.getElementById("myModal");
//     //getting the image
//     var img = document.getElementById("p7");
//     var modalImg = document.getElementById("img01");
//     var captionText = document.getElementById("caption");

//     img.onclick = function(){
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
//     }

//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() { 
//         modal.style.display = "none";
//   }


//   //P8

//   var modal = document.getElementById("myModal");
//     //getting the image
//     var img = document.getElementById("p8");
//     var modalImg = document.getElementById("img01");
//     var captionText = document.getElementById("caption");

//     img.onclick = function(){
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
//     }

//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() { 
//         modal.style.display = "none";
//   }


//   //P9

//   var modal = document.getElementById("myModal");
//     //getting the image
//     var img = document.getElementById("p9");
//     var modalImg = document.getElementById("img01");
//     var captionText = document.getElementById("caption");

//     img.onclick = function(){
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
//     }

//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() { 
//         modal.style.display = "none";
//   }

//   //P10

//   var modal = document.getElementById("myModal");
//     //getting the image
//     var img = document.getElementById("p10");
//     var modalImg = document.getElementById("img01");
//     var captionText = document.getElementById("caption");

//     img.onclick = function(){
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
//     }

//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() { 
//         modal.style.display = "none";
//   }


    //CAROUSEL SCRIPT 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoPlayTimeOut: 2000,
        autoPlayHoverPause: true,
        responsive: {
           0:{ 
               items: 1,
               nav: false
            },

            600:{ 
                items: 1,
                nav: false
             },

            1000:{ 
                items: 3,
                nav: false
             }

        }

    })

});



