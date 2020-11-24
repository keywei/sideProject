    var current = 0;
    var carousel = document.getElementsByClassName('carousel')[0];
    var images = document.getElementsByClassName('images')[0];
    var btns = document.getElementsByClassName('btns')[0];
    var prev = document.getElementsByClassName('prev')[0];
    var next = document.getElementsByClassName('next')[0];
    var imagesWidth = images.children[0].offsetWidth;
    var timer = null;
    var moveTimer = null;
    var addBtn = '';

    for (let i = 0; i < images.children.length; i++) {
        addBtn += '<a class = "btn">' + (i + 1) + '</a>';
    }
    btns.innerHTML = addBtn;

    images.style.width = images.children.length * imagesWidth + 'px';

    for (let i = 0; i < btns.children.length; i++) {
        btns.children[i].addEventListener('click', function () {
            move(i);
        })
    }

    prev.addEventListener('click', function () {
        let to;
        if (current === 0) {
            to = images.children.length - 1;
        } else {
            to = current - 1;
        }
        move(to);
    });

    next.addEventListener('click', function () {
        let to;
        if (current === images.children.length - 1) {
            to = 0;
        } else {
            to = current + 1;
        }
        move(to);
    });

    carousel.addEventListener('mouseenter', function () {
        clearInterval(timer);
    });

    carousel.addEventListener('mouseleave', function () {
        autoplay();
    });

    indexbtn();
    autoplay();

    function move(to) {
        let s = 30;
        if (to === 0 && current === images.children.length - 1 ||
            current === 0 && to === images.children.length - 1) {
            s = 10;
        }
        clearInterval(moveTimer);
        indexbtn(to);
        current = to;
        let toDistance = to * -imagesWidth;
        moveTimer = setInterval(function () {
            let currentDistance = images.offsetLeft;
            let move = 40;
            move = currentDistance < toDistance ? move : -move;
            currentDistance += move;
            if (Math.abs(currentDistance - toDistance) > Math.abs(move)) {
                images.style.left = currentDistance + 'px';
            } else {
                clearInterval(moveTimer);
                images.style.left = toDistance + 'px';
            }
        }, s);
    }

    function indexbtn(index) {
        index = index || 0;
        for (let i of btns.children) {
            if (i.classList.contains('active')) {
                i.classList.remove('active');
            }
        }
        btns.children[index].classList.add('active');
    }

    function autoplay() {
        timer = setInterval(function () {
            let to;
            if (current === images.children.length - 1) {
                to = 0;
            } else {
                to = current + 1;
            }
            move(to);
        }, 2000);
    }
