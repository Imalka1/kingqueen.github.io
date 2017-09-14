/**
 * Created by Imalka Gunawardana on 9/1/2017.
 */
//---------------------------------------------------Variable Declarations----------------------------------------------
var divPos=[0,87.5,175,262.5,350,437.5,525,612.5];
var divOuterTop=[87.5,175,262.5,350,437.5,525,612.5,700];
var divOuterLeft=[0,87.5,175,262.5,350,437.5,525,612.5,700,787.5];
var divOuterTextLettes=["","A","B","C","D","E","F","G","H",""];
var divOuterTextNumbers=["","1","2","3","4","5","6","7","8",""];
var rotCount=0;

//---------------------------------------------------Main Panel----------------------------------------------

function setOuterPanel(size) {
    $("#div-outerPanel").css("position","absolute");
    $("#div-outerPanel").css("width",size);
    $("#div-outerPanel").css("height",size);
    $("#div-outerPanel").css("z-index","999");
    $("#div-outerPanel").css("top","150px");
    $("#div-outerPanel").css("left","50%");
    $("#div-outerPanel").css("transform","translateX(-50%)");
    $("#div-outerPanel").css("background-color","rgba(255,255,255,0)");
}

function rotatePanelandIcons() {
    if(rotCount==0){
        $("#div-outerPanel").css("transform","translateX(-50%) rotate(180deg)");
        $("#div-outerPanel").css("transition","all 0.7s");
        for(var i=0;i<32;i++){
            if($("#image-element"+(i+1)).parent().attr('class')=="chessArea"){
                $("#image-element"+(i+1)).css("transform","rotate(180deg)");
                $("#image-element"+(i+1)).css("top","-4px");
                $("#image-element"+(i+1)).css("left","-4px");
            }
        }
        rotCount=1;
    }else if(rotCount==1){
        $("#div-outerPanel").css("transform","translateX(-50%) rotate(0deg)");
        $("#div-outerPanel").css("transition","all 0.7s");
        for(var i=0;i<32;i++){
            $("#image-element"+(i+1)).css("transform","rotate(0deg)");
            $("#image-element"+(i+1)).css("top","4px");
            $("#image-element"+(i+1)).css("left","4px");
        }
        rotCount=0;
    }

}

//-------------------------------------------------Pieces Hold Panel----------------------------------------------------

function setMainHoldPanel(i,j,k) {
    $("#div-mainHoldPanel").css("position","absolute");
    $("#div-mainHoldPanel").css("width",i);
    $("#div-mainHoldPanel").css("height",j);
    $("#div-mainHoldPanel").css("top",k);
    $("#div-mainHoldPanel").css("left","50%");
    $("#div-mainHoldPanel").css("transform","translateX(-50%)");
    //$("#div-mainHoldPanel").css("background-color","green");
}

function setElementHoldPanel(i,j,k,m,size1,size2,n,b) {
    $("#div-holdPanel"+i).css("position","absolute");
    $("#div-holdPanel"+i).css("width",size2);
    $("#div-holdPanel"+i).css("height",size1);
    $("#div-holdPanel"+i).css("top",j);
    $("#div-holdPanel"+i).css("left",m);
    $("#div-holdPanel"+i).css("background-color","rgba(105,73,0,0.3)");
    $("#div-textHoldPanel"+i).css("position","absolute");
    $("#div-textHoldPanel"+i).css("width",size1);
    $("#div-textHoldPanel"+i).css("height",size1);
    $("#div-textHoldPanel"+i).css("top",j);
    $("#div-textHoldPanel"+i).css("left",k);
    $("#div-textHoldPanel"+i).text(n);
    $("#div-textHoldPanel"+i).css("background-color","rgb(105,73,0)");
    $("#div-textHoldPanel"+i).css("line-height",size1);
    $("#div-textHoldPanel"+i).css("text-align","center");
    $("#div-textHoldPanel"+i).css("vertical-align","middle");
    $("#div-textHoldPanel"+i).css("font-size",b);
    $("#div-textHoldPanel"+i).css("font-weight","bold");
    $("#div-textHoldPanel"+1).css("color","black");
    $("#div-textHoldPanel"+2).css("color","white");
}

function setTextPanel(i,j) {
    $("#div-textHoldPanel"+i).css("background-color",j);
}

//---------------------------------------Name Tag------------------------------------------------

function setName(size2) {
    $("#div-nameTag").css("position","absolute");
    $("#div-nameTag").css("width","100%");
    $("#div-nameTag").css("height",size2);
    $("#div-nameTag").css("top","0px");
    $("#div-nameTag").css("left","0px");
//    $("#div-nameTag").text("King Queen Chess (www.kingqueenchess.tk)");
    $("#div-nameTag").css("background-color","rgba(254,188,0,0.7)");
    $("#headName").css("position","absolute");
    $("#headName").css("width","100%");
    $("#headName").css("font-weight","bold");
    $("#headName").css("text-align","center");
    $("#headName").css("top","50%");
    $("#headName").css("left","50%");
    $("#headName").css("transform","translate(-50%, -50%)");
}

function setTextSize(i) {
    $("#headName").css("font-size",i);
}

//---------------------------------------Elements Hold------------------------------------------------------------

var elementHold={
    getElement:function (i,j) {
        return $("<div>", {id: "div-holdElement"+i+""+j});
    },
    setElement:function (i,j) {
        $("#div-holdElement"+i+""+j).css("position","absolute");
        //$("#div-holdElement"+i+""+j).css("background-color","green");
    },
    setSize:function (i,j,size,k,l) {
        $("#div-holdElement"+i+""+j).css("width",size);
        $("#div-holdElement"+i+""+j).css("height",size);
        $("#div-holdElement"+i+""+j).css("top",k);
        $("#div-holdElement"+i+""+j).css("left",l);
    }
};

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
        $("#div-element"+(i+1)+""+(j+1)).css("border-style","none");
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
        $("#div-elementOuterPiece"+i+""+j).css("background-color","rgba(105,73,0,0.8)");
        $("#div-elementOuterPiece"+i+""+j).css("color","#251900");
        $("#div-elementOuterPiece"+i+""+j).css("text-align","center");
        $("#div-elementOuterPiece"+i+""+j).css("vertical-align","middle");
        $("#div-elementOuterPiece"+i+""+j).css("font-size","20px");
        $("#div-elementOuterPiece"+i+""+j).css("border-style","solid");
        $("#div-elementOuterPiece"+i+""+j).css("border-width","1px");
    },
    setSize:function (i,j,size,l,k) {
        $("#div-elementOuterPiece"+i+""+j).css("line-height",size);
        $("#div-elementOuterPiece"+i+""+j).css("width",size);
        $("#div-elementOuterPiece"+i+""+j).css("height",size);
        $("#div-elementOuterPiece"+i+""+j).css("top",k+"px");
        $("#div-elementOuterPiece"+i+""+j).css("left",l+"px");
        $("#div-elementOuterPiece"+i+""+j).css("border-color","rgba(136,94,0,0.8)");
    }
};

//----------------------------------------------------Footer-----------------------------------------------------

function footerTag() {
    $("#div-footerTag").css("position","absolute");
    $("#div-footerTag").css("background-color","rgba(52,51,41,0.3)");
    $("#div-footerTag").css("color","rgba(0,0,0,0.7)");
    $("#div-footerTag").css("left","0px");
    $("#div-footerTag").css("width","100%");
    $("#div-footerTag").css("height","250px");
    $("#nameText").css("position","absolute");
    $("#nameText").css("top","210px");
    $("#nameText").css("vertical-align","middle");
    $("#nameText").css("width","100%");
    $("#nameText").css("left","50%");
    $("#nameText").css("transform","translateX(-50%)");
    $("#nameText").css("text-align","center");
}

function setFooter(k) {
    $("#div-footerTag").css("top",k);
}

//---------------------------------------------------Execution----------------------------------------------

$("#div-outerPanel").append(elementBoard.getElement());
elementBoard.setElement();
//elementBoard.setSize("700px","87.5px");

for(var i=0;i<8;i++){
    for(var j=0;j<8;j++){
        if(i%2!=0){
            if(j%2!=0){
                var colorElement="rgba(255,218,103,1)";
            }else{
                var colorElement="rgba(136,94,0,1)";
            }
        }else{
            if(j%2!=0){
                var colorElement="rgba(136,94,0,1)";
            }else{
                var colorElement="rgba(255,218,103,1)";
            }
        }
        $("#div-board").append(elementPieces.getElement(i,j));
        elementPieces.setElement(i,j);
        elementPieces.setColor(i,j,colorElement);
        //elementPieces.setSize(i,j,"87.5px");
        //elementPieces.setShadow(i,j);
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

setElementHoldPanel(1,"250px","0px","175px","700px");
setElementHoldPanel(2,"250px","1300px","175px","700px");
setName("100px");
footerTag();

