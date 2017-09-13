/**
 * Created by Imalka Gunawardana on 9/8/2017.
 */
//-------------------------------------------------------Media Queries--------------------------------------------------
function setMediaSize(outerPanelSize,boardSize,elementSize,pos1,pos2,imgSize) {
    setOuterPanel(outerPanelSize);
    elementBoard.setSize(boardSize,elementSize);
    for(var i=0;i<8;i++) {
        for (var j = 0; j < 8; j++) {
            elementPieces.setSize(i,j,elementSize);
        }
    }
    for(var j=0;j<10;j++){
        elementOuterPieces.setSize(1,j,elementSize,divOuterLeft[j],pos1);
        elementOuterPieces.setSize(2,j,elementSize,divOuterLeft[j],pos2);
        elementOuterPieces.setSize(3,j,elementSize,pos1,divOuterTop[j]);
        elementOuterPieces.setSize(4,j,elementSize,pos2,divOuterTop[j]);
    }
    for(var i=1;i<=32;i++){
        element.setSize(i,elementSize,imgSize);
    }
    for(var i=1;i<=2;i++){
        for(var j=0;j<8;j++){
            $("#div-holdPanel"+i).append(elementHold.getElement(i,(j+1)));
            elementHold.setElement(i,(j+1));
            if(i==1){
                elementHold.setSize(i,(j+1),"87.5px",divPos[j],divPos[0]);
            }else{
                elementHold.setSize(i,(j+1),"87.5px",divPos[j],divPos[1]);
            }

        }
        for(var j=8;j<16;j++){
            $("#div-holdPanel"+i).append(elementHold.getElement(i,(j+1)));
            elementHold.setElement(i,(j+1));
            if(i==1){
                elementHold.setSize(i,(j+1),"87.5px",divPos[j-8],divPos[1]);
            }else{
                elementHold.setSize(i,(j+1),"87.5px",divPos[j-8],divPos[0]);
            }
        }
    }
}

function mediaSize() {
    if(window.matchMedia("(min-width: 720px)").matches) {
        divPos = [0, 87.5, 175, 262.5, 350, 437.5, 525, 612.5];
        divOuterTop = [87.5, 175, 262.5, 350, 437.5, 525, 612.5, 700];
        divOuterLeft = [0, 87.5, 175, 262.5, 350, 437.5, 525, 612.5, 700, 787.5];
        setMediaSize("875px", "700px", "87.5px", divOuterLeft[0], divOuterLeft[9], "80px");
        setElementHoldPanel(1, "250px", "0px", "174px", "700px", divPos[1], 162.5, "Black");
        setElementHoldPanel(2, "250px", "1300px", "174px", "700px", divPos[1], 162.5, "White");
        setTextSize("60px");
        setFooter("1100px");
    }else if(window.matchMedia("(min-width: 620px)").matches){
        divPos=[0,75,150,225,300,375,450,525];
        divOuterTop=[75,150,225,300,375,450,525,600];
        divOuterLeft=[0,75,150,225,300,375,450,525,600,675];
        setMediaSize("475px","300px","75px",divOuterLeft[0],divOuterLeft[9],"67.5px");
        setTextSize("30px");
    }else if(window.matchMedia("(min-width: 520px)").matches){
        divPos=[0,62.5,69,103.5,138,172.5,207,241.5];
        divOuterTop=[34.5,69,103.5,138,172.5,207,241.5,276];
        divOuterLeft=[0,34.5,69,103.5,138,172.5,207,241.5,276,310.5];
        setMediaSize("276px","100px","34.5px",divOuterLeft[0],divOuterLeft[9],"27px");
    }else if(window.matchMedia("(min-width: 420px)").matches){

    }else if(window.matchMedia("(min-width: 320px)").matches){

    }else if(window.matchMedia("(min-width: 220px)").matches){

    }
}
mediaSize();
window.addEventListener('resize',mediaSize);
