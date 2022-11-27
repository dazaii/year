let body = document.getElementById('body');
let night = document.getElementById('night');
let highlands = document.getElementById('highlands');

//parallax
let moonlighttext = document.getElementById('moonlighttext');
let moonlighttextright = document.getElementById('moonlighttextright');
let moon = document.getElementById('moon');
let view = document.getElementById('view');
let stars = document.getElementById('stars');
let mountains_behind = document.getElementById('mountains_behind');


let sea = document.getElementById('sea');
let sun = document.getElementById('sun');
let hillbehind = document.getElementById('hillbehind');
let mountain = document.getElementById('mountain');
let cloudblue = document.getElementById('cloudblue2');
let placetext = document.getElementById('placetext');



//moonlighttext.style.right = moon.clientWidth +'px';
//moonlighttextright.style.right = -moon.clientWidth - moonlighttextright.clientWidth/2 +'px';
document.addEventListener('scroll', function() {

    // GOODNIGHT
    let center = night.offsetTop + night.clientHeight / 2;
    let value = window.scrollY - night.offsetTop;
    let minpercentage = .4;
    let minrange = -800;
    let maxrange = night.clientHeight;
    //animate highlands part only when it is showed in screen (based on minrange and maxrange) 
    if (value > minrange && value < maxrange) {
        let eclipse = night.offsetTop - window.scrollY;
        let percentage = map(eclipse, 0, night.clientHeight, minpercentage, 1);
        stars.style.transform = 'translateX(' + value * .10 + 'px)';
        moon.style.transform = 'translateY(' + value * percentage + 'px)';
        if (percentage <= minpercentage) {
            moonlighttext.style.transform = 'translateY(' + (value) * percentage + 'px)';
            moonlighttextright.style.transform = 'translateY(' + (value) * percentage + 'px)';
        } else {
            moonlighttext.style.transform = 'translateY(' + (-value) * percentage + 'px)';
            moonlighttextright.style.transform = 'translateY(' + (-value) * percentage + 'px)';
        }
        mountains_behind.style.transform = 'translateY(' + value * .40 + 'px)';
    }


    value = window.scrollY - highlands.offsetTop;
    minrange = -800;
    maxrange = highlands.clientHeight;
    //animate highlands part only when it is showed in screen (based on minrange and maxrange) 
    if (value > minrange && value < maxrange) {
        sea.style.transform = 'translateY(' + value * .20 + 'px)';
        mountain.style.width = value * .10 + 400 + 'px';
        cloudblue.style.width = value * .01 + 40 + '%';
        placetext.style.top = -value * .01 + 60 + '%';
        let green = map(-value, -400, 100, 193, 255);
        let blue = map(-value, -400, 100, 60, 255);
        sun.style.boxShadow = '0 0 100px 50px rgba(255,' + green + ',' + blue + ',1)';

        
        green = map(-value, -400, 100, 263, 2455);
        blue = map(-value, -400, 100, 100, 255);
        sun.style.background = 'rgb(255,'+green+','+blue+')';

        eclipse = highlands.offsetTop - window.scrollY;
        percentage = map(eclipse, 0, highlands.clientHeight, .6, .8);
        sun.style.transform = 'translateY(' + value * percentage + 'px)';
        scalepercentage = map(eclipse, minrange, 0, .8, .1);
        let nvalue = map(value, -400, 0, 150, 200);
        sun.style.width = nvalue * scalepercentage + 'px';
        sun.style.height = nvalue * scalepercentage + 'px';

        let red = map(value, -400, 200, 120, 246);
        green = map(value, -400, 200, 186, 196);
        blue = map(value, -400, 200, 170, 180);
        //246, 196, 125
        highlands.style.background = 'linear-gradient(rgb(115,149,180) 0%, rgba('+red+','+green+','+blue+') 80%)';

    }
})

body.style.overflowY = "hidden";

function loaded() {
    view.innerHTML = "";
    //document.documentElement.requestFullscreen();
    body.style.overflowY = "auto";
}









function map(input, x, y, newx, newy) {
    var oldrange = abs(y - x);
    var newrange = abs(newy - newx);
    if (input > y) input = y;
    if (input < x) input = x;

    var ratio;
    if (x < 0) {
        var zeroboundaryratio = abs(x) / oldrange;
        ratio = input / oldrange + zeroboundaryratio;
    } else ratio = input / oldrange;

    if ((newy - newx) < 0) {
        return (1 - ratio) * newrange + newx;
    } else return ratio * newrange + newx;
}

function abs(n) {
    if (n < 0) {
        n = n * -1;
    }
    return n;
}