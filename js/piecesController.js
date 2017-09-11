/**
 * Created by Imalka Gunawardana on 9/1/2017.
 */

//-----------------------------------------------Pawn Controller--------------------------------------------------------

var pawnCount=[];
var elementId;
var imageId;
var imageClass;
var tempId;
var blackCount=0;
var whiteCount=1;

for(var i=0;i<16;i++){
    pawnCount[i]=0;
}

function increDivId(i) {
    switch (i){
        case "9": pawnCount[0]++;break;
        case "10": pawnCount[1]++;break;
        case "11": pawnCount[2]++;break;
        case "12": pawnCount[3]++;break;
        case "13": pawnCount[4]++;break;
        case "14": pawnCount[5]++;break;
        case "15": pawnCount[6]++;break;
        case "16": pawnCount[7]++;break;
        case "17": pawnCount[8]++;break;
        case "18": pawnCount[9]++;break;
        case "19": pawnCount[10]++;break;
        case "20": pawnCount[11]++;break;
        case "21": pawnCount[12]++;break;
        case "22": pawnCount[13]++;break;
        case "23": pawnCount[14]++;break;
        case "24": pawnCount[15]++;break;
    }
}

$(".chessArea").click(function (){
    if($(this).children().length==1){
        imageId=$(this).children().attr('id').substring(13);
        imageClass=$(this).children().attr('class');
        elementId=$(this).attr('id').substring(11);
        if($(this).css("background-color")!="rgb(255, 0, 0)"){
            resetColor();
        }
        if(imageId>=9 && imageId<=24){
            pawnColorDivElements(imageId,elementId,imageClass,0);
        }
        if(imageId==1 || imageId==8 || imageId==25 || imageId==32){
            rookColorDivElements(imageId,elementId,imageClass,0);
        }
        if(imageId==5 || imageId==29){
            kingColorDivElements(imageId,elementId,imageClass,0);
        }
    }
    if($(this).css("background-color")=="rgb(0, 128, 0)"){
        if($(this).children().length==0){
            if(imageId>=9 && imageId<=24){
                pawnColorDivElements(imageId,elementId,imageClass,1);
            }
            if(imageId==1 || imageId==8 || imageId==25 || imageId==32){
                rookColorDivElements(imageId,elementId,imageClass,1);
            }
            if(imageId==5 || imageId==29){
                kingColorDivElements(imageId,elementId,imageClass,1);
            }
            $(this).append($("#image-element"+imageId));
            resetColor();
        }
    }
    if($(this).css("background-color")=="rgb(255, 0, 0)"){
        $(this).children().remove();
        $(this).append($("#image-element"+tempId));
        if(imageClass=="black"){
            blackCount++;
            whiteCount=0;
        }else if(imageClass=="white"){
            blackCount=0;
            whiteCount++;
        }
        increDivId(tempId);
        resetColor();
    }
});

function pawnColorDivElements(i, j, k, l) {
    if(k=="black" && blackCount>0){
        if(pawnCount[parseInt(i)-9]==0){
            $("#div-element"+j).css("background-color","rgb(0, 96, 0)");
            if($("#div-element"+(parseInt(j)+10)).children().length==0){
                colorEle1(parseInt(j)+10);
                if($("#div-element"+(parseInt(j)+20)).children().length==0){
                    colorEle1(parseInt(j)+20);
                }
            }
            if(l==1){
                blackCount=0;
                whiteCount++;
                increDivId(i);
            }
            if($("#div-element"+(parseInt(j)+11)).children().length==1 && $("#div-element"+(parseInt(j)+11)).children().attr('class')=="white"){
                colorEle2(parseInt(j)+11);
                tempId=i;
            }
            if($("#div-element"+(parseInt(j)+9)).children().length==1 && $("#div-element"+(parseInt(j)+9)).children().attr('class')=="white"){
                colorEle2(parseInt(j)+9);
                tempId=i;
            }
        }else{
            $("#div-element"+j).css("background-color","rgb(0, 96, 0)");
            if($("#div-element"+(parseInt(j)+10)).children().length==0){
                $("#div-element"+(parseInt(j)+10)).css("background-color","rgb(0, 128, 0)");
                colorEle1(parseInt(j)+10);
            }
            if($("#div-element"+(parseInt(j)+11)).children().length==1 && $("#div-element"+(parseInt(j)+11)).children().attr('class')=="white"){
                $("#div-element"+(parseInt(j)+11)).css("background-color","rgb(255, 0, 0)");
                colorEle2(parseInt(j)+11);
                tempId=i;
            }
            if($("#div-element"+(parseInt(j)+9)).children().length==1 && $("#div-element"+(parseInt(j)+9)).children().attr('class')=="white"){
                colorEle2(parseInt(j)+9);
                tempId=i;
            }
            if(l==1){
                blackCount=0;
                whiteCount++;
            }
        }
    }else if(k=="white" && whiteCount>0){
        if(pawnCount[parseInt(i)-9]==0){
            $("#div-element"+j).css("background-color","rgb(0, 96, 0)");
            if($("#div-element"+(parseInt(j)-10)).children().length==0){
                colorEle1(parseInt(j)-10);
                if($("#div-element"+(parseInt(j)-20)).children().length==0){
                    colorEle1(parseInt(j)-20);
                }
            }
            if(l==1){
                blackCount++;
                whiteCount=0;
                increDivId(i);
            }
            if($("#div-element"+(parseInt(j)-9)).children().length==1 && $("#div-element"+(parseInt(j)-9)).children().attr('class')=="black"){
                colorEle2(parseInt(j)-9);
                tempId=i;
            }
            if($("#div-element"+(parseInt(j)-11)).children().length==1 && $("#div-element"+(parseInt(j)-11)).children().attr('class')=="black"){
                colorEle2(parseInt(j)-11);
                tempId=i;
            }
        }else{
            $("#div-element"+j).css("background-color","rgb(0, 96, 0)");
            if($("#div-element"+(parseInt(j)-10)).children().length==0){
                colorEle1(parseInt(j)-10);
            }
            if($("#div-element"+(parseInt(j)-9)).children().length==1 && $("#div-element"+(parseInt(j)-9)).children().attr('class')=="black"){
                colorEle2(parseInt(j)-9);
                tempId=i;
            }
            if($("#div-element"+(parseInt(j)-11)).children().length==1 && $("#div-element"+(parseInt(j)-11)).children().attr('class')=="black"){
                colorEle2(parseInt(j)-11);
                tempId=i;
            }
            if(l==1){
                blackCount++;
                whiteCount=0;
            }
        }
    }
}

//-------------------------------------------------Rook Controller------------------------------------------------------

function rookColorDivElements(i,j, k, l) {
    if(k=="black" && blackCount>0){
        rookCont(i,j,"white");
        if(l==1){
            blackCount=0;
            whiteCount++;
        }

    }else if(k=="white" && whiteCount>0){
        rookCont(i,j,"black");
        if(l==1){
            blackCount++;
            whiteCount=0;
        }
    }
}

var rookBottom=10;
var rookTop=10;
var rookLeft=1;
var rookRight=1;
function rookCont(i,j,k) {
    rookBottom=10;
    rookTop=10;
    rookLeft=1;
    rookRight=1;
    while($("#div-element"+(parseInt(j)+rookBottom)).children().length==0 && $("#div-element"+(parseInt(j)+rookBottom)).attr('class')=="chessArea"){
        colorEle1(parseInt(j)+rookBottom);
        rookBottom+=10;
    }
    while($("#div-element"+(parseInt(j)-rookTop)).children().length==0 && $("#div-element"+(parseInt(j)-rookTop)).attr('class')=="chessArea"){
        colorEle1(parseInt(j)-rookTop);
        rookTop+=10;
    }
    while($("#div-element"+(parseInt(j)+rookLeft)).children().length==0 && $("#div-element"+(parseInt(j)+rookLeft)).attr('class')=="chessArea"){
        colorEle1(parseInt(j)+rookLeft);
        rookLeft+=1;
    }
    while($("#div-element"+(parseInt(j)-rookRight)).children().length==0 && $("#div-element"+(parseInt(j)-rookRight)).attr('class')=="chessArea"){
        colorEle1(parseInt(j)-rookRight);
        rookRight+=1;
    }
    $("#div-element"+j).css("background-color","rgb(0, 96, 0)");
    if($("#div-element"+(parseInt(j)+rookBottom)).children().length==1 && $("#div-element"+(parseInt(j)+rookBottom)).children().attr('class')==k){
        colorEle2(parseInt(j)+rookBottom);
        tempId=i;
    }
    if($("#div-element"+(parseInt(j)-rookTop)).children().length==1 && $("#div-element"+(parseInt(j)-rookTop)).children().attr('class')==k){
        colorEle2(parseInt(j)-rookTop);
        tempId=i;
    }
    if($("#div-element"+(parseInt(j)+rookLeft)).children().length==1 && $("#div-element"+(parseInt(j)+rookLeft)).children().attr('class')==k){
        colorEle2(parseInt(j)+rookLeft);
        tempId=i;
    }
    if($("#div-element"+(parseInt(j)-rookRight)).children().length==1 && $("#div-element"+(parseInt(j)-rookRight)).children().attr('class')==k){
        colorEle2(parseInt(j)-rookRight);
        tempId=i;
    }
}

//-----------------------------------------------King Controller--------------------------------------------------------

function kingColorDivElements(i,j, k,l) {
    if(k=="black" && blackCount>0){
        kingColor(i,j,"white",l,k);
    }else if(k=="white" && whiteCount>0){
        kingColor(i,j,"black",l,k);
    }
}

function kingColor(i,j,col,l,k) {
    $("#div-element"+j).css("background-color","rgb(0, 96, 0)");
    if($("#div-element"+(parseInt(j)+10)).children().length==0) {
        colorEle1(parseInt(j) + 10);
    }else if($("#div-element"+(parseInt(j)+10)).children().attr('class')==col){
        colorEle2(parseInt(j) + 10);
        tempId=i;
    }
    if($("#div-element"+(parseInt(j)-10)).children().length==0) {
        colorEle1(parseInt(j) - 10);
    }else if($("#div-element"+(parseInt(j)-10)).children().attr('class')==col){
        colorEle2(parseInt(j) - 10);
        tempId=i;
    }
    if($("#div-element"+(parseInt(j)+1)).children().length==0) {
        colorEle1(parseInt(j) + 1);
    }else if($("#div-element"+(parseInt(j)+1)).children().attr('class')==col){
        colorEle2(parseInt(j) + 1);
        tempId=i;
    }
    if($("#div-element"+(parseInt(j)-1)).children().length==0) {
        colorEle1(parseInt(j) - 1);
    }else if($("#div-element"+(parseInt(j)-1)).children().attr('class')==col){
        colorEle2(parseInt(j) -1);
        tempId=i;
    }
    if($("#div-element"+(parseInt(j)-11)).children().length==0) {
        colorEle1(parseInt(j) - 11);
    }else if($("#div-element"+(parseInt(j)-11)).children().attr('class')==col){
        colorEle2(parseInt(j) -11);
        tempId=i;
    }
    if($("#div-element"+(parseInt(j)+11)).children().length==0) {
        colorEle1(parseInt(j) + 11);
    }else if($("#div-element"+(parseInt(j)+11)).children().attr('class')==col){
        colorEle2(parseInt(j) +11);
        tempId=i;
    }
    if($("#div-element"+(parseInt(j)+9)).children().length==0) {
        colorEle1(parseInt(j) + 9);
    }else if($("#div-element"+(parseInt(j)+9)).children().attr('class')==col){
        colorEle2(parseInt(j) +9);
        tempId=i;
    }
    if($("#div-element"+(parseInt(j)-9)).children().length==0) {
        colorEle1(parseInt(j) -9);
    }else if($("#div-element"+(parseInt(j)-9)).children().attr('class')==col){
        colorEle2(parseInt(j) -9);
        tempId=i;
    }
    if(l==1 && k=="black"){
        blackCount=0;
        whiteCount++;
    }
    if(l==1 && k=="white"){
        blackCount++;
        whiteCount=0;
    }
}

//----------------------------------------------------------------------------------------------------------------------
function colorEle1(i) {
    $("#div-element"+i).css("background-color","rgb(0, 128, 0)");
    $("#div-element"+i).css("border-style","solid");
    $("#div-element"+i).css("border-width","1px");
    $("#div-element"+i).css("border-color","#006100");
}
function colorEle2(i) {
    $("#div-element"+i).css("background-color","rgb(255, 0, 0)");
}
function resetColor() {
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
            elementPieces.setColor(i,j,colorElement);
        }
    }
}