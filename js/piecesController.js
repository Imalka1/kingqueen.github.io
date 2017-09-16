/**
 * Created by Imalka Gunawardana on 9/1/2017.
 */

var pawnCount = [];
var elementId;
var imageId;
var imageClass;
var tempId;
var blackCount = 0;
var whiteCount = 1;
var bottomPos = 10;
var topPos = 10;
var leftPos = 1;
var rightPos = 1;
var leftBottom = 9;
var leftTop = 11;
var rightBottom = 9;
var rightTop = 11;
var panelHold1 = 1;
var panelHold2 = 1;
var intervalColor;
var removedData = [];

//-----------------------------------------------Pawn Controller--------------------------------------------------------

for (var i = 0; i < 16; i++) {
    pawnCount[i] = 0;
}

function increDivId(i) {
    switch (i) {
        case "9":
            pawnCount[0]++;
            break;
        case "10":
            pawnCount[1]++;
            break;
        case "11":
            pawnCount[2]++;
            break;
        case "12":
            pawnCount[3]++;
            break;
        case "13":
            pawnCount[4]++;
            break;
        case "14":
            pawnCount[5]++;
            break;
        case "15":
            pawnCount[6]++;
            break;
        case "16":
            pawnCount[7]++;
            break;
        case "17":
            pawnCount[8]++;
            break;
        case "18":
            pawnCount[9]++;
            break;
        case "19":
            pawnCount[10]++;
            break;
        case "20":
            pawnCount[11]++;
            break;
        case "21":
            pawnCount[12]++;
            break;
        case "22":
            pawnCount[13]++;
            break;
        case "23":
            pawnCount[14]++;
            break;
        case "24":
            pawnCount[15]++;
            break;
    }
}

$(".chessArea").click(function () {
    if ($(this).children().length == 1) {
        imageId = $(this).children().attr('id').substring(13);
        imageClass = $(this).children().attr('class');
        elementId = $(this).attr('id').substring(11);
        if ($(this).css("background-color") != "rgb(255, 0, 0)") {
            resetColor();
        }
        if (imageId >= 9 && imageId <= 24) {
            pawnColorDivElements(imageId, elementId, imageClass, 0);
        }
        if (imageId == 1 || imageId == 8 || imageId == 25 || imageId == 32) {
            rookColorDivElements(imageId, elementId, imageClass, 0);
        }
        if (imageId == 5 || imageId == 29) {
            kingColorDivElements(imageId, elementId, imageClass, 0);
        }
        if (imageId == 3 || imageId == 6 || imageId == 27 || imageId == 30) {
            bishopColorDivElements(imageId, elementId, imageClass, 0);
        }
        if (imageId == 4 || imageId == 28) {
            queenColorDivElements(imageId, elementId, imageClass, 0);
        }
        if (imageId == 2 || imageId == 7 || imageId == 26 || imageId == 31) {
            knightColorDivElements(imageId, elementId, imageClass, 0);
        }
    }
    if ($(this).css("background-color") == "rgb(0, 128, 0)") {
        if ($(this).children().length == 0) {
            if (intervalColor != undefined) {
                clearInterval(intervalColor);
            }
            if (imageId >= 9 && imageId <= 24) {
                pawnColorDivElements(imageId, elementId, imageClass, 1);
            }
            if (imageId == 1 || imageId == 8 || imageId == 25 || imageId == 32) {
                rookColorDivElements(imageId, elementId, imageClass, 1);
            }
            if (imageId == 5 || imageId == 29) {
                kingColorDivElements(imageId, elementId, imageClass, 1);
            }
            if (imageId == 3 || imageId == 6 || imageId == 27 || imageId == 30) {
                bishopColorDivElements(imageId, elementId, imageClass, 1);
            }
            if (imageId == 4 || imageId == 28) {
                queenColorDivElements(imageId, elementId, imageClass, 1);
            }
            if (imageId == 2 || imageId == 7 || imageId == 26 || imageId == 31) {
                knightColorDivElements(imageId, elementId, imageClass, 1);
            }
            $(this).append($("#image-element" + imageId));
            if (imageClass == "black") {
                blackCount = 0;
                whiteCount++;
                setTextPanel(1, "rgba(105,73,0,0.8)");
                setTextPanel(2, "#FFDA67");
                checkKing(imageClass);
            } else if (imageClass == "white") {
                blackCount++;
                whiteCount = 0;
                setTextPanel(1, "#FFDA67");
                setTextPanel(2, "rgba(105,73,0,0.8)");
                checkKing(imageClass);
            }
            resetColor();
            rotatePanelandIcons();
        }
    }
    if ($(this).css("background-color") == "rgb(255, 0, 0)") {
        var rData = $(this).children().attr('id').substring(13);
        removedData.push(rData);
        if ($(this).children().attr('class') == "black") {
            $("#div-holdElement1" + panelHold1).append($(this).children());
            panelHold1++;
        } else if ($(this).children().attr('class') == "white") {
            $("#div-holdElement2" + panelHold2).append($(this).children());
            panelHold2++;
        }
        if (intervalColor != undefined) {
            clearInterval(intervalColor);
        }
        $(this).children().remove();
        $(this).append($("#image-element" + tempId));
        if (imageClass == "black") {
            blackCount++;
            whiteCount = 0;
            setTextPanel(1, "#FFDA67");
            setTextPanel(2, "rgba(105,73,0,0.8)");
            checkKing("white");
        } else if (imageClass == "white") {
            blackCount = 0;
            whiteCount++;
            setTextPanel(1, "rgba(105,73,0,0.8)");
            setTextPanel(2, "#FFDA67");
            checkKing("black");
        }
        increDivId(tempId);
        resetColor();
        rotatePanelandIcons();
    }
});

function pawnColorDivElements(i, j, k, l) {
    if (k == "black" && blackCount > 0) {
        if (pawnCount[parseInt(i) - 9] == 0) {
            $("#div-element" + j).css("background-color", "rgb(0, 96, 0)");
            if ($("#div-element" + (parseInt(j) + 10)).children().length == 0) {
                colorEle1(parseInt(j) + 10);
                if ($("#div-element" + (parseInt(j) + 20)).children().length == 0) {
                    colorEle1(parseInt(j) + 20);
                }
            }
            if (l == 1) {
                //blackCount=0;
                //whiteCount++;
                increDivId(i);
            }
            if ($("#div-element" + (parseInt(j) + 11)).children().length == 1 && $("#div-element" + (parseInt(j) + 11)).children().attr('class') == "white") {
                colorEle2(parseInt(j) + 11);
                tempId = i;
            }
            if ($("#div-element" + (parseInt(j) + 9)).children().length == 1 && $("#div-element" + (parseInt(j) + 9)).children().attr('class') == "white") {
                colorEle2(parseInt(j) + 9);
                tempId = i;
            }
        } else {
            $("#div-element" + j).css("background-color", "rgb(0, 96, 0)");
            if ($("#div-element" + (parseInt(j) + 10)).children().length == 0) {
                $("#div-element" + (parseInt(j) + 10)).css("background-color", "rgb(0, 128, 0)");
                colorEle1(parseInt(j) + 10);
            }
            if ($("#div-element" + (parseInt(j) + 11)).children().length == 1 && $("#div-element" + (parseInt(j) + 11)).children().attr('class') == "white") {
                $("#div-element" + (parseInt(j) + 11)).css("background-color", "rgb(255, 0, 0)");
                colorEle2(parseInt(j) + 11);
                tempId = i;
            }
            if ($("#div-element" + (parseInt(j) + 9)).children().length == 1 && $("#div-element" + (parseInt(j) + 9)).children().attr('class') == "white") {
                colorEle2(parseInt(j) + 9);
                tempId = i;
            }
            if (l == 1) {
                //blackCount=0;
                //whiteCount++;
            }
        }
    } else if (k == "white" && whiteCount > 0) {
        if (pawnCount[parseInt(i) - 9] == 0) {
            $("#div-element" + j).css("background-color", "rgb(0, 96, 0)");
            if ($("#div-element" + (parseInt(j) - 10)).children().length == 0) {
                colorEle1(parseInt(j) - 10);
                if ($("#div-element" + (parseInt(j) - 20)).children().length == 0) {
                    colorEle1(parseInt(j) - 20);
                }
            }
            if (l == 1) {
                //blackCount++;
                //whiteCount=0;
                increDivId(i);
            }
            if ($("#div-element" + (parseInt(j) - 9)).children().length == 1 && $("#div-element" + (parseInt(j) - 9)).children().attr('class') == "black") {
                colorEle2(parseInt(j) - 9);
                tempId = i;
            }
            if ($("#div-element" + (parseInt(j) - 11)).children().length == 1 && $("#div-element" + (parseInt(j) - 11)).children().attr('class') == "black") {
                colorEle2(parseInt(j) - 11);
                tempId = i;
            }
        } else {
            $("#div-element" + j).css("background-color", "rgb(0, 96, 0)");
            if ($("#div-element" + (parseInt(j) - 10)).children().length == 0) {
                colorEle1(parseInt(j) - 10);
            }
            if ($("#div-element" + (parseInt(j) - 9)).children().length == 1 && $("#div-element" + (parseInt(j) - 9)).children().attr('class') == "black") {
                colorEle2(parseInt(j) - 9);
                tempId = i;
            }
            if ($("#div-element" + (parseInt(j) - 11)).children().length == 1 && $("#div-element" + (parseInt(j) - 11)).children().attr('class') == "black") {
                colorEle2(parseInt(j) - 11);
                tempId = i;
            }
            if (l == 1) {
                //blackCount++;
                // whiteCount=0;
            }
        }
    }
}

//-------------------------------------------------Rook Controller------------------------------------------------------

function rookColorDivElements(i, j, k, l) {
    if (k == "black" && blackCount > 0) {
        rookCont(i, j, "white");
        if (l == 1) {
            //blackCount=0;
            //whiteCount++;
        }

    } else if (k == "white" && whiteCount > 0) {
        rookCont(i, j, "black");
        if (l == 1) {
            //blackCount++;
            //whiteCount=0;
        }
    }
}

function rookCont(i, j, k) {
    bottomPos = 10;
    topPos = 10;
    leftPos = 1;
    rightPos = 1;
    while ($("#div-element" + (parseInt(j) + bottomPos)).children().length == 0 && $("#div-element" + (parseInt(j) + bottomPos)).attr('class') == "chessArea") {
        colorEle1(parseInt(j) + bottomPos);
        bottomPos += 10;
    }
    while ($("#div-element" + (parseInt(j) - topPos)).children().length == 0 && $("#div-element" + (parseInt(j) - topPos)).attr('class') == "chessArea") {
        colorEle1(parseInt(j) - topPos);
        topPos += 10;
    }
    while ($("#div-element" + (parseInt(j) + leftPos)).children().length == 0 && $("#div-element" + (parseInt(j) + leftPos)).attr('class') == "chessArea") {
        colorEle1(parseInt(j) + leftPos);
        leftPos += 1;
    }
    while ($("#div-element" + (parseInt(j) - rightPos)).children().length == 0 && $("#div-element" + (parseInt(j) - rightPos)).attr('class') == "chessArea") {
        colorEle1(parseInt(j) - rightPos);
        rightPos += 1;
    }
    $("#div-element" + j).css("background-color", "rgb(0, 96, 0)");
    if ($("#div-element" + (parseInt(j) + bottomPos)).children().length == 1 && $("#div-element" + (parseInt(j) + bottomPos)).children().attr('class') == k) {
        colorEle2(parseInt(j) + bottomPos);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) - topPos)).children().length == 1 && $("#div-element" + (parseInt(j) - topPos)).children().attr('class') == k) {
        colorEle2(parseInt(j) - topPos);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) + leftPos)).children().length == 1 && $("#div-element" + (parseInt(j) + leftPos)).children().attr('class') == k) {
        colorEle2(parseInt(j) + leftPos);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) - rightPos)).children().length == 1 && $("#div-element" + (parseInt(j) - rightPos)).children().attr('class') == k) {
        colorEle2(parseInt(j) - rightPos);
        tempId = i;
    }
}

//-----------------------------------------------King Controller--------------------------------------------------------

function kingColorDivElements(i, j, k, l) {
    if (k == "black" && blackCount > 0) {
        kingColor(i, j, "white");
        if (l == 1) {
            //blackCount=0;
            //whiteCount++;
        }
    } else if (k == "white" && whiteCount > 0) {
        kingColor(i, j, "black");
        if (l == 1) {
            //blackCount++;
            //whiteCount=0;
        }
    }
}

function kingColor(i, j, col) {
    $("#div-element" + j).css("background-color", "rgb(0, 96, 0)");
    if ($("#div-element" + (parseInt(j) + 10)).children().length == 0) {
        colorEle1(parseInt(j) + 10);
    } else if ($("#div-element" + (parseInt(j) + 10)).children().attr('class') == col) {
        colorEle2(parseInt(j) + 10);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) - 10)).children().length == 0) {
        colorEle1(parseInt(j) - 10);
    } else if ($("#div-element" + (parseInt(j) - 10)).children().attr('class') == col) {
        colorEle2(parseInt(j) - 10);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) + 1)).children().length == 0) {
        colorEle1(parseInt(j) + 1);
    } else if ($("#div-element" + (parseInt(j) + 1)).children().attr('class') == col) {
        colorEle2(parseInt(j) + 1);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) - 1)).children().length == 0) {
        colorEle1(parseInt(j) - 1);
    } else if ($("#div-element" + (parseInt(j) - 1)).children().attr('class') == col) {
        colorEle2(parseInt(j) - 1);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) - 11)).children().length == 0) {
        colorEle1(parseInt(j) - 11);
    } else if ($("#div-element" + (parseInt(j) - 11)).children().attr('class') == col) {
        colorEle2(parseInt(j) - 11);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) + 11)).children().length == 0) {
        colorEle1(parseInt(j) + 11);
    } else if ($("#div-element" + (parseInt(j) + 11)).children().attr('class') == col) {
        colorEle2(parseInt(j) + 11);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) + 9)).children().length == 0) {
        colorEle1(parseInt(j) + 9);
    } else if ($("#div-element" + (parseInt(j) + 9)).children().attr('class') == col) {
        colorEle2(parseInt(j) + 9);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) - 9)).children().length == 0) {
        colorEle1(parseInt(j) - 9);
    } else if ($("#div-element" + (parseInt(j) - 9)).children().attr('class') == col) {
        colorEle2(parseInt(j) - 9);
        tempId = i;
    }
}

//--------------------------------------------------Bishop Controller---------------------------------------------------

function bishopColorDivElements(i, j, k, l) {
    if (k == "black" && blackCount > 0) {
        bishopCont(i, j, "white");
        if (l == 1) {
            //blackCount=0;
            //whiteCount++;
        }

    } else if (k == "white" && whiteCount > 0) {
        bishopCont(i, j, "black");
        if (l == 1) {
            // blackCount++;
            // whiteCount=0;
        }
    }
}

function bishopCont(i, j, k) {
    leftBottom = 9;
    leftTop = 11;
    rightBottom = 11;
    rightTop = 9;
    while ($("#div-element" + (parseInt(j) - leftTop)).children().length == 0 && $("#div-element" + (parseInt(j) - leftTop)).attr('class') == "chessArea") {
        colorEle1(parseInt(j) - leftTop);
        leftTop += 11;
    }
    while ($("#div-element" + (parseInt(j) + leftBottom)).children().length == 0 && $("#div-element" + (parseInt(j) + leftBottom)).attr('class') == "chessArea") {
        colorEle1(parseInt(j) + leftBottom);
        leftBottom += 9;
    }
    while ($("#div-element" + (parseInt(j) - rightTop)).children().length == 0 && $("#div-element" + (parseInt(j) - rightTop)).attr('class') == "chessArea") {
        colorEle1(parseInt(j) - rightTop);
        rightTop += 9;
    }
    while ($("#div-element" + (parseInt(j) + rightBottom)).children().length == 0 && $("#div-element" + (parseInt(j) + rightBottom)).attr('class') == "chessArea") {
        colorEle1(parseInt(j) + rightBottom);
        rightBottom += 11;
    }
    $("#div-element" + j).css("background-color", "rgb(0, 96, 0)");
    if ($("#div-element" + (parseInt(j) - leftTop)).children().length == 1 && $("#div-element" + (parseInt(j) - leftTop)).children().attr('class') == k) {
        colorEle2(parseInt(j) - leftTop);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) + leftBottom)).children().length == 1 && $("#div-element" + (parseInt(j) + leftBottom)).children().attr('class') == k) {
        colorEle2(parseInt(j) + leftBottom);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) - rightTop)).children().length == 1 && $("#div-element" + (parseInt(j) - rightTop)).children().attr('class') == k) {
        colorEle2(parseInt(j) - rightTop);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) + rightBottom)).children().length == 1 && $("#div-element" + (parseInt(j) + rightBottom)).children().attr('class') == k) {
        colorEle2(parseInt(j) + rightBottom);
        tempId = i;
    }
}

//-------------------------------------------------Queen Controller-----------------------------------------------------

function queenColorDivElements(i, j, k, l) {
    if (k == "black" && blackCount > 0) {
        queenCont(i, j, "white");
        if (l == 1) {
            //  blackCount=0;
            //  whiteCount++;
        }

    } else if (k == "white" && whiteCount > 0) {
        queenCont(i, j, "black");
        if (l == 1) {
            //   blackCount++;
            //   whiteCount=0;
        }
    }
}

function queenCont(i, j, k) {
    bottomPos = 10;
    topPos = 10;
    leftPos = 1;
    rightPos = 1;
    leftBottom = 9;
    leftTop = 11;
    rightBottom = 11;
    rightTop = 9;
    while ($("#div-element" + (parseInt(j) + bottomPos)).children().length == 0 && $("#div-element" + (parseInt(j) + bottomPos)).attr('class') == "chessArea") {
        colorEle1(parseInt(j) + bottomPos);
        bottomPos += 10;
    }
    while ($("#div-element" + (parseInt(j) - topPos)).children().length == 0 && $("#div-element" + (parseInt(j) - topPos)).attr('class') == "chessArea") {
        colorEle1(parseInt(j) - topPos);
        topPos += 10;
    }
    while ($("#div-element" + (parseInt(j) + leftPos)).children().length == 0 && $("#div-element" + (parseInt(j) + leftPos)).attr('class') == "chessArea") {
        colorEle1(parseInt(j) + leftPos);
        leftPos += 1;
    }
    while ($("#div-element" + (parseInt(j) - rightPos)).children().length == 0 && $("#div-element" + (parseInt(j) - rightPos)).attr('class') == "chessArea") {
        colorEle1(parseInt(j) - rightPos);
        rightPos += 1;
    }
    while ($("#div-element" + (parseInt(j) - leftTop)).children().length == 0 && $("#div-element" + (parseInt(j) - leftTop)).attr('class') == "chessArea") {
        colorEle1(parseInt(j) - leftTop);
        leftTop += 11;
    }
    while ($("#div-element" + (parseInt(j) + leftBottom)).children().length == 0 && $("#div-element" + (parseInt(j) + leftBottom)).attr('class') == "chessArea") {
        colorEle1(parseInt(j) + leftBottom);
        leftBottom += 9;
    }
    while ($("#div-element" + (parseInt(j) - rightTop)).children().length == 0 && $("#div-element" + (parseInt(j) - rightTop)).attr('class') == "chessArea") {
        colorEle1(parseInt(j) - rightTop);
        rightTop += 9;
    }
    while ($("#div-element" + (parseInt(j) + rightBottom)).children().length == 0 && $("#div-element" + (parseInt(j) + rightBottom)).attr('class') == "chessArea") {
        colorEle1(parseInt(j) + rightBottom);
        rightBottom += 11;
    }
    $("#div-element" + j).css("background-color", "rgb(0, 96, 0)");
    if ($("#div-element" + (parseInt(j) + bottomPos)).children().length == 1 && $("#div-element" + (parseInt(j) + bottomPos)).children().attr('class') == k) {
        colorEle2(parseInt(j) + bottomPos);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) - topPos)).children().length == 1 && $("#div-element" + (parseInt(j) - topPos)).children().attr('class') == k) {
        colorEle2(parseInt(j) - topPos);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) + leftPos)).children().length == 1 && $("#div-element" + (parseInt(j) + leftPos)).children().attr('class') == k) {
        colorEle2(parseInt(j) + leftPos);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) - rightPos)).children().length == 1 && $("#div-element" + (parseInt(j) - rightPos)).children().attr('class') == k) {
        colorEle2(parseInt(j) - rightPos);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) - leftTop)).children().length == 1 && $("#div-element" + (parseInt(j) - leftTop)).children().attr('class') == k) {
        colorEle2(parseInt(j) - leftTop);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) + leftBottom)).children().length == 1 && $("#div-element" + (parseInt(j) + leftBottom)).children().attr('class') == k) {
        colorEle2(parseInt(j) + leftBottom);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) - rightTop)).children().length == 1 && $("#div-element" + (parseInt(j) - rightTop)).children().attr('class') == k) {
        colorEle2(parseInt(j) - rightTop);
        tempId = i;
    }
    if ($("#div-element" + (parseInt(j) + rightBottom)).children().length == 1 && $("#div-element" + (parseInt(j) + rightBottom)).children().attr('class') == k) {
        colorEle2(parseInt(j) + rightBottom);
        tempId = i;
    }
}

//---------------------------------------------------Knight Controller--------------------------------------------------

function knightColorDivElements(i, j, k, l) {
    if (k == "black" && blackCount > 0) {
        knightCont(i, j, "white");
        if (l == 1) {
            // blackCount=0;
            // whiteCount++;
        }

    } else if (k == "white" && whiteCount > 0) {
        knightCont(i, j, "black");
        if (l == 1) {
            //  blackCount++;
            //  whiteCount=0;
        }
    }
}
function knightCont(i, j, col) {
    $("#div-element" + j).css("background-color", "rgb(0, 96, 0)");
    var knLeftTop = parseInt(j) - 11;
    var knLeftBottom = parseInt(j) + 9;
    var knRightTop = parseInt(j) - 9;
    var knRightBottom = parseInt(j) + 11;
    if ($("#div-element" + (knLeftTop - 10)).children().length == 0) {
        colorEle1(knLeftTop - 10);
    } else if ($("#div-element" + (knLeftTop - 10)).children().attr('class') == col) {
        colorEle2(knLeftTop - 10);
        tempId = i;
    }
    if ($("#div-element" + (knLeftTop - 1)).children().length == 0) {
        colorEle1(knLeftTop - 1);
    } else if ($("#div-element" + (knLeftTop - 1)).children().attr('class') == col) {
        colorEle2(knLeftTop - 1);
        tempId = i;
    }
    if ($("#div-element" + (knLeftBottom + 10)).children().length == 0) {
        colorEle1(knLeftBottom + 10);
    } else if ($("#div-element" + (knLeftBottom + 10)).children().attr('class') == col) {
        colorEle2(knLeftBottom + 10);
        tempId = i;
    }
    if ($("#div-element" + (knLeftBottom - 1)).children().length == 0) {
        colorEle1(knLeftBottom - 1);
    } else if ($("#div-element" + (knLeftBottom - 1)).children().attr('class') == col) {
        colorEle2(knLeftBottom - 1);
        tempId = i;
    }
    if ($("#div-element" + (knRightTop - 10)).children().length == 0) {
        colorEle1(knRightTop - 10);
    } else if ($("#div-element" + (knRightTop - 10)).children().attr('class') == col) {
        colorEle2(knRightTop - 10);
        tempId = i;
    }
    if ($("#div-element" + (knRightTop + 1)).children().length == 0) {
        colorEle1(knRightTop + 1);
    } else if ($("#div-element" + (knRightTop + 1)).children().attr('class') == col) {
        colorEle2(knRightTop + 1);
        tempId = i;
    }
    if ($("#div-element" + (knRightBottom + 10)).children().length == 0) {
        colorEle1(knRightBottom + 10);
    } else if ($("#div-element" + (knRightBottom + 10)).children().attr('class') == col) {
        colorEle2(knRightBottom + 10);
        tempId = i;
    }
    if ($("#div-element" + (knRightBottom + 1)).children().length == 0) {
        colorEle1(knRightBottom + 1);
    } else if ($("#div-element" + (knRightBottom + 1)).children().attr('class') == col) {
        colorEle2(knRightBottom + 1);
        tempId = i;
    }
}

//----------------------------------------------------------------------------------------------------------------------
function colorEle1(i) {
    $("#div-element" + i).css("background-color", "rgb(0, 128, 0)");
    $("#div-element" + i).css("border-style", "solid");
    $("#div-element" + i).css("border-width", "1px");
    $("#div-element" + i).css("border-color", "#006100");
}
function colorEle2(i) {
    $("#div-element" + i).css("background-color", "rgb(255, 0, 0)");
}
function resetColor() {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if (i % 2 != 0) {
                if (j % 2 != 0) {
                    var colorElement = "#FFDA67";
                } else {
                    var colorElement = "#885E00";
                }
            } else {
                if (j % 2 != 0) {
                    var colorElement = "#885E00";
                } else {
                    var colorElement = "#FFDA67";
                }
            }
            elementPieces.setColor(i, j, colorElement);
        }
    }
}

setTextPanel(1, "rgb(105,73,0,0.8)");
setTextPanel(2, "#FFDA67");