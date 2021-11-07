function _(selector){
    return document.querySelector(selector);
}
function setup(){
    let canvas = createCanvas(2000,2000);
    canvas.parent("canvas-wrapper");
    background(255);
}
function mouseDragged(){
    let type = _("#pencil").checked ? "pencil" : "brush";
    let size  = parseInt(_("#pen-size").value);
    let color = _("#pen-color").value;
    fill(color);
    strokeWeight(size);
    stroke(color);
    if(type=="pencil")
        line(pmouseX, pmouseY, mouseX, mouseY);
    else if(type=="brush")
        ellipse(mouseX,mouseY,size,size);
    else
        erase(255,255);
}
window.addEventListener('load', function () {
_("#reset-canvas").addEventListener("click",
    function(){
        background(255);
    }
);

_("#save-canvas").addEventListener("click",
    function(){
        saveCanvas(canvas,"sketch","png");
    }
);
})