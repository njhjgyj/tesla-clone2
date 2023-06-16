window.onscroll = myFunction;

function myFunction() {

    if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {

        document.getElementById('div-for-content1').style.opacity = '0';
        document.getElementById('div-for-content1').style.transition = '0.3s ease-in-out';

        document.getElementById('div-for-content2').style.opacity = '0';
        document.getElementById('div-for-content2').style.transition = '0.3s ease-in-out';
        document.getElementById('div-for-content2').style.display = 'none';


    } else {

        document.getElementById('div-for-content1').style.opacity = '1';
        document.getElementById('div-for-content1').style.transition = '0.3s ease-in-out';

        document.getElementById('div-for-content2').style.opacity = '1';
        document.getElementById('div-for-content2').style.transition = '0.3s ease-in-out';
        document.getElementById('div-for-content2').style.display = 'block';

    };


    // if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {

    //     document.body.scrollTop = 70;
    //     document.documentElement.scrollTop = 70;


    // } else {

    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;

    // };

    // // document.body.scrollTop = 70;
    // // document.documentElement.scrollTop = 70;


    if (document.body.scrollTop > 630 || document.documentElement.scrollTop > 630) {

        document.getElementById('a-tag2').style.color = 'black';
        document.getElementById('a-tag2').style.transition = '0.3s ease-in-out';

        document.getElementById('h1-tag-for-mobile-nav1').style.color = 'black';
        document.getElementById('h1-tag-for-mobile-nav1').style.transition = '0.3s ease-in-out';

        document.getElementById('a-tag-for-mobile-nav1').style.color = 'black';
        document.getElementById('a-tag-for-mobile-nav1').style.transition = '0.3s ease-in-out';

        for (let i = 0; i < document.getElementsByClassName('a-tags2').length; i++) {

            document.getElementsByClassName('a-tags2')[i].style.color = 'black';
            document.getElementById('ol-tag1').style.transition = '0.3s ease-in-out';

        }


    } else {

        document.getElementById('a-tag2').style.color = 'white';
        document.getElementById('a-tag2').style.transition = '0.3s ease-in-out';

        document.getElementById('h1-tag-for-mobile-nav1').style.color = 'white';
        document.getElementById('h1-tag-for-mobile-nav1').style.transition = '0.3s ease-in-out';

        document.getElementById('a-tag-for-mobile-nav1').style.color = 'white';
        document.getElementById('a-tag-for-mobile-nav1').style.transition = '0.3s ease-in-out';

        for (let i = 0; i < document.getElementsByClassName('a-tags2').length; i++) {

            document.getElementsByClassName('a-tags2')[i].style.color = 'white';
            document.getElementById('ol-tag1').style.transition = '0.3s ease-in-out';

        }

    };


    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {

        document.getElementById('new-div1').style.opacity = '0.3';
        document.getElementById('new-div1').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div1').style.display = 'block';

    } else {

        document.getElementById('new-div1').style.opacity = '0';
        document.getElementById('new-div1').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div1').style.display = 'none';

    };

    if (document.body.scrollTop > 688 || document.documentElement.scrollTop > 688) {

        document.getElementById('new-div1').style.opacity = '1';
        document.getElementById('new-div1').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div1').style.position = 'inherit';

    } else {

        document.getElementById('new-div1').style.position = 'fixed';
        document.getElementById('new-div1').style.top = '4%';

    }


    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {

        document.getElementById('new-div2').style.opacity = '0.3';
        document.getElementById('new-div2').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div2').style.display = 'block';

    } else {

        document.getElementById('new-div2').style.opacity = '0';
        document.getElementById('new-div2').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div2').style.display = 'none';

    };

    if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {

        document.getElementById('new-div2').style.opacity = '1';
        document.getElementById('new-div2').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div2').style.position = 'inherit';

    } else {

        document.getElementById('new-div2').style.position = 'fixed';
        document.getElementById('new-div2').style.top = '4%';

    }


    if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {

        document.getElementById('new-div3').style.opacity = '0.3';
        document.getElementById('new-div3').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div3').style.display = 'block';

    } else {

        document.getElementById('new-div3').style.opacity = '0';
        document.getElementById('new-div3').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div3').style.display = 'none';

    };

    if (document.body.scrollTop > 2115 || document.documentElement.scrollTop > 2115) {

        document.getElementById('new-div3').style.opacity = '1';
        document.getElementById('new-div3').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div3').style.position = 'inherit';

    } else {

        document.getElementById('new-div3').style.position = 'fixed';
        document.getElementById('new-div3').style.top = '4%';

    }


    if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {

        document.getElementById('new-div4').style.opacity = '0.3';
        document.getElementById('new-div4').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div4').style.display = 'block';

    } else {

        document.getElementById('new-div4').style.opacity = '0';
        document.getElementById('new-div4').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div4').style.display = 'none';

    };

    if (document.body.scrollTop > 2830 || document.documentElement.scrollTop > 2830) {

        document.getElementById('new-div4').style.opacity = '1';
        document.getElementById('new-div4').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div4').style.position = 'inherit';

    } else {

        document.getElementById('new-div4').style.position = 'fixed';
        document.getElementById('new-div4').style.top = '4%';

    }


    if (document.body.scrollTop > 3200 || document.documentElement.scrollTop > 3200) {

        document.getElementById('new-div5').style.opacity = '0.3';
        document.getElementById('new-div5').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div5').style.display = 'block';

    } else {

        document.getElementById('new-div5').style.opacity = '0';
        document.getElementById('new-div5').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div5').style.display = 'none';

    };

    if (document.body.scrollTop > 3550 || document.documentElement.scrollTop > 3550) {

        document.getElementById('new-div5').style.opacity = '1';
        document.getElementById('new-div5').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div5').style.position = 'inherit';

    } else {

        document.getElementById('new-div5').style.position = 'fixed';
        document.getElementById('new-div5').style.top = '4%';

    }


    if (document.body.scrollTop > 3900 || document.documentElement.scrollTop > 3900) {

        document.getElementById('new-div6').style.opacity = '0.3';
        document.getElementById('new-div6').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div6').style.display = 'block';

    } else {

        document.getElementById('new-div6').style.opacity = '0';
        document.getElementById('new-div6').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div6').style.display = 'none';

    };

    if (document.body.scrollTop > 4260 || document.documentElement.scrollTop > 4260) {

        document.getElementById('new-div6').style.opacity = '1';
        document.getElementById('new-div6').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div6').style.position = 'inherit';

    } else {

        document.getElementById('new-div6').style.position = 'fixed';
        document.getElementById('new-div6').style.top = '4%';

    }


    if (document.body.scrollTop > 4600 || document.documentElement.scrollTop > 4600) {

        document.getElementById('new-div7').style.opacity = '0.3';
        document.getElementById('new-div7').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div7').style.display = 'block';

    } else {

        document.getElementById('new-div7').style.opacity = '0';
        document.getElementById('new-div7').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div7').style.display = 'none';

    };

    if (document.body.scrollTop > 4855 || document.documentElement.scrollTop > 4855) {

        document.getElementById('new-div7').style.opacity = '1';
        document.getElementById('new-div7').style.transition = '0.5s ease-in-out';
        document.getElementById('new-div7').style.position = 'inherit';

    } else {

        document.getElementById('new-div7').style.position = 'fixed';
        document.getElementById('new-div7').style.top = '4%';

    }


};




function menuBtn1() {

        document.body.style.overflowY = 'hidden';

        document.getElementById('menu-div1').style.display = 'block';
        // document.getElementById('menu-div2').style.display = "flex";
        document.getElementById('menu-div1').style.right = "-99vw";
        document.getElementById('div-for-blur').style.display = 'block';

        setTimeout(() => {

            document.getElementById('menu-div1').style.right = "0";

        }, 1);

        setTimeout(() => {

            document.getElementById('menu-div2').style.display = "flex";

        }, 500);

}

function closeNav() {

    // document.getElementById('menu-div1').style.display = 'none';
    document.body.style.overflowY = 'scroll';
    document.getElementById('div-for-blur').style.display = 'none';

    document.getElementById('menu-div1').style.right = "-99vw";

    setTimeout(() => {

        document.getElementById('menu-div1').style.display = "none";

    }, 400);

    setTimeout(() => {

        document.getElementById('menu-div2').style.display = "none";

    }, 10);

}

document.getElementById('div-for-blur').addEventListener('click', () => {

    document.getElementById('menu-div1').style.right = "-99vw";
    document.body.style.overflowY = 'scroll';
    document.getElementById('div-for-blur').style.display = 'none';

    setTimeout(() => {

        document.getElementById('menu-div2').style.display = "none";

    }, 10);

    setTimeout(() => {

        document.getElementById('menu-div1').style.display = "none";

    }, 400, false);

})
