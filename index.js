document.addEventListener('DOMContentLoaded', () => {
    let mstart = document.getElementById('mstart');
    mstart.addEventListener('click', () => {
        var mbtn = document.getElementById("mbtn");
        mbtn.style.display = "none";
        var commodal = document.getElementById('specific')
        commodal.style.display = 'block'; 
        
        const compassCircle = document.querySelector(".compass-circle");
        const isIOS =
            navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
            navigator.match(/AppleWebKit/);

        function init() {
            mstart.addEventListener("click", startCompass);
            navigator.geolocation.getCurrentPosition(locationHandler);

            if (!isIOS) {
                window.addEventListener("deviceorientationabsolute", handler, true);
            }
        }

        function startCompass() {
            if (isIOS) {
                DeviceOrientationEvent.requestPermission()
                    .then((response) => {
                        if (response === "granted") {
                            window.addEventListener("deviceorientation", handler, true);
                        } else {
                            alert("has to be allowed!");
                        }
                    })
                    .catch(() => alert("not supported"));
            }
        }

        function handler(e) {
            compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
            compassCircle.style.transform = `translate(-50%, -50%) rotate(${-compass}deg)`;

            // ±15 degree
            if (
                (pointDegree < Math.abs(compass) &&
                    pointDegree + 15 > Math.abs(compass)) ||
                pointDegree > Math.abs(compass + 15) ||
                pointDegree < Math.abs(compass)
            ) {

            } else if (pointDegree) {
            }
        }

        let pointDegree;

        function locationHandler(position) {
            const { latitude, longitude } = position.coords;
            pointDegree = calcDegreeToPoint(latitude, longitude);

            if (pointDegree < 0) {
                pointDegree = pointDegree + 360;
            }
        }

        function calcDegreeToPoint(latitude, longitude) {
            // Qibla geolocation
            const point = {
                lat: 21.422487,
                lng: 39.826206
            };

            const phiK = (point.lat * Math.PI) / 180.0;
            const lambdaK = (point.lng * Math.PI) / 180.0;
            const phi = (latitude * Math.PI) / 180.0;
            const lambda = (longitude * Math.PI) / 180.0;
            const psi =
                (180.0 / Math.PI) *
                Math.atan2(
                    Math.sin(lambdaK - lambda),
                    Math.cos(phi) * Math.tan(phiK) -
                    Math.sin(phi) * Math.cos(lambdaK - lambda)
                );
            return Math.round(psi);
        }

        init();

        var modal1 = document.getElementById("step1");
        modal1.style.display = "block";
    });

    let btn1 = document.getElementById('step1n');
    btn1.addEventListener('click', () => {
        var modal1 = document.getElementById("step1");
        modal1.style.display = "none";
        var modal2 = document.getElementById("step2");
        modal2.style.display = "block";
    });

    let btn2 = document.getElementById('step2n');
    btn2.addEventListener('click', () => {
        var modal2 = document.getElementById("step2");
        modal2.style.display = "none";
        var modal3 = document.getElementById("step3");
        modal3.style.display = "block";
    });

    let btn3 = document.getElementById('step3n');
    btn3.addEventListener('click', () => {
        var modal3 = document.getElementById("step3");
        modal3.style.display = "none";
    });

    let btn4 = document.getElementById('step4n');
    btn4.addEventListener('click', () => {
        var modal4 = document.getElementById("step4");
        modal4.style.display = "none";
        var modal5 = document.getElementById("step5");
        modal5.style.display = "block";
    });

    let btn5 = document.getElementById('step5n');
    btn5.addEventListener('click', () => {
        var modal5 = document.getElementById("step5");
        modal5.style.display = "none";
    });

});

let skip1 = document.getElementById('step1s');
skip1.addEventListener('click', () => {
    var modal1 = document.getElementById("step1");
    modal1.style.display = "none";
});

let skip2 = document.getElementById('step2s');
skip2.addEventListener('click', () => {
    var modal2 = document.getElementById("step2");
    modal2.style.display = "none";
});

let skip3 = document.getElementById('step3s');
skip3.addEventListener('click', () => {
    var modal3 = document.getElementById("step3");
    modal3.style.display = "none";
});

//Script for displaying checkboxes for north direction

let divn = document.getElementById('div1');
divn.addEventListener('click', () => {
    if (document.getElementById('mydiv1').style.display == 'block' || document.getElementById('mydiv2').style.display == 'block'
        || document.getElementById('mydiv3').style.display == 'block' || document.getElementById('mydiv4').style.display == 'block'
        || document.getElementById('mydiv5').style.display == 'block' || document.getElementById('mydiv6').style.display == 'block'
        || document.getElementById('mydiv7').style.display == 'block' || document.getElementById('mydiv8').style.display == 'block') {
        document.getElementById("step4").style.display = "none";
        document.getElementById('mydiv1').style.display = 'block';
        document.getElementById('mydiv2').style.display = 'none';
        document.getElementById('mydiv3').style.display = 'none';
        document.getElementById('mydiv4').style.display = 'none';
        document.getElementById('mydiv5').style.display = 'none';
        document.getElementById('mydiv6').style.display = 'none';
        document.getElementById('mydiv7').style.display = 'none';
        document.getElementById('mydiv8').style.display = 'none';
    } else {
        document.getElementById("step4").style.display = "block";
        document.getElementById('mydiv1').style.display = 'block';
        document.getElementById('mydiv2').style.display = 'none';
        document.getElementById('mydiv3').style.display = 'none';
        document.getElementById('mydiv4').style.display = 'none';
        document.getElementById('mydiv5').style.display = 'none';
        document.getElementById('mydiv6').style.display = 'none';
        document.getElementById('mydiv7').style.display = 'none';
        document.getElementById('mydiv8').style.display = 'none';
    }
});

//Script for displaying checkboxes for north-east direction
let divne = document.getElementById('div2');
divne.addEventListener('click', () => {
    if (document.getElementById('mydiv1').style.display == 'block' || document.getElementById('mydiv2').style.display == 'block'
        || document.getElementById('mydiv3').style.display == 'block' || document.getElementById('mydiv4').style.display == 'block'
        || document.getElementById('mydiv5').style.display == 'block' || document.getElementById('mydiv6').style.display == 'block'
        || document.getElementById('mydiv7').style.display == 'block' || document.getElementById('mydiv8').style.display == 'block') {
        document.getElementById("step4").style.display = "none";
        document.getElementById('mydiv2').style.display = 'block';
        document.getElementById('mydiv1').style.display = 'none';
        document.getElementById('mydiv3').style.display = 'none';
        document.getElementById('mydiv4').style.display = 'none';
        document.getElementById('mydiv5').style.display = 'none';
        document.getElementById('mydiv6').style.display = 'none';
        document.getElementById('mydiv7').style.display = 'none';
        document.getElementById('mydiv8').style.display = 'none';
    } else {
        document.getElementById("step4").style.display = "block";
        document.getElementById('mydiv2').style.display = 'block';
        document.getElementById('mydiv1').style.display = 'none';
        document.getElementById('mydiv3').style.display = 'none';
        document.getElementById('mydiv4').style.display = 'none';
        document.getElementById('mydiv5').style.display = 'none';
        document.getElementById('mydiv6').style.display = 'none';
        document.getElementById('mydiv7').style.display = 'none';
        document.getElementById('mydiv8').style.display = 'none';
    }
});

//Script for displaying checkboxes for east direction
let dive = document.getElementById('div3');
dive.addEventListener('click', () => {
    if (document.getElementById('mydiv1').style.display == 'block' || document.getElementById('mydiv2').style.display == 'block'
        || document.getElementById('mydiv3').style.display == 'block' || document.getElementById('mydiv4').style.display == 'block'
        || document.getElementById('mydiv5').style.display == 'block' || document.getElementById('mydiv6').style.display == 'block'
        || document.getElementById('mydiv7').style.display == 'block' || document.getElementById('mydiv8').style.display == 'block') {
        document.getElementById("step4").style.display = "none";
        document.getElementById('mydiv3').style.display = 'block';
        document.getElementById('mydiv1').style.display = 'none';
        document.getElementById('mydiv2').style.display = 'none';
        document.getElementById('mydiv4').style.display = 'none';
        document.getElementById('mydiv5').style.display = 'none';
        document.getElementById('mydiv6').style.display = 'none';
        document.getElementById('mydiv7').style.display = 'none';
        document.getElementById('mydiv8').style.display = 'none';
    } else {
        document.getElementById("step4").style.display = "block";
        document.getElementById('mydiv3').style.display = 'block';
        document.getElementById('mydiv1').style.display = 'none';
        document.getElementById('mydiv2').style.display = 'none';
        document.getElementById('mydiv4').style.display = 'none';
        document.getElementById('mydiv5').style.display = 'none';
        document.getElementById('mydiv6').style.display = 'none';
        document.getElementById('mydiv7').style.display = 'none';
        document.getElementById('mydiv8').style.display = 'none';
    }
});

//Script for displaying checkboxes for south-east direction
let divse = document.getElementById('div4');
divse.addEventListener('click', () => {
    if (document.getElementById('mydiv1').style.display == 'block' || document.getElementById('mydiv2').style.display == 'block'
        || document.getElementById('mydiv3').style.display == 'block' || document.getElementById('mydiv4').style.display == 'block'
        || document.getElementById('mydiv5').style.display == 'block' || document.getElementById('mydiv6').style.display == 'block'
        || document.getElementById('mydiv7').style.display == 'block' || document.getElementById('mydiv8').style.display == 'block') {
        document.getElementById("step4").style.display = "none";
        document.getElementById('mydiv4').style.display = 'block';
        document.getElementById('mydiv1').style.display = 'none';
        document.getElementById('mydiv2').style.display = 'none';
        document.getElementById('mydiv3').style.display = 'none';
        document.getElementById('mydiv5').style.display = 'none';
        document.getElementById('mydiv6').style.display = 'none';
        document.getElementById('mydiv7').style.display = 'none';
        document.getElementById('mydiv8').style.display = 'none';
    } else {
        document.getElementById("step4").style.display = "block";
        document.getElementById('mydiv4').style.display = 'block';
        document.getElementById('mydiv1').style.display = 'none';
        document.getElementById('mydiv2').style.display = 'none';
        document.getElementById('mydiv3').style.display = 'none';
        document.getElementById('mydiv5').style.display = 'none';
        document.getElementById('mydiv6').style.display = 'none';
        document.getElementById('mydiv7').style.display = 'none';
        document.getElementById('mydiv8').style.display = 'none';
    }
});

//Script for displaying checkboxes for south direction
let divs = document.getElementById('div5');
divs.addEventListener('click', () => {
    if (document.getElementById('mydiv1').style.display == 'block' || document.getElementById('mydiv2').style.display == 'block'
        || document.getElementById('mydiv3').style.display == 'block' || document.getElementById('mydiv4').style.display == 'block'
        || document.getElementById('mydiv5').style.display == 'block' || document.getElementById('mydiv6').style.display == 'block'
        || document.getElementById('mydiv7').style.display == 'block' || document.getElementById('mydiv8').style.display == 'block') {
        document.getElementById("step4").style.display = "none";
        document.getElementById('mydiv5').style.display = 'block';
        document.getElementById('mydiv1').style.display = 'none';
        document.getElementById('mydiv2').style.display = 'none';
        document.getElementById('mydiv3').style.display = 'none';
        document.getElementById('mydiv4').style.display = 'none';
        document.getElementById('mydiv6').style.display = 'none';
        document.getElementById('mydiv7').style.display = 'none';
        document.getElementById('mydiv8').style.display = 'none';
    } else {
        document.getElementById("step4").style.display = "block";
        document.getElementById('mydiv5').style.display = 'block';
        document.getElementById('mydiv1').style.display = 'none';
        document.getElementById('mydiv2').style.display = 'none';
        document.getElementById('mydiv3').style.display = 'none';
        document.getElementById('mydiv4').style.display = 'none';
        document.getElementById('mydiv6').style.display = 'none';
        document.getElementById('mydiv7').style.display = 'none';
        document.getElementById('mydiv8').style.display = 'none';
    }
});

//Script for displaying checkboxes for south-west direction
let divsw = document.getElementById('div6');
divsw.addEventListener('click', () => {
    if (document.getElementById('mydiv1').style.display == 'block' || document.getElementById('mydiv2').style.display == 'block'
        || document.getElementById('mydiv3').style.display == 'block' || document.getElementById('mydiv4').style.display == 'block'
        || document.getElementById('mydiv5').style.display == 'block' || document.getElementById('mydiv6').style.display == 'block'
        || document.getElementById('mydiv7').style.display == 'block' || document.getElementById('mydiv8').style.display == 'block') {
        document.getElementById("step4").style.display = "none";
        document.getElementById('mydiv6').style.display = 'block';
        document.getElementById('mydiv1').style.display = 'none';
        document.getElementById('mydiv2').style.display = 'none';
        document.getElementById('mydiv3').style.display = 'none';
        document.getElementById('mydiv4').style.display = 'none';
        document.getElementById('mydiv5').style.display = 'none';
        document.getElementById('mydiv7').style.display = 'none';
        document.getElementById('mydiv8').style.display = 'none';
    } else {
        document.getElementById("step4").style.display = "block";
        document.getElementById('mydiv6').style.display = 'block';
        document.getElementById('mydiv1').style.display = 'none';
        document.getElementById('mydiv2').style.display = 'none';
        document.getElementById('mydiv3').style.display = 'none';
        document.getElementById('mydiv4').style.display = 'none';
        document.getElementById('mydiv5').style.display = 'none';
        document.getElementById('mydiv7').style.display = 'none';
        document.getElementById('mydiv8').style.display = 'none';
    }
});

//Script for displaying checkboxes for west direction
let divw = document.getElementById('div7');
divw.addEventListener('click', () => {
    if (document.getElementById('mydiv1').style.display == 'block' || document.getElementById('mydiv2').style.display == 'block'
        || document.getElementById('mydiv3').style.display == 'block' || document.getElementById('mydiv4').style.display == 'block'
        || document.getElementById('mydiv5').style.display == 'block' || document.getElementById('mydiv6').style.display == 'block'
        || document.getElementById('mydiv7').style.display == 'block' || document.getElementById('mydiv8').style.display == 'block') {
        document.getElementById("step4").style.display = "none";
        document.getElementById('mydiv7').style.display = 'block';
        document.getElementById('mydiv1').style.display = 'none';
        document.getElementById('mydiv2').style.display = 'none';
        document.getElementById('mydiv3').style.display = 'none';
        document.getElementById('mydiv4').style.display = 'none';
        document.getElementById('mydiv5').style.display = 'none';
        document.getElementById('mydiv6').style.display = 'none';
        document.getElementById('mydiv8').style.display = 'none';
    } else {
        document.getElementById("step4").style.display = "block";
        document.getElementById('mydiv7').style.display = 'block';
        document.getElementById('mydiv1').style.display = 'none';
        document.getElementById('mydiv2').style.display = 'none';
        document.getElementById('mydiv3').style.display = 'none';
        document.getElementById('mydiv4').style.display = 'none';
        document.getElementById('mydiv5').style.display = 'none';
        document.getElementById('mydiv6').style.display = 'none';
        document.getElementById('mydiv8').style.display = 'none';
    }
});

//Script for displaying checkboxes for north-west direction
let divnw = document.getElementById('div8');
divnw.addEventListener('click', () => {
    if (document.getElementById('mydiv1').style.display == 'block' || document.getElementById('mydiv2').style.display == 'block'
        || document.getElementById('mydiv3').style.display == 'block' || document.getElementById('mydiv4').style.display == 'block'
        || document.getElementById('mydiv5').style.display == 'block' || document.getElementById('mydiv6').style.display == 'block'
        || document.getElementById('mydiv7').style.display == 'block' || document.getElementById('mydiv8').style.display == 'block') {
        document.getElementById("step4").style.display = "none";
        document.getElementById('mydiv8').style.display = 'block';
        document.getElementById('mydiv1').style.display = 'none';
        document.getElementById('mydiv2').style.display = 'none';
        document.getElementById('mydiv3').style.display = 'none';
        document.getElementById('mydiv4').style.display = 'none';
        document.getElementById('mydiv5').style.display = 'none';
        document.getElementById('mydiv6').style.display = 'none';
        document.getElementById('mydiv7').style.display = 'none';
    } else {
        document.getElementById("step4").style.display = "block";
        document.getElementById('mydiv8').style.display = 'block';
        document.getElementById('mydiv1').style.display = 'none';
        document.getElementById('mydiv2').style.display = 'none';
        document.getElementById('mydiv3').style.display = 'none';
        document.getElementById('mydiv4').style.display = 'none';
        document.getElementById('mydiv5').style.display = 'none';
        document.getElementById('mydiv6').style.display = 'none';
        document.getElementById('mydiv7').style.display = 'none';
    }
});

//Displaying images in compass directions buttons when user clicks on checkboxes
function toggleVisibility(id) {
    var el = document.getElementById(id);
    var src = document.getElementById('');
    if (el.style.visibility == "visible") {
        el.style.visibility = "hidden";
    }
    else {
        el.style.visibility = "visible";
    }
}

// for displaying user detail form
function getmod() {

    // Get the modal
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    //variables for north direction checkboxes
    const n1 = document.getElementById("myCheckbox1");
    const n2 = document.getElementById("myCheckbox2");
    const n6 = document.getElementById("myCheckbox6");
    const n7 = document.getElementById("myCheckbox7");
    const n9 = document.getElementById("myCheckbox9");
    const n10 = document.getElementById("myCheckbox10");
    const n3 = document.getElementById("myCheckbox3");
    const n4 = document.getElementById("myCheckbox4");
    const n5 = document.getElementById("myCheckbox5");
    const n8 = document.getElementById("myCheckbox8");

    //variables for north-east direction checkboxes
    const ne2 = document.getElementById("myCb2");
    const ne5 = document.getElementById("myCb5");
    const ne7 = document.getElementById("myCb7");
    const ne1 = document.getElementById("myCb1");
    const ne3 = document.getElementById("myCb3");
    const ne4 = document.getElementById("myCb4");
    const ne6 = document.getElementById("myCb6");
    const ne8 = document.getElementById("myCb8");
    const ne9 = document.getElementById("myCb9");
    const ne10 = document.getElementById("myCb10");

    //variables for east direction checkboxes
    const e1 = document.getElementById("myChb1");
    const e2 = document.getElementById("myChb2");
    const e3 = document.getElementById("myChb3");
    const e4 = document.getElementById("myChb4");
    const e5 = document.getElementById("myChb5");
    const e6 = document.getElementById("myChb6");
    const e7 = document.getElementById("myChb7");
    const e8 = document.getElementById("myChb8");
    const e9 = document.getElementById("myChb9");
    const e10 = document.getElementById("myChb10");

    //variables for south-east direction checkboxes
    const se1 = document.getElementById("myCheb1");
    const se2 = document.getElementById("myCheb2");
    const se3 = document.getElementById("myCheb3");
    const se4 = document.getElementById("myCheb4");
    const se5 = document.getElementById("myCheb5");
    const se6 = document.getElementById("myCheb6");
    const se7 = document.getElementById("myCheb7");
    const se8 = document.getElementById("myCheb8");
    const se9 = document.getElementById("myCheb9");
    const se10 = document.getElementById("myCheb10");

    //variables for south direction checkboxes
    const s1 = document.getElementById("myChebx1");
    const s2 = document.getElementById("myChebx2");
    const s3 = document.getElementById("myChebx3");
    const s4 = document.getElementById("myChebx4");
    const s5 = document.getElementById("myChebx5");
    const s6 = document.getElementById("myChebx6");
    const s7 = document.getElementById("myChebx7");
    const s8 = document.getElementById("myChebx8");
    const s9 = document.getElementById("myChebx9");
    const s10 = document.getElementById("myChebx10");

    //variables for south-west direction checkboxes
    const sw1 = document.getElementById("myChbox1");
    const sw2 = document.getElementById("myChbox2");
    const sw3 = document.getElementById("myChbox3");
    const sw4 = document.getElementById("myChbox4");
    const sw5 = document.getElementById("myChbox5");
    const sw6 = document.getElementById("myChbox6");
    const sw7 = document.getElementById("myChbox7");
    const sw8 = document.getElementById("myChbox8");
    const sw9 = document.getElementById("myChbox9");
    const sw10 = document.getElementById("myChbox10");

    //variables for west direction checkboxes
    const w1 = document.getElementById("myChcb1");
    const w2 = document.getElementById("myChcb2");
    const w3 = document.getElementById("myChcb3");
    const w4 = document.getElementById("myChcb4");
    const w5 = document.getElementById("myChcb5");
    const w6 = document.getElementById("myChcb6");
    const w7 = document.getElementById("myChcb7");
    const w8 = document.getElementById("myChcb8");
    const w9 = document.getElementById("myChcb9");
    const w10 = document.getElementById("myChcb10");

    //variables for north-west direction checkboxes
    const nw1 = document.getElementById("myChkb1");
    const nw2 = document.getElementById("myChkb2");
    const nw3 = document.getElementById("myChkb3");
    const nw4 = document.getElementById("myChkb4");
    const nw5 = document.getElementById("myChkb5");
    const nw6 = document.getElementById("myChkb6");
    const nw7 = document.getElementById("myChkb7");
    const nw8 = document.getElementById("myChkb8");
    const nw9 = document.getElementById("myChkb9");
    const nw10 = document.getElementById("myChkb10");

    //For displaying report of user selection
    var myResDiv = document.getElementById('resdiv');
    var commodal = document.getElementById('specific');
    if (myResDiv !== undefined && commodal != undefined) {
        if (myResDiv.style.display == 'none' && commodal.style.display == 'block') {
            myResDiv.style.display = 'block';
            commodal.style.display = 'none';
        }
    }

    //Selected rooms correct or not for north direction based on conditions
    var myCheckbox = document.getElementsByName('n[]');
    var north = 0;
    for (var i = 0; i < myCheckbox.length; i++) {
        if (i == 0 && n1.checked == true) {
            north = i;
            document.getElementById("nimg1").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/entrance.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 1 && n2.checked == true) {
            north = i;
            document.getElementById("nimg2").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/drawing_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 2 && n3.checked == true) {
            north = i;
            document.getElementById("nimg3").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/bedroom.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 3 && n4.checked == true) {
            north = i;
            document.getElementById("nimg4").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/kitchen.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 4 && n5.checked == true) {
            north = i;
            document.getElementById("nimg5").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/dining_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 5 && n6.checked == true) {
            north = i;
            document.getElementById("nimg6").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/pooja.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 6 && n7.checked == true) {
            north = i;
            document.getElementById("nimg7").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/balcony.png' id='dimg'><img src=http://vaastu.joinitlive.com/app1/'images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 7 && n8.checked == true) {
            north = i;
            document.getElementById("nimg8").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/bathroom.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 8 && n9.checked == true) {
            north = i;
            document.getElementById("nimg9").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/store_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 9 && n10.checked == true) {
            north = i;
            document.getElementById("nimg10").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/dress_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        }
    }
    if (north == 0) {
        document.getElementById("nmsg").innerHTML = "<p>You have selected nothing!</p>";
    }

    //Selected rooms correct or not for north-east direction based on conditions
    var myCb = document.getElementsByName('ne[]');
    var northeast = 0;
    for (var i = 0; i < myCb.length; i++) {
        if (i == 0 && ne1.checked == true) {
            northeast = i;
            document.getElementById("neimg1").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/entrance.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 1 && ne2.checked == true) {
            northeast = i;
            document.getElementById("neimg2").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/drawing_room.png' id='dimg'><img src=http://vaastu.joinitlive.com/app1/'images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 2 && ne3.checked == true) {
            northeast = i;
            document.getElementById("neimg3").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/bedroom.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 3 && ne4.checked == true) {
            northeast = i;
            document.getElementById("neimg4").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/kitchen.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 4 && ne5.checked == true) {
            northeast = i;
            document.getElementById("neimg5").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/dining_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 5 && ne6.checked == true) {
            northeast = i;
            document.getElementById("neimg6").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/pooja.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 6 && ne7.checked == true) {
            northeast = i;
            document.getElementById("neimg7").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/balcony.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 7 && ne8.checked == true) {
            northeast = i;
            document.getElementById("neimg8").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/bathroom.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 8 && ne9.checked == true) {
            northeast = i;
            document.getElementById("neimg9").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/store_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 9 && ne10.checked == true) {
            northeast = i;
            document.getElementById("neimg10").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/dress_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        }
    }
    if (northeast == 0) {
        document.getElementById("nemsg").innerHTML = "<p>You have selected nothing!</p>";
    }

    //Selected rooms correct or not for east direction based on conditions
    var myChb = document.getElementsByName('e[]');
    var east = 0;
    for (var i = 0; i < myChb.length; i++) {
        if (i == 0 && e1.checked == true) {
            east = i;
            document.getElementById("eimg1").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/entrance.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 1 && e2.checked == true) {
            east = i;
            document.getElementById("eimg2").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/drawing_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 2 && e3.checked == true) {
            east = i;
            document.getElementById("eimg3").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/bedroom.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 3 && e4.checked == true) {
            east = i;
            document.getElementById("eimg4").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/kitchen.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 4 && e5.checked == true) {
            east = i;
            document.getElementById("eimg5").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/dining_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 5 && e6.checked == true) {
            east = i;
            document.getElementById("eimg6").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/pooja.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 6 && e7.checked == true) {
            east = i;
            document.getElementById("eimg7").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/balcony.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 7 && e8.checked == true) {
            east = i;
            document.getElementById("eimg8").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/bathroom.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 8 && e9.checked == true) {
            east = i;
            document.getElementById("eimg9").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/store_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 9 && e10.checked == true) {
            east = i;
            document.getElementById("eimg10").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/dress_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        }
    }
    if (east == 0) {
        document.getElementById("emsg").innerHTML = "<p>You have selected nothing!</p>";
    }

    //Selected rooms correct or not for south-east direction based on conditions
    var myCheb = document.getElementsByName('se[]');
    var southeast = 0;
    for (var i = 0; i < myCheb.length; i++) {
        if (i == 0 && se1.checked == true) {
            southeast = i;
            document.getElementById("seimg1").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/entrance.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 1 && se2.checked == true) {
            southeast = i;
            document.getElementById("seimg2").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/drawing_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 2 && se3.checked == true) {
            southeast = i;
            document.getElementById("seimg3").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/bedroom.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 3 && se4.checked == true) {
            southeast = i;
            document.getElementById("seimg4").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/kitchen.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 4 && se5.checked == true) {
            southeast = i;
            document.getElementById("seimg5").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/dining_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 5 && se6.checked == true) {
            southeast = i;
            document.getElementById("seimg6").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/pooja.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 6 && se7.checked == true) {
            southeast = i;
            document.getElementById("seimg7").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/balcony.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 7 && se8.checked == true) {
            southeast = i;
            document.getElementById("seimg8").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/bathroom.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 8 && se9.checked == true) {
            southeast = i;
            document.getElementById("seimg9").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/store_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 9 && se10.checked == true) {
            southeast = i;
            document.getElementById("seimg10").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/dress_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        }
    }
    if (southeast == 0) {
        document.getElementById("semsg").innerHTML = "<p>You have selected nothing!</p>";
    }

    //Selected rooms correct or not for south direction based on conditions
    var myChebx = document.getElementsByName('s[]');
    var south = 0;
    for (var i = 0; i < myChebx.length; i++) {
        if (i == 0 && s1.checked == true) {
            south = i;
            document.getElementById("simg1").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/entrance.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 1 && s2.checked == true) {
            south = i;
            document.getElementById("simg2").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/drawing_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 2 && s3.checked == true) {
            south = i;
            document.getElementById("simg3").innerHTML = "<div id='dirdiv'><img src=http://vaastu.joinitlive.com/app1/vimages/bedroom.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 3 && s4.checked == true) {
            south = i;
            document.getElementById("simg4").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/kitchen.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 4 && s5.checked == true) {
            south = i;
            document.getElementById("simg5").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/dining_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 5 && s6.checked == true) {
            south = i;
            document.getElementById("simg6").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/pooja.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 6 && s7.checked == true) {
            south = i;
            document.getElementById("simg7").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/balcony.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 7 && s8.checked == true) {
            south = i;
            document.getElementById("simg8").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/bathroom.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 8 && s9.checked == true) {
            south = i;
            document.getElementById("simg9").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/store_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 9 && s10.checked == true) {
            south = i;
            document.getElementById("simg10").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/dress_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        }
    }
    if (south == 0) {
        document.getElementById("smsg").innerHTML = "<p>You have selected nothing!</p>";
    }

    //Selected rooms correct or not for south-west direction based on conditions
    var myChbox = document.getElementsByName('sw[]');
    var southwest = 0;
    for (var i = 0; i < myChbox.length; i++) {
        if (i == 0 && sw1.checked == true) {
            southwest = i;
            document.getElementById("swimg1").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/entrance.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 1 && sw2.checked == true) {
            southwest = i;
            document.getElementById("swimg2").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/drawing_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 2 && sw3.checked == true) {
            southwest = i;
            document.getElementById("swimg3").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/bedroom.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 3 && sw4.checked == true) {
            southwest = i;
            document.getElementById("swimg4").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/kitchen.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 4 && sw5.checked == true) {
            southwest = i;
            document.getElementById("swimg5").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/dining_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 5 && sw6.checked == true) {
            southwest = i;
            document.getElementById("swimg6").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/pooja.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 6 && sw7.checked == true) {
            southwest = i;
            document.getElementById("swimg7").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/balcony.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 7 && sw8.checked == true) {
            southwest = i;
            document.getElementById("swimg8").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/bathroom.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 8 && sw9.checked == true) {
            southwest = i;
            document.getElementById("swimg9").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/store_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 9 && sw10.checked == true) {
            southwest = i;
            document.getElementById("swimg10").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/dress_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        }
    }
    if (southwest == 0) {
        document.getElementById("swmsg").innerHTML = "<p>You have selected nothing;</p>";
    }

    //Selected rooms correct or not for west direction based on conditions
    var myChcb = document.getElementsByName('w[]');
    var west = 0;
    for (var i = 0; i < myChcb.length; i++) {
        if (i == 0 && w1.checked == true) {
            west = i;
            document.getElementById("wimg1").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/entrance.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 1 && w2.checked == true) {
            west = i;
            document.getElementById("wimg2").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/drawing_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 2 && w3.checked == true) {
            west = i;
            document.getElementById("wimg3").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/bedroom.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 3 && w4.checked == true) {
            west = i;
            document.getElementById("wimg4").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/kitchen.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 4 && w5.checked == true) {
            west = i;
            document.getElementById("wimg5").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/dining_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 5 && w6.checked == true) {
            west = i;
            document.getElementById("wimg6").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/pooja.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 6 && w7.checked == true) {
            west = i;
            document.getElementById("wimg7").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/balcony.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 7 && w8.checked == true) {
            west = i;
            document.getElementById("wimg8").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/bathroom.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 8 && w9.checked == true) {
            west = i;
            document.getElementById("wimg9").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/store_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 9 && w10.checked == true) {
            west = i;
            document.getElementById("wimg10").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/dress_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        }
    }
    if (west == 0) {
        document.getElementById("wmsg").innerHTML = "<p>You have selected nothing!</p>";
    }

    //Selected rooms correct or not for north-west direction based on conditions
    var myChkb = document.getElementsByName('nw[]');
    var northwest = 0;
    for (var i = 0; i < myChkb.length; i++) {
        if (i == 0 && nw1.checked == true) {
            northwest = i;
            document.getElementById("nwimg1").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/entrance.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 1 && nw2.checked == true) {
            northwest = i;
            document.getElementById("nwimg2").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/drawing_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 2 && nw3.checked == true) {
            northwest = i;
            document.getElementById("nwimg3").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/bedroom.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 3 && nw4.checked == true) {
            northwest = i;
            document.getElementById("nwimg4").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/kitchen.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 4 && nw5.checked == true) {
            northwest = i;
            document.getElementById("nwimg5").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/dining_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 5 && nw6.checked == true) {
            northwest = i;
            document.getElementById("nwimg6").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/pooja.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 6 && nw7.checked == true) {
            northwest = i;
            document.getElementById("nwimg7").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/balcony.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 7 && nw8.checked == true) {
            northwest = i;
            document.getElementById("nwimg8").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/bathroom.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/wrong.png' id='dcimg' style='border: 5px solid red;'></div>";
        } else if (i == 8 && nw9.checked == true) {
            northwest = i;
            document.getElementById("nwimg9").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/store_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        } else if (i == 9 && nw10.checked == true) {
            northwest = i;
            document.getElementById("nwimg10").innerHTML = "<div id='dirdiv'><img src='http://vaastu.joinitlive.com/app1/images/dress_room.png' id='dimg'><img src='http://vaastu.joinitlive.com/app1/images/correct.png' id='dcimg' style='border: 5px solid green;'></div>";
        }
    }
    if (northwest == 0) {
        document.getElementById("nwmsg").innerHTML = "<p>You have selected nothing!</p>";
    }

}