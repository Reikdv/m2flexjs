const game_start=0;
const gamestate_ingame=1;
const gamestate_gameover=2;

const ingamestate_start=0;
const ingamestate_roll=1;
const ingamestate_end=0;

let canvas = document.getElementById("canvas");
let g = canvas.getContext("2d");

let boardpositionsize=50;
let pawnpositions= [];
let boardpositions= [];
let playeramountbuttons= [];

function createBoardPositions()
{
    let x= 0;
    let y = canvas.height-boardpositionsize;
    let path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1] ;

    for(let i =0 ; i<path.length;i++)
    {

        if(path[i] == 1)//gaan naar rechts
        {
            //bedenk hier wat je met de x moet doen
            x+=boardpositionsize
        }
        else if(path[i] == 3)//gaan naar links
        {
            // bedenk hier wat je met de x moet doen
            x-=boardpositionsize
        }
        else if(path[i] == 0)//gaan hier naar boven
        {
            //bedenk hier wat je met de y moet doen
            y-=boardpositionsize
        }
        boardpositions.push(createRect(x,y,boardpositionsize,boardpositionsize));
    }
} 

function draw()
{
    clearCanvas();
    for(let i =0 ; i<boardpositions.length;i++)
    {
        let pos = boardpositions[i];

        g.fillStyle  = "#004400";
        g.fillRect(pos.x,pos.y,boardpositionsize,boardpositionsize);
        g.fillStyle  = "#FFFFFF";
        g.fillText((i+1)+"",pos.x,pos.y+20);
    }
}

function clearCanvas()
{
    g.fillstyle = "cadetblue"
    g.fillRect(0,0, canvas.width, canvas.height );
}

function createRect(x,y,w,h)
{
    let rectangle = {
        x:x,
        y:y,
        x2:x+w,
        y2:y+h,
        w:w,
        h:h,
    };
    return rectangle;
}

createBoardPositions();
draw();