;(function (window, undefined) {
    "use strict";
    setTimeout(function () {
    },2000);
    var welcomeWrap = document.getElementById('welcomeWrap');
    welcomeWrap.classList.remove('loadingActive');


    var topNavBar = document.getElementById('topNavBar');

    window.onscroll = function (e) {
        // console.log(window.scrollY);
        if(window.scrollY > 0){
            topNavBar.classList.add('sticky')
        }else {
            topNavBar.classList.remove('sticky')
        }
        addScrollActive();
    };
    addScrollActive();
    function addScrollActive() {
        let specialTags = document.querySelectorAll('[data-x]');

        let minIndex = 0;
        for(let i = 1; i<specialTags.length;i++){
            if(Math.abs(specialTags[i].offsetTop -window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
                minIndex = i;
            }
        }


        let id = specialTags[minIndex].id;
        let a =document.querySelector('a[href="#'+id+'"]');
        let li = a.parentNode;
        let brothersAndMe = li.parentNode.children;
        for(let i = 0;i<brothersAndMe.length;i++){
            brothersAndMe[i].classList.remove('scrollYActive')
        }
        li.classList.add('scrollYActive')
    }

    let liTags = document.querySelectorAll('nav.menu>ul>li');

    for(let i = 0;i <liTags.length; i++){
        liTags[i].onmouseenter = function (e) {
            e.currentTarget.classList.add('active');
        };
        liTags[i].onmouseleave = function (e) {
          e.currentTarget.classList.remove('active');
        };
    }
    
    let aTags = document.querySelectorAll('nav.menu>ul>li>a');


    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    
    for(let i=0;i<aTags.length;i++){
        aTags[i].onclick = function (e) {
            e.preventDefault();
            let href = e.currentTarget.getAttribute('href');
            let element = document.querySelector(href);
            let top = element.offsetTop;
            let currentTop = window.scrollY;
            let targetTop = top -80;
            let coords = {y:currentTop};
            let tween = new TWEEN.Tween(coords)
                .to({y:targetTop},500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0,coords.y);
                })
                .start();
        }
    }
})(window, undefined);
