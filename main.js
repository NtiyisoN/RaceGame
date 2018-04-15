
// remove/generetic/5 blocks/sizeBlock
function map(canvas,$) // конструктор карты
{
    var arrayBlocks = [];
    var startBlocksLength = 1000; // начальная позиция блока(за холстом)
    var x = 50,y = 500,
        dx = 100; // приращение(размер блока)
    /*var img = new Image();
    img.src = 'трава_1.jpg';
    img.onload = function () {
        $.fillStyle = $.createPattern(img, 'repeat');
    }*/

    function createBlock(name,x){
        this.name = name;
        this.x = x;
        return this;
    }
    function addBlock(name){ arrayBlocks.push(new createBlock(name,100)); }
    //function addEmptyBlock(){ arrayBlocks.push(new createBlock("emptyBlock")); }
    function removeBlock(){ arrayBlocks.shift();}
    function drawBlock(name,x,y,number){
        switch (name)
        {
            case "emptyBlock": {
                $.beginPath();
                $.fillStyle = "#5ab2ee";
                $.fillRect(x + startBlocksLength - number,y + 80,200,20);
                $.closePath();
            };break;
            case "groundBlock": {
                $.beginPath();
                $.fillStyle = "#7CFC00";
                $.fillRect(x + startBlocksLength - number,y + 80,200,20);
                $.closePath();
            };break;
            case "platformBlock": {
                $.beginPath();
                $.fillStyle = "#5ab2ee";
                $.fillRect(x + startBlocksLength - number,y + 80,200,20);
                $.fillStyle = "#FF8F31";
                $.strokeStyle = "#FF8F31";
                $.lineWidth = 25;
                $.lineJoin = 'round';
                $.moveTo(x + 50 + startBlocksLength - number,y - 50);
                $.lineTo(x + 50 + startBlocksLength - number,y - 15);
                $.lineTo(x + 150 + startBlocksLength - number,y - 15);
                $.lineTo(x + 150 + startBlocksLength - number,y - 50);
                $.lineTo(x + 50 + startBlocksLength - number,y - 50);
                $.stroke();
                $.fill();
                $.closePath();
            };break;
            case "platfomBlockInGround":{
                $.beginPath();
                $.fillStyle = "#7CFC00";
                $.fillRect(x + startBlocksLength - number,y + 80,200,20);
                $.fillStyle = "#FF8F31";
                $.strokeStyle = "#FF8F31";
                $.lineWidth = 25;
                $.lineJoin = 'round';
                $.moveTo(x + 50 + startBlocksLength - number,y - 50);
                $.lineTo(x + 50 + startBlocksLength - number,y - 15);
                $.lineTo(x + 150 + startBlocksLength - number,y - 15);
                $.lineTo(x + 150 + startBlocksLength - number,y - 50);
                $.lineTo(x + 50 + startBlocksLength - number,y - 50);
                $.stroke();
                $.fill();
                $.closePath();
            };break;
            case "hillBlock":{
                $.beginPath();
                $.fillStyle = "#7CFC00";
                $.moveTo(x + startBlocksLength - number,y+80);
                $.lineTo(x + 200 + startBlocksLength - number,y + 80);
                $.quadraticCurveTo(x + 100 + startBlocksLength - number,y - 200,x + startBlocksLength - number,y+80);
                $.fill();
                $.closePath();
            }break;
        }
    }
    // обновление координат блоков
    function updateBlocks(){
        arrayBlocks.forEach(function (t, number) {
            t.x = x + startBlocksLength - number;
        });
    }
    // удаление блоков у которых координата за холстом
    function removeFalseBlocks() {if(arrayBlocks[0].x < 100) this.removeBlock();}
    function drawBlocks(){
        $.clearRect(0,0,canvas.width,canvas.height);
        arrayBlocks.forEach(function (t, number) {
            drawBlock(t.name,x + number * dx,y,number);
        });
        x -= 0.5;
    }
    // генерация карты
    function generetic() {
        //if (arrayBlocks[arrayBlocks.length - 1].name == "emptyBlock") addBlock("");
        //((Math.round(Math.random()* 10))%5 == 0) ? addBlock("") : addEmptyBlock();

        /*var array = [{num:1,good:true},{num:2,good:true},{num:3,good:true},
            {num:4,good:true},{num:5,good:true}]
        var good = ;

        array.forEach(function (t) { if(t.good == true) good = true;})*/

        switch((Math.round(Math.random()* 10))%5)
        {
            case 1:{addBlock("emptyBlock");}break;
            case 2:addBlock("groundBlock");break;
            case 3:addBlock("platformBlock");break;
            case 4:addBlock("platfomBlockInGround");break;
            case 5:addBlock("hillBlock");break;
        }
    }

    // запуск
    this.run = function()
    {
        setInterval(generetic,50);
        //setInterval(removeFalseBlocks,2);
        setInterval(updateBlocks,10);
        setInterval(drawBlocks,10);
    }

    return this;
}

function main() {
    var canvas = document.getElementById("idCanvas");
    var $ = canvas.getContext("2d");

    var myMap = new map(canvas,$);
    myMap.run();

    //var x = 100,y = 100;

    /*
     $.beginPath();
     $.fillStyle = "#7CFC00";
     $.fillRect(x,y + 80,200,20);
     $.closePath();
     */
    /*
    $.beginPath();
    $.fillStyle = "#FFFFFF";
    $.fillRect(x,y + 80,200,20);
    $.closePath();*/
    /*$.beginPath();
    $.fillStyle = "#FFFFFF";
    $.fillRect(x,y + 80,200,20);
    $.fillStyle = "#FF8F31";
    $.strokeStyle = "#FF8F31";
    $.lineWidth = 25;
    $.lineJoin = 'round';
    $.moveTo(x + 50,y - 50);
    $.lineTo(x + 50,y - 15);
    $.lineTo(x + 150,y - 15);
    $.lineTo(x + 150,y - 50);
    $.lineTo(x + 50,y - 50);
    $.stroke();
    $.fill();
    $.closePath();*/
    /*$.beginPath();
    $.fillStyle = "#7CFC00";
    $.fillRect(x,y + 80,200,20);
    $.fillStyle = "#FF8F31";
    $.strokeStyle = "#FF8F31";
    $.lineWidth = 25;
    $.lineJoin = 'round';
    $.moveTo(x + 50,y - 50);
    $.lineTo(x + 50,y - 15);
    $.lineTo(x + 150,y - 15);
    $.lineTo(x + 150,y - 50);
    $.lineTo(x + 50,y - 50);
    $.stroke();
    $.fill();
    $.closePath();*/
    /*$.beginPath();
    $.fillStyle = "#7CFC00";
    $.moveTo(x,y+80);
    $.lineTo(x + 200,y + 80);
    $.quadraticCurveTo(x + 100,y - 200,x,y+80);
    $.fill();
    $.closePath();*/

/*
    var arrayBlocks = [];
    var startBlocksLength = 1000,emptyBlocksLength = 100;
    var x = 50,y = 500,dx = 100;

    function createBlock(name,x){
        this.name = name;
        this.x = x;
        return this;
    }
    function addBlock(name){ arrayBlocks.push(new createBlock(name,100)); }
    function addEmptyBlock(){ arrayBlocks.push(new createBlock("emptyBlock")); }
    function removeBlock(){ arrayBlocks.shift();}
    function drawBlock(name,x,y,number){
        if (name == "emptyBlock") x + emptyBlocksLength - number;
        else
        {
            $.beginPath();
            $.fillRect(x + startBlocksLength - number,y,100,100);
            $.closePath();
        }
    }
    function updateBlocks(){
        arrayBlocks.forEach(function (t, number) {
           t.x = x + startBlocksLength - number;
        });
    }
    function removeFalseBlocks() {if(arrayBlocks[0].x < 100) removeBlock();}
    function drawBlocks(){
        $.clearRect(0,0,canvas.width,canvas.height);
        arrayBlocks.forEach(function (t, number) {
            drawBlock(t.name,x + number * dx,y,number);
        });
        x -= 0.5;
    }


    addBlock("bl1");
    addBlock("bl2");
    addEmptyBlock();
    addBlock("b3");
  //  removeBlock();
//    removeBlock();
    //drawBlocks();
    //setInterval(removeFalseBlocks,2);
    setInterval(updateBlocks,10);
    setInterval(drawBlocks,10);
    console.log(arrayBlocks);
    */
}








    /*function drawPoint(X,Y)
    {
        $.beginPath();
        $.arc(X,Y,1,0,Math.PI * 2,false);
        $.fill();
        $.closePath();
    }*/

   /* var flStartDraw = false;
    var x1 = 0,y1 = 0,x2 = 0,y2 = 0;

    function mouseMoveHandler(e)
    {
        if (x1 == 0) x1 = e.clientX - canvas.offsetLeft, y1= e.clientY;
        if (x2 == 0) x2 = e.clientX - canvas.offsetLeft, y2= e.clientY;
        if(x1 != 0 && x2 != 0)
        {
            $.beginPath();
            $.lineTo(x1,y1);
            $.moveTo(x2,y2);
            $.stroke();
            $.closePath();
            x1 = x2;
            x2 = 0;
        }
    }

    function mouseDownHandler() {flStartDraw = true; console.log("startDraw");}
    function mouseUpHandler() {flStartDraw = false; console.log("stopDraw");}

    document.addEventListener("mousemove",mouseMoveHandler,false);
    document.addEventListener("mouseup",mouseUpHandler,false);
    document.addEventListener("mousedown",mouseDownHandler,false);*/





/*function calc(expr) {
    var array = expr.length > 0 ? expr.split(' ') : [];
    var array_op = ['/','*','+','-'];
    var current_op = '';
    var current_operand = 0;
    var current_rezult = 0;

    for (var i = 0;i < array.length;i++)
    {
        var fl = false;
        for (var j = 0;j < array_op.length;j++) if(array[i] == array_op[j]) fl = true;
        if(fl)current_op = array[i];
        else current_operand = array[i];
        if (current_op == '' && current_rezult == 0) current_rezult = current_operand;
        if (current_op != '')
        {
         switch (current_op)
         {
             case '+': current_rezult = +current_rezult + +current_operand;break;
             case '-': current_rezult = +current_rezult - +current_operand;break;
         }
        }
    }
    return current_rezult;
}

//calc("1 2 +");

function main() {
    var q = prompt("!");
    document.write(calc(q));
}*/