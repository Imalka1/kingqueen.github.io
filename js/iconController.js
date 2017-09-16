/**
 * Created by Imalka Gunawardana on 9/1/2017.
 */
var element = {
    getElement: function (elementCount, elementClass) {
        return $("<div>", {id: "image-element" + (elementCount)});
    },
    setElement: function (elementCount, i) {
        $("#image-element" + (elementCount)).css("position", "absolute");

        $("#image-element" + (elementCount)).css("z-index", "1");
        $("#image-element" + (elementCount)).css("background-repeat", "no-repeat");
        $("#image-element" + (elementCount)).css("top", "4px");
        $("#image-element" + (elementCount)).css("left", "4px");
        $("#image-element" + (elementCount)).addClass(i);
        //$("#image-element"+(elementCount)).css("draggable","true");
        //$("#image-element"+(elementCount)).css("ondragstart",drag(event));
    },
    setSize: function (elementCount, size, i) {
        $("#image-element" + (elementCount)).css("background-size", i + " " + i);
        $("#image-element" + (elementCount)).css("width", size);
        $("#image-element" + (elementCount)).css("height", size);
    },
    setImage: function (elementCount, url) {
        $("#image-element" + (elementCount)).css("background-image", url);
    }
}

var count = 0;
var countWhitePiece = 0;
var countBlackPiece = 48;
count++;
countWhitePiece++;
$("#div-element11").append(element.getElement(count));
element.setImage(count, "url('images/Rook-black_256x256_32.png')");
element.setElement(count, "black");
count++;
countWhitePiece++;
$("#div-element12").append(element.getElement(count));
element.setImage(count, "url('images/chessknight.png')");
element.setElement(count, "black");
count++;
countWhitePiece++;
$("#div-element13").append(element.getElement(count));
element.setImage(count, "url('images/Bishop-black_256x256_32.png')");
element.setElement(count, "black");
count++;
countWhitePiece++;
$("#div-element14").append(element.getElement(count));
element.setImage(count, "url('images/7583-256x256x32.png')");
element.setElement(count, "black");
count++;
countWhitePiece++;
$("#div-element15").append(element.getElement(count));
element.setImage(count, "url('images/chess_PNG8421.png')");
element.setElement(count, "black");
count++;
countWhitePiece++;
$("#div-element16").append(element.getElement(count));
element.setImage(count, "url('images/Bishop-black_256x256_32.png')");
element.setElement(count, "black");
count++;
countWhitePiece++;
$("#div-element17").append(element.getElement(count));
element.setImage(count, "url('images/chessknight.png')");
element.setElement(count, "black");
count++;
countWhitePiece++;
$("#div-element18").append(element.getElement(count));
element.setImage(count, "url('images/Rook-black_256x256_32.png')");
element.setElement(count, "black");
for (var j = 1; j <= 8; j++) {
    count++;
    $("#div-element2" + j).append(element.getElement(count));
    element.setImage(count, "url('images/chess_PNG8422.png')");
    element.setElement(count, "black");
}
for (var j = 1; j <= 8; j++) {
    count++;
    $("#div-element7" + j).append(element.getElement(count));
    element.setImage(count, "url('images/Pawn-white_256x256_32.png')");
    element.setElement(count, "white");
}
count++;
countBlackPiece++;
$("#div-element81").append(element.getElement(count));
element.setImage(count, "url('images/Rook-white_256x256_32.png')");
element.setElement(count, "white");
count++;
countBlackPiece++;
$("#div-element82").append(element.getElement(count));
element.setImage(count, "url('images/Knight-white_256x256_32.png')");
element.setElement(count, "white");
count++;
countBlackPiece++;
$("#div-element83").append(element.getElement(count));
element.setImage(count, "url('images/7576-256x256x32.png')");
element.setElement(count, "white");
count++;
countBlackPiece++;
$("#div-element84").append(element.getElement(count));
element.setImage(count, "url('images/Queen-white_256x256_32.png')");
element.setElement(count, "white");
count++;
countBlackPiece++;
$("#div-element85").append(element.getElement(count));
element.setImage(count, "url('images/King-white.ico')");
element.setElement(count, "white");
count++;
countBlackPiece++;
$("#div-element86").append(element.getElement(count));
element.setImage(count, "url('images/7576-256x256x32.png')");
element.setElement(count, "white");
count++;
countBlackPiece++;
$("#div-element87").append(element.getElement(count));
element.setImage(count, "url('images/Knight-white_256x256_32.png')");
element.setElement(count, "white");
count++;
countBlackPiece++;
$("#div-element88").append(element.getElement(count));
element.setImage(count, "url('images/Rook-white_256x256_32.png')");
element.setElement(count, "white");