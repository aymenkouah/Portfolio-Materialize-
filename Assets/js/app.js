
document.addEventListener('scroll', function() {
    var rect = document.getElementsByTagName("body")[0].getBoundingClientRect();
    if (rect.top === 0) {
        document.querySelector("#header-btn-trigger").setAttribute("style", "transform: scale(1)")
    }else {
        document.querySelector("#header-btn-trigger").setAttribute("style", "transform: scale(0)")
    }
});

$(document).ready(function() {
    $('textarea#message').characterCounter();
  });


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {
        throttle: 10
    });

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {});


    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
    });

    var elems = document.querySelector('#carousel-photography');
    var instances = M.Carousel.init(elems, {
        indicators: true,
        duration: 200,    
    });

    var elems = document.querySelector('#carousel-motion');
    var instances = M.Carousel.init(elems, {
        indicators: true,
        duration: 200,    
    });

    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});

    var elems = document.querySelectorAll('.tabs');
    var instances = M.Tabs.init(elems, {});

    var elems = document.querySelector('#carousel');
    var instances = M.Carousel.init(elems, {
        indicators: true,
        duration: 200,
        dist:0,
        fullWidth:true    
    });

    var carouselSliding = setInterval(() => {
        var elem = document.getElementById('carousel');
        var instance = M.Carousel.getInstance(elem);
        instance.next();
    }, 7000);


  });

// document.getElementById("header").addEventListener('click', () => {
//     var elems = document.querySelectorAll('.carousel');
//     var instance = M.Carousel.getInstance(elems[0]);
//     instance.next();

// })

document.addEventListener('click', function (event) {
    let center = window.innerWidth / 2
    if (event.target.className==="c1 carousel-img"){
        var elems = document.getElementById('carousel');
        var instance = M.Carousel.getInstance(elems);
        if (event.offsetX < center) {
            instance.prev()
        }
        else {
            instance.next();
        }
        
    }
    
}, false);