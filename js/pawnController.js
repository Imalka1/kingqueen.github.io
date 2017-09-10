/**
 * Created by Imalka Gunawardana on 9/1/2017.
 */
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

$(".chessArea").bind('click touchstart',function (){
    if($(this).children().length==1){
        imageId=$(this).children().attr('id').substring(13);
        imageClass=$(this).children().attr('class');
        elementId=$(this).attr('id').substring(11);
        if($(this).css("background-color")!="rgb(255, 0, 0)"){
            resetColor();
        }
        if(imageId>=9 && imageId<=24){
            colorDivElements(imageId,elementId,imageClass,0);
        }
    }
    if($(this).css("background-color")=="rgb(0, 128, 0)"){
        if($(this).children().length==0){
            colorDivElements(imageId,elementId,imageClass,1);
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
        resetColor();
    }
});

function colorDivElements(i,j,k,l) {
    if(k=="black" && blackCount>0){
        if(pawnCount[parseInt(i)-9]==0){
            if($("#div-element"+(parseInt(j)+10)).children().length==0){
                $("#div-element"+j).css("background-color","rgb(0, 96, 0)");
                $("#div-element"+(parseInt(j)+10)).css("background-color","rgb(0, 128, 0)");
                if($("#div-element"+(parseInt(j)+20)).children().length==0){
                    $("#div-element"+(parseInt(j)+20)).css("background-color","rgb(0, 128, 0)");
                }
            }
            if(l==1){
                blackCount=0;
                whiteCount++;
                increDivId(i);
            }
            if($("#div-element"+(parseInt(j)+11)).children().length==1 && $("#div-element"+(parseInt(j)+11)).children().attr('class')=="white"){
                $("#div-element"+(parseInt(j)+11)).css("background-color","rgb(255, 0, 0)");
                tempId=i;
            }
            if($("#div-element"+(parseInt(j)+9)).children().length==1 && $("#div-element"+(parseInt(j)+9)).children().attr('class')=="white"){
                $("#div-element"+(parseInt(j)+9)).css("background-color","rgb(255, 0, 0)");
                tempId=i;
            }
        }else{
            if($("#div-element"+(parseInt(j)+10)).children().length==0){
                $("#div-element"+j).css("background-color","rgb(0, 96, 0)");
                $("#div-element"+(parseInt(j)+10)).css("background-color","rgb(0, 128, 0)");
            }
            if($("#div-element"+(parseInt(j)+11)).children().length==1 && $("#div-element"+(parseInt(j)+11)).children().attr('class')=="white"){
                $("#div-element"+(parseInt(j)+11)).css("background-color","rgb(255, 0, 0)");
                tempId=i;
            }
            if($("#div-element"+(parseInt(j)+9)).children().length==1 && $("#div-element"+(parseInt(j)+9)).children().attr('class')=="white"){
                $("#div-element"+(parseInt(j)+9)).css("background-color","rgb(255, 0, 0)");
                tempId=i;
            }
            if(l==1){
                blackCount=0;
                whiteCount++;
            }
        }
    }else if(k=="white" && whiteCount>0){
        if(pawnCount[parseInt(i)-9]==0){
            if($("#div-element"+(parseInt(j)-10)).children().length==0){
                $("#div-element"+j).css("background-color","rgb(0, 96, 0)");
                $("#div-element"+(parseInt(j)-10)).css("background-color","rgb(0, 128, 0)");
                if($("#div-element"+(parseInt(j)-20)).children().length==0){
                    $("#div-element"+(parseInt(j)-20)).css("background-color","rgb(0, 128, 0)");
                }
            }
            if(l==1){
                blackCount++;
                whiteCount=0;
                increDivId(i);
            }
            if($("#div-element"+(parseInt(j)-9)).children().length==1 && $("#div-element"+(parseInt(j)-9)).children().attr('class')=="black"){
                $("#div-element"+(parseInt(j)-9)).css("background-color","rgb(255, 0, 0)");
                tempId=i;
            }
            if($("#div-element"+(parseInt(j)-11)).children().length==1 && $("#div-element"+(parseInt(j)-11)).children().attr('class')=="black"){
                $("#div-element"+(parseInt(j)-11)).css("background-color","rgb(255, 0, 0)");
                tempId=i;
            }
        }else{
            if($("#div-element"+(parseInt(j)-10)).children().length==0){
                $("#div-element"+j).css("background-color","rgb(0, 96, 0)");
                $("#div-element"+(parseInt(j)-10)).css("background-color","rgb(0, 128, 0)");
            }
            if($("#div-element"+(parseInt(j)-9)).children().length==1 && $("#div-element"+(parseInt(j)-9)).children().attr('class')=="black"){
                $("#div-element"+(parseInt(j)-9)).css("background-color","rgb(255, 0, 0)");
                tempId=i;
            }
            if($("#div-element"+(parseInt(j)-11)).children().length==1 && $("#div-element"+(parseInt(j)-11)).children().attr('class')=="black"){
                $("#div-element"+(parseInt(j)-11)).css("background-color","rgb(255, 0, 0)");
                tempId=i;
            }
            if(l==1){
                blackCount++;
                whiteCount=0;
            }
        }
    }
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