/**
 * Created by Imalka Gunawardana on 9/8/2017.
 */
//-------------------------------------------------------Media Queries--------------------------------------------------
function setMediaSize(outerPanelSize, boardSize, elementSize, pos1, pos2, imgSize, k) {
    setOuterPanel(outerPanelSize);
    elementBoard.setSize(boardSize, elementSize);
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            elementPieces.setSize(i, j, elementSize);
        }
    }
    for (var j = 0; j < 10; j++) {
        elementOuterPieces.setSize(1, j, elementSize, divOuterLeft[j], pos1, k);
        elementOuterPieces.setSize(2, j, elementSize, divOuterLeft[j], pos2, k);
        elementOuterPieces.setSize(3, j, elementSize, pos1, divOuterTop[j], k);
        elementOuterPieces.setSize(4, j, elementSize, pos2, divOuterTop[j], k);
    }
    for (var i = 1; i <= 32; i++) {
        element.setSize(i, elementSize, imgSize);
    }
    for (var i = 1; i <= 2; i++) {
        for (var j = 0; j < 8; j++) {
            $("#div-holdPanel" + i).append(elementHold.getElement(i, (j + 1)));
            elementHold.setElement(i, (j + 1));
            if (i == 1) {
                elementHold.setSize(i, (j + 1), "87.5px", divPos[0], divPos[j]);
            } else {
                elementHold.setSize(i, (j + 1), "87.5px", divPos[0], divPos[j]);
            }

        }
        for (var j = 8; j < 16; j++) {
            $("#div-holdPanel" + i).append(elementHold.getElement(i, (j + 1)));
            elementHold.setElement(i, (j + 1));
            if (i == 1) {
                elementHold.setSize(i, (j + 1), "87.5px", divPos[1], divPos[j - 8]);
            } else {
                elementHold.setSize(i, (j + 1), "87.5px", divPos[1], divPos[j - 8]);
            }
        }
    }
}

function mediaSize() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        $("body").css("background-image", "url('images/Chess-king6.jpg')");
        $("body").css("background-repeat", "no-repeat");
        $("body").css("background-attachment", "fixed");
        $("body").css("background-size", "cover");
        //$("body").css("background-color","#4A3301");
        //window.alert("Please Switch Your Screen into Landscape Mode For Better Experience");
    } else if (window.matchMedia("(orientation: landscape)").matches) {
        $("body").css("background-image", "url('images/Chess-king.JPG')");
        $("body").css("background-repeat", "no-repeat");
        $("body").css("background-attachment", "fixed");
        $("body").css("background-size", "cover");
        // $("body").css("background-size","100%, 100%");
    }
    if (window.matchMedia("(min-width: 1300px)").matches) {
        divPos = [0, 87.5, 175, 262.5, 350, 437.5, 525, 612.5];
        divOuterTop = [87.5, 175, 262.5, 350, 437.5, 525, 612.5, 700];
        divOuterLeft = [0, 87.5, 175, 262.5, 350, 437.5, 525, 612.5, 700, 787.5];
        setMediaSize("875px", "700px", "87.5px", divOuterLeft[0], divOuterLeft[9], "80px", "20px");
        setMainHoldPanel("875px", "350px", "1100px");
        setElementHoldPanel(1, "0px", "0px", "175px", "174px", divOuterTop[7], "Black", "30px");
        setElementHoldPanel(2, "175px", "0px", "175px", "174px", divOuterTop[7], "White", "30px");
        setTextSize("45px");
        setFooter("1470px");
    } else if (window.matchMedia("(min-width: 720px)").matches) {
        divPos = [0, 75, 150, 225, 300, 375, 450, 525];
        divOuterTop = [75, 150, 225, 300, 375, 450, 525, 600];
        divOuterLeft = [0, 75, 150, 225, 300, 375, 450, 525, 600, 675];
        setMediaSize("750px", "600px", "75px", divOuterLeft[0], divOuterLeft[9], "67.5px", "15px");
        setMainHoldPanel("750px", "600px", "950px");
        setElementHoldPanel(1, "0px", "0px", "150px", "149px", divOuterTop[7], "Black", "20px");
        setElementHoldPanel(2, "150px", "0px", "150px", "149px", divOuterTop[7], "White", "20px");
        setTextSize("35px");
        setFooter("1300px");
    } else if (window.matchMedia("(min-width: 420px)").matches) {
        divPos = [0, 50, 100, 150, 200, 250, 300, 350];
        divOuterTop = [50, 100, 150, 200, 250, 300, 350, 400];
        divOuterLeft = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];
        setMediaSize("500px", "400px", "51px", divOuterLeft[0], divOuterLeft[9], "42.5px", "10px");
        setMainHoldPanel("500px", "400px", "700px");
        setElementHoldPanel(1, "0px", "0px", "100px", "99px", divOuterTop[7], "Black", "15px");
        setElementHoldPanel(2, "100px", "0px", "100px", "99px", divOuterTop[7], "White", "15px");
        setTextSize("20px");
        setFooter("1100px");
    } else if (window.matchMedia("(min-width: 320px)").matches) {
        divPos = [0, 25, 50, 75, 100, 125, 150, 175];
        divOuterTop = [25, 50, 75, 100, 125, 150, 175, 200];
        divOuterLeft = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225];
        setMediaSize("250px", "200px", "26px", divOuterLeft[0], divOuterLeft[9], "17.5px", "8px");
        setMainHoldPanel("250px", "200px", "450px");
        setElementHoldPanel(1, "0px", "0px", "50px", "49px", divOuterTop[7], "Black", "10px");
        setElementHoldPanel(2, "50px", "0px", "50px", "49px", divOuterTop[7], "White", "10px");
        setTextSize("10px");
        setFooter("800px");
    }
}
mediaSize();
window.addEventListener('resize', mediaSize);