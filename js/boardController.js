/**
 * Created by Imalka Gunawardana on 9/1/2017.
 */
//---------------------------------------------------Variable Declarations----------------------------------------------
var divPos=[0,87.5,175,262.5,350,437.5,525,612.5];
var divOuterTop=[87.5,175,262.5,350,437.5,525,612.5,700];
var divOuterLeft=[0,87.5,175,262.5,350,437.5,525,612.5,700,787.5];
var divOuterTextLettes=["","A","B","C","D","E","F","G","H",""];
var divOuterTextNumbers=["","1","2","3","4","5","6","7","8",""];

//---------------------------------------------------Main Panel----------------------------------------------
function setOuterPanel(size) {
    $("#div-outerPanel").css("position","absolute");
    $("#div-outerPanel").css("width",size);
    $("#div-outerPanel").css("height",size);
    $("#div-outerPanel").css("z-index","999");
    $("#div-outerPanel").css("top","10%");
    $("#div-outerPanel").css("left","20%");
    //$("#div-outerPanel").css("transform","translate(-50%,-43%)");
    $("#div-outerPanel").css("background-color","#45330B");
    //$("#div-outerPanel").css("transform","rotate(180deg)");
}

//---------------------------------------------------Chess Board----------------------------------------------
var elementBoard={
    getElement:function () {
        return $("<div>", {id: "div-board"});
    },
    setElement:function () {
        $("#div-board").css("position","absolute");
        $("#div-board").css("z-index","1");
    },
    setSize:function (size,pos) {
        $("#div-board").css("width",size);
        $("#div-board").css("height",size);
        $("#div-board").css("top",pos);
        $("#div-board").css("left",pos);
    }
};

//---------------------------------------------------Chess Pieces----------------------------------------------
var elementPieces={
    getElement:function (i,j) {
        return $("<div>", {id: "div-element"+(i+1)+""+(j+1)});
    },
    setElement:function (i,j) {
        $("#div-element"+(i+1)+""+(j+1)).css("position","absolute");
        $("#div-element"+(i+1)+""+(j+1)).addClass("chessArea");
    },
    setColor:function (i,j,elementColor) {
        $("#div-element"+(i+1)+""+(j+1)).css("background-color",elementColor);
    },
    setSize:function (i,j,size) {
        $("#div-element"+(i+1)+""+(j+1)).css("top",divPos[i]+"px");
        $("#div-element"+(i+1)+""+(j+1)).css("left",divPos[j]+"px");
        $("#div-element"+(i+1)+""+(j+1)).css("width",size);
        $("#div-element"+(i+1)+""+(j+1)).css("height",size);
    },
    setShadow:function (i,j) {
        $("#div-element"+(i+1)+""+(j+1)).css("-moz-box-shadow","inset 5px 5px 5px rgba(255, 255, 255, .4), inset -5px -5px 5px rgba(0, 0, 0, .4)");
        $("#div-element"+(i+1)+""+(j+1)).css("-webkit-box-shadow","inset 5px 5px 5px rgba(255, 255, 255, .4), inset -5px -5px 5px rgba(0, 0, 0, .4)");
        $("#div-element"+(i+1)+""+(j+1)).css("box-shadow","inset 5px 5px 5px rgba(255, 255, 255, .4), inset -5px -5px 5px rgba(0, 0, 0, .4)");
    }
};

//---------------------------------------------------Chess Board Border Pieces------------------------------------------
var elementOuterPieces={
    getElement:function (i,j) {
        return $("<div>", {id: "div-elementOuterPiece"+i+""+j});
    },
    setElement:function (i,j) {
        $("#div-elementOuterPiece"+i+""+j).css("position","absolute");
        $("#div-elementOuterPiece"+i+""+j).css("background-color","#694900");
        $("#div-elementOuterPiece"+i+""+j).css("color","#251900");
        $("#div-elementOuterPiece"+i+""+j).css("text-align","center");
        $("#div-elementOuterPiece"+i+""+j).css("vertical-align","middle");
        $("#div-elementOuterPiece"+i+""+j).css("font-size","23px");
        $("#div-elementOuterPiece"+i+""+j).css("border-style","solid");
        $("#div-elementOuterPiece"+i+""+j).css("border-width","1px");
        $("#div-elementOuterPiece"+i+""+j).css("border-color","#885E00");
    },
    setSize:function (i,j,size,l,k) {
        $("#div-elementOuterPiece"+i+""+j).css("line-height",size);
        $("#div-elementOuterPiece"+i+""+j).css("width",size);
        $("#div-elementOuterPiece"+i+""+j).css("height",size);
        $("#div-elementOuterPiece"+i+""+j).css("top",k+"px");
        $("#div-elementOuterPiece"+i+""+j).css("left",l+"px");
    }
};

//---------------------------------------------------Execution----------------------------------------------
$("body").css("background-color","#4A3301");
$("body").css("background-size","cover");
//setOuterPanel("875px");
$("#div-outerPanel").append(elementBoard.getElement());
elementBoard.setElement();
//elementBoard.setSize("700px","87.5px");

for(var i=0;i<8;i++){
    for(var j=0;j<8;j++){
        if(i%2!=0){
            if(j%2!=0){
                var colorElement="#FFDA67";
            }else{
                var colorElement="#885E00";
            }
        }else{
            if(j%2!=0){
                var colorElement="#885E00";
            }else{
                var colorElement="#FFDA67";
            }
        }
        $("#div-board").append(elementPieces.getElement(i,j));
        elementPieces.setElement(i,j);
        elementPieces.setColor(i,j,colorElement);
        //elementPieces.setSize(i,j,"87.5px");
        //element.setShadow(i,j);
    }
}

for(var j=0;j<10;j++){
    $("#div-outerPanel").append(elementOuterPieces.getElement(1,j));
    elementOuterPieces.setElement(1,j);
    //elementOuterPieces.setSize(1,j,"87.5px",divOuterLeft[j],0);
    $("#div-elementOuterPiece1"+j).text(divOuterTextLettes[10-(j+1)]);
    $("#div-elementOuterPiece1"+j).css("transform","rotate(180deg)");
}
for(var j=0;j<10;j++){
    $("#div-outerPanel").append(elementOuterPieces.getElement(2,j));
    elementOuterPieces.setElement(2,j);
    //elementOuterPieces.setSize(2,j,"87.5px",divOuterLeft[j],787.5);
    $("#div-elementOuterPiece2"+j).text(divOuterTextLettes[j]);
}
for(var j=0;j<10;j++){
    $("#div-outerPanel").append(elementOuterPieces.getElement(3,j));
    elementOuterPieces.setElement(3,j);
   // elementOuterPieces.setSize(3,j,"87.5px",0,divOuterTop[j]);
    $("#div-elementOuterPiece3"+j).text(divOuterTextNumbers[10-(j+2)]);
}
for(var j=0;j<10;j++){
    $("#div-outerPanel").append(elementOuterPieces.getElement(4,j));
    elementOuterPieces.setElement(4,j);
    //elementOuterPieces.setSize(4,j,"87.5px",787.5,divOuterTop[j]);
    $("#div-elementOuterPiece4"+j).text(divOuterTextNumbers[j+1]);
    $("#div-elementOuterPiece4"+j).css("transform","rotate(180deg)");
}




