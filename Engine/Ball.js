function Ball(){
    this.Jump=function () {
        var oBall=document.querySelector("#ball_div");
        oBall.addEventListener("click",this.Jump);
        this.Jump=function(oEvent) {

        };
        oBall.left=100+'px';
        //object.left=100+'px';
        };
}
new Ball();
