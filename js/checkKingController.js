/**
 * Created by Imalka Gunawardana on 9/14/2017.
 */
var bottomPos = 10;
var topPos = 10;
var leftPos = 1;
var rightPos = 1;
var leftBottom = 9;
var leftTop = 11;
var rightBottom = 9;
var rightTop = 11;

var blackPawn = [9, 10, 11, 12, 13, 14, 15, 16];
var blackRook = [1, 8];
var blackKnight = [2, 7];
var blackBishop = [3, 6];
var blackQueen = [4];
var whitePawn = [17, 18, 19, 20, 21, 22, 23, 24];
var whiteRook = [25, 32];
var whiteKnight = [26, 31];
var whiteBishop = [27, 30];
var whiteQueen = [28];

function resetArray() {
    if (removedData.length != 0) {
        for (var i = 0; i < removedData.length; i++) {
            if (parseInt(blackPawn.indexOf(parseInt(removedData[i]))) > -1) {
                blackPawn.splice(blackPawn.indexOf(parseInt(removedData[i])), 1);
            }
            if (parseInt(blackRook.indexOf(parseInt(removedData[i]))) > -1) {
                blackRook.splice(blackRook.indexOf(parseInt(removedData[i])), 1);
            }
            if (parseInt(blackKnight.indexOf(parseInt(removedData[i]))) > -1) {
                blackKnight.splice(blackKnight.indexOf(parseInt(removedData[i])), 1);
            }
            if (parseInt(blackBishop.indexOf(parseInt(removedData[i]))) > -1) {
                blackBishop.splice(blackBishop.indexOf(parseInt(removedData[i])), 1);
            }
            if (parseInt(blackQueen.indexOf(parseInt(removedData[i]))) > -1) {
                blackQueen.splice(blackQueen.indexOf(parseInt(removedData[i])), 1);
            }
            if (parseInt(whitePawn.indexOf(parseInt(removedData[i]))) > -1) {
                whitePawn.splice(whitePawn.indexOf(parseInt(removedData[i])), 1);
            }
            if (parseInt(whiteRook.indexOf(parseInt(removedData[i]))) > -1) {
                whiteRook.splice(whiteRook.indexOf(parseInt(removedData[i])), 1);
            }
            if (parseInt(whiteKnight.indexOf(parseInt(removedData[i]))) > -1) {
                whiteKnight.splice(whiteKnight.indexOf(parseInt(removedData[i])), 1);
            }
            if (parseInt(whiteBishop.indexOf(parseInt(removedData[i]))) > -1) {
                whiteBishop.splice(whiteBishop.indexOf(parseInt(removedData[i])), 1);
            }
            if (parseInt(whiteQueen.indexOf(parseInt(removedData[i]))) > -1) {
                whiteQueen.splice(whiteQueen.indexOf(parseInt(removedData[i])), 1);
            }
        }
    }
}

function checkKing(k) {
    resetArray();
    if (k == "black") {
        for (var j in blackPawn) {
            var i = $("#image-element" + blackPawn[j]).parents(".chessArea").attr('id').substring(11);
            setCheck1(i, k, 2);
        }
        for (var j in blackRook) {
            var i = $("#image-element" + blackRook[j]).parents(".chessArea").attr('id').substring(11);
            setCheck2(i, "white", 29, 2);
        }
        for (var j in blackBishop) {
            var i = $("#image-element" + blackBishop[j]).parents(".chessArea").attr('id').substring(11);
            setCheck3(i, "white", 29, 2);
        }
        for (var j in blackQueen) {
            var i = $("#image-element" + blackQueen[j]).parents(".chessArea").attr('id').substring(11);
            setCheck4(i, "white", 29, 2);
        }
        for (var j in blackKnight) {
            var i = $("#image-element" + blackKnight[j]).parents(".chessArea").attr('id').substring(11);
            setCheck5(i, "white", 29, 2);
        }
    } else if (k == "white") {
        for (var j in whitePawn) {
            var i = $("#image-element" + whitePawn[j]).parents(".chessArea").attr('id').substring(11);
            setCheck1(i, k, 1);
        }
        for (var j in whiteRook) {
            var i = $("#image-element" + whiteRook[j]).parents(".chessArea").attr('id').substring(11);
            setCheck2(i, "black", 5, 1);
        }
        for (var j in whiteBishop) {
            var i = $("#image-element" + whiteBishop[j]).parents(".chessArea").attr('id').substring(11);
            setCheck3(i, "black", 5, 1);
        }
        for (var j in whiteQueen) {
            var i = $("#image-element" + whiteQueen[j]).parents(".chessArea").attr('id').substring(11);
            setCheck4(i, "black", 5, 1);
        }
        for (var j in whiteKnight) {
            var i = $("#image-element" + whiteKnight[j]).parents(".chessArea").attr('id').substring(11);
            setCheck5(i, "black", 5, 1);
        }
    }
}

function setCheck1(j, k, m) {
    //----------------------------------------------------------Pawn--------------------------------------------------
    if (k == "black") {
        if ($("#div-element" + (parseInt(j) + 11)).children().length == 1 && $("#div-element" + (parseInt(j) + 11)).children().attr('class') == "white" && $("#div-element" + (parseInt(j) + 11)).children().attr('id') == "image-element29") {
            colorOfDiv = $("#image-element29").parents(".chessArea").css("background-color");
            if (intervalColor != "undefined") {
                clearInterval(intervalColor);
            }
            intervalColor = setInterval(function () {
                setColorDiv(m);
            }, 500);
        }
        if ($("#div-element" + (parseInt(j) + 9)).children().length == 1 && $("#div-element" + (parseInt(j) + 9)).children().attr('class') == "white" && $("#div-element" + (parseInt(j) + 9)).children().attr('id') == "image-element29") {
            colorOfDiv = $("#image-element29").parents(".chessArea").css("background-color");
            if (intervalColor != "undefined") {
                clearInterval(intervalColor);
            }
            intervalColor = setInterval(function () {
                setColorDiv(m);
            }, 500);
        }
    } else if (k == "white") {
        if ($("#div-element" + (parseInt(j) - 9)).children().length == 1 && $("#div-element" + (parseInt(j) - 9)).children().attr('class') == "black" && $("#div-element" + (parseInt(j) - 9)).children().attr('id') == "image-element5") {
            colorOfDiv = $("#image-element5").parents(".chessArea").css("background-color");
            if (intervalColor != "undefined") {
                clearInterval(intervalColor);
            }
            intervalColor = setInterval(function () {
                setColorDiv(m);
            }, 500);
        }
        if ($("#div-element" + (parseInt(j) - 11)).children().length == 1 && $("#div-element" + (parseInt(j) - 11)).children().attr('class') == "black" && $("#div-element" + (parseInt(j) - 11)).children().attr('id') == "image-element5") {
            colorOfDiv = $("#image-element5").parents(".chessArea").css("background-color");
            if (intervalColor != "undefined") {
                clearInterval(intervalColor);
            }
            intervalColor = setInterval(function () {
                setColorDiv(m);
            }, 500);
        }
    }
}

function setCheck2(j, k, l, m) {
    //-----------------------------------------------------Rook--------------------------------------------------------
    bottomPos = 10;
    topPos = 10;
    leftPos = 1;
    rightPos = 1;
    while ($("#div-element" + (parseInt(j) + bottomPos)).children().length == 0 && $("#div-element" + (parseInt(j) + bottomPos)).attr('class') == "chessArea") {
        bottomPos += 10;
    }
    while ($("#div-element" + (parseInt(j) - topPos)).children().length == 0 && $("#div-element" + (parseInt(j) - topPos)).attr('class') == "chessArea") {
        topPos += 10;
    }
    while ($("#div-element" + (parseInt(j) + leftPos)).children().length == 0 && $("#div-element" + (parseInt(j) + leftPos)).attr('class') == "chessArea") {
        leftPos += 1;
    }
    while ($("#div-element" + (parseInt(j) - rightPos)).children().length == 0 && $("#div-element" + (parseInt(j) - rightPos)).attr('class') == "chessArea") {
        rightPos += 1;
    }
    if ($("#div-element" + (parseInt(j) + bottomPos)).children().length == 1 && $("#div-element" + (parseInt(j) + bottomPos)).children().attr('class') == k && $("#div-element" + (parseInt(j) + bottomPos)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != "undefined") {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (parseInt(j) - topPos)).children().length == 1 && $("#div-element" + (parseInt(j) - topPos)).children().attr('class') == k && $("#div-element" + (parseInt(j) - topPos)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != "undefined") {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (parseInt(j) + leftPos)).children().length == 1 && $("#div-element" + (parseInt(j) + leftPos)).children().attr('class') == k && $("#div-element" + (parseInt(j) + leftPos)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != "undefined") {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (parseInt(j) - rightPos)).children().length == 1 && $("#div-element" + (parseInt(j) - rightPos)).children().attr('class') == k && $("#div-element" + (parseInt(j) - rightPos)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != "undefined") {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
}

function setCheck3(j, k, l, m) {
    //-------------------------------------------------Bishop---------------------------------------------------------
    leftBottom = 9;
    leftTop = 11;
    rightBottom = 11;
    rightTop = 9;
    while ($("#div-element" + (parseInt(j) - leftTop)).children().length == 0 && $("#div-element" + (parseInt(j) - leftTop)).attr('class') == "chessArea") {
        leftTop += 11;
    }
    while ($("#div-element" + (parseInt(j) + leftBottom)).children().length == 0 && $("#div-element" + (parseInt(j) + leftBottom)).attr('class') == "chessArea") {
        leftBottom += 9;
    }
    while ($("#div-element" + (parseInt(j) - rightTop)).children().length == 0 && $("#div-element" + (parseInt(j) - rightTop)).attr('class') == "chessArea") {
        rightTop += 9;
    }
    while ($("#div-element" + (parseInt(j) + rightBottom)).children().length == 0 && $("#div-element" + (parseInt(j) + rightBottom)).attr('class') == "chessArea") {
        rightBottom += 11;
    }
    if ($("#div-element" + (parseInt(j) - leftTop)).children().length == 1 && $("#div-element" + (parseInt(j) - leftTop)).children().attr('class') == k && $("#div-element" + (parseInt(j) - leftTop)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != "undefined") {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (parseInt(j) + leftBottom)).children().length == 1 && $("#div-element" + (parseInt(j) + leftBottom)).children().attr('class') == k && $("#div-element" + (parseInt(j) + leftBottom)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != "undefined") {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (parseInt(j) - rightTop)).children().length == 1 && $("#div-element" + (parseInt(j) - rightTop)).children().attr('class') == k && $("#div-element" + (parseInt(j) - rightTop)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != "undefined") {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (parseInt(j) + rightBottom)).children().length == 1 && $("#div-element" + (parseInt(j) + rightBottom)).children().attr('class') == k && $("#div-element" + (parseInt(j) + rightBottom)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != "undefined") {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }

}

function setCheck4(j, k, l, m) {
    //-----------------------------------------------Queen----------------------------------------------------------
    bottomPos = 10;
    topPos = 10;
    leftPos = 1;
    rightPos = 1;
    leftBottom = 9;
    leftTop = 11;
    rightBottom = 11;
    rightTop = 9;
    while ($("#div-element" + (parseInt(j) + bottomPos)).children().length == 0 && $("#div-element" + (parseInt(j) + bottomPos)).attr('class') == "chessArea") {
        bottomPos += 10;
    }
    while ($("#div-element" + (parseInt(j) - topPos)).children().length == 0 && $("#div-element" + (parseInt(j) - topPos)).attr('class') == "chessArea") {
        topPos += 10;
    }
    while ($("#div-element" + (parseInt(j) + leftPos)).children().length == 0 && $("#div-element" + (parseInt(j) + leftPos)).attr('class') == "chessArea") {
        leftPos += 1;
    }
    while ($("#div-element" + (parseInt(j) - rightPos)).children().length == 0 && $("#div-element" + (parseInt(j) - rightPos)).attr('class') == "chessArea") {
        rightPos += 1;
    }
    while ($("#div-element" + (parseInt(j) - leftTop)).children().length == 0 && $("#div-element" + (parseInt(j) - leftTop)).attr('class') == "chessArea") {
        leftTop += 11;
    }
    while ($("#div-element" + (parseInt(j) + leftBottom)).children().length == 0 && $("#div-element" + (parseInt(j) + leftBottom)).attr('class') == "chessArea") {
        leftBottom += 9;
    }
    while ($("#div-element" + (parseInt(j) - rightTop)).children().length == 0 && $("#div-element" + (parseInt(j) - rightTop)).attr('class') == "chessArea") {
        rightTop += 9;
    }
    while ($("#div-element" + (parseInt(j) + rightBottom)).children().length == 0 && $("#div-element" + (parseInt(j) + rightBottom)).attr('class') == "chessArea") {
        rightBottom += 11;
    }
    if ($("#div-element" + (parseInt(j) + bottomPos)).children().length == 1 && $("#div-element" + (parseInt(j) + bottomPos)).children().attr('class') == k && $("#div-element" + (parseInt(j) + bottomPos)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (parseInt(j) - topPos)).children().length == 1 && $("#div-element" + (parseInt(j) - topPos)).children().attr('class') == k && $("#div-element" + (parseInt(j) - topPos)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != undefined) {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (parseInt(j) + leftPos)).children().length == 1 && $("#div-element" + (parseInt(j) + leftPos)).children().attr('class') == k && $("#div-element" + (parseInt(j) + leftPos)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != undefined) {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (parseInt(j) - rightPos)).children().length == 1 && $("#div-element" + (parseInt(j) - rightPos)).children().attr('class') == k && $("#div-element" + (parseInt(j) - rightPos)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != undefined) {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (parseInt(j) - leftTop)).children().length == 1 && $("#div-element" + (parseInt(j) - leftTop)).children().attr('class') == k && $("#div-element" + (parseInt(j) - leftTop)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != undefined) {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (parseInt(j) + leftBottom)).children().length == 1 && $("#div-element" + (parseInt(j) + leftBottom)).children().attr('class') == k && $("#div-element" + (parseInt(j) + leftBottom)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != undefined) {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (parseInt(j) - rightTop)).children().length == 1 && $("#div-element" + (parseInt(j) - rightTop)).children().attr('class') == k && $("#div-element" + (parseInt(j) - rightTop)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != undefined) {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (parseInt(j) + rightBottom)).children().length == 1 && $("#div-element" + (parseInt(j) + rightBottom)).children().attr('class') == k && $("#div-element" + (parseInt(j) + rightBottom)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != undefined) {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
}

function setCheck5(j, col, l, m) {
    //----------------------------------------------Knight--------------------------------------------------
    var knLeftTop = parseInt(j) - 11;
    var knLeftBottom = parseInt(j) + 9;
    var knRightTop = parseInt(j) - 9;
    var knRightBottom = parseInt(j) + 11;
    if ($("#div-element" + (knLeftTop - 10)).children().length == 1 && $("#div-element" + (knLeftTop - 10)).children().attr('class') == col && $("#div-element" + (knLeftTop - 10)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != undefined) {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (knLeftTop - 1)).children().length == 1 && $("#div-element" + (knLeftTop - 1)).children().attr('class') == col && $("#div-element" + (knLeftTop - 1)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != undefined) {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (knLeftBottom + 10)).children().length == 1 && $("#div-element" + (knLeftBottom + 10)).children().attr('class') == col && $("#div-element" + (knLeftBottom + 10)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != undefined) {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (knLeftBottom - 1)).children().length == 1 && $("#div-element" + (knLeftBottom - 1)).children().attr('class') == col && $("#div-element" + (knLeftBottom - 1)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != undefined) {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (knRightTop - 10)).children().length == 1 && $("#div-element" + (knRightTop - 10)).children().attr('class') == col && $("#div-element" + (knRightTop - 10)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != undefined) {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (knRightTop + 1)).children().length == 1 && $("#div-element" + (knRightTop + 1)).children().attr('class') == col && $("#div-element" + (knRightTop + 1)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != undefined) {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (knRightBottom + 10)).children().length == 1 && $("#div-element" + (knRightBottom + 10)).children().attr('class') == col && $("#div-element" + (knRightBottom + 10)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != undefined) {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
    if ($("#div-element" + (knRightBottom + 1)).children().length == 1 && $("#div-element" + (knRightBottom + 1)).children().attr('class') == col && $("#div-element" + (knRightBottom + 1)).children().attr('id') == "image-element" + l) {
        colorOfDiv = $("#image-element" + l).parents(".chessArea").css("background-color");
        if (intervalColor != undefined) {
            clearInterval(intervalColor);
        }
        intervalColor = setInterval(function () {
            setColorDiv(m);
        }, 500);
    }
}
var colorCount = 0;
var colorOfDiv;
function setColorDiv(i) {
    if (i == 1) {
        if (colorCount == 0) {
            $("#image-element5").parents(".chessArea").css("background-color", "red");
            colorCount++;
        } else if (colorCount == 1) {
            $("#image-element5").parents(".chessArea").css("background-color", colorOfDiv);
            colorCount = 0;
        }
    } else if (i == 2) {
        if (colorCount == 0) {
            $("#image-element29").parents(".chessArea").css("background-color", "red");
            colorCount++;
        } else if (colorCount == 1) {
            $("#image-element29").parents(".chessArea").css("background-color", colorOfDiv);
            colorCount = 0;
        }
    }
}