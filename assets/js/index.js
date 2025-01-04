// ---------------sidebar-js---------------------------------
function openNav() {
    const sidePanel = document.getElementById("mySidepanel");

    if (window.innerWidth <= 992) {
        sidePanel.style.right = "0%";
    } else {
        sidePanel.style.right = "84%";
    }
}

function closeNav() {
    document.getElementById("mySidepanel").style.right = "100%";
}



// $(document).ready(function () {
//     $('.baneercontainer').owlCarousel({
//         loop: true,
//         margin: 10,
//         nav: true,
//         navText: ['<img src="./assets/images/pre-btn-carousel.svg" alt="Previous" class="custom-prev-icon">',
//             '<img src="./assets/images/next-btn-carousel.svg" alt="Next" class="custom-next-icon">'],
//         dots: false,
//         autoplay:false,
//         autoplayTimeout: 3000,
//         responsive: {
//             0: {
//                 items: 1
//             }
//         }
//     });
// });

$(document).ready(function () {
    $('.Essential-section-bottom').owlCarousel({
        loop: true,
        margin: 10,
        nav:true,
        navText: ['<img src="./assets/images/pre-btn-carousel.svg" alt="Previous" class="happy-custom-prev-icon">',
            '<img src="./assets/images/next-btn-carousel.svg" alt="Next" class="happy-custom-next-icon">'],
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 2
            },
            768:{
                items:3

            },
            1200: {
                items: 4,
            },
        }
    });
});


$(document).ready(function () {
    $('.video-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<img src="./assets/images/pre-btn-carousel.svg" alt="Previous" class="video-custom-prev-icon">',
            '<img src="./assets/images/next-btn-carousel.svg" alt="Next" class="video-custom-next-icon">'],
        dots: false,
        autoplay:true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 3,   
                autoWidth: true
            },
        }
    });
});


$(document).ready(function () {
    $('.happy-bottom').owlCarousel({
        loop: true,
        margin: 30,
        stagePadding:30,
        nav: true,
        navText: ['<img src="./assets/images/pre-btn-carousel.svg" alt="Previous" class="happy-custom-prev-icon">',
            '<img src="./assets/images/next-btn-carousel.svg" alt="Next" class="happy-custom-next-icon">'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3,
            },
        }
    });
});


