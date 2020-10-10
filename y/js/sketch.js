var cols =5 ;
var rows =5 ;
var grid  =new Array(cols);
function Spot(){
    this.f=0;
    this.x=0; 
    this.y=0; 
}
function setup( ){
    createCanvas(500,500 );
    console.log('A*');
    for(var x = 0 ; x < cols ; x ++ ){
        grid[ x]= new Array(rows);
    }
    for(var x = 0 ; x < cols ; x ++ ){
    for(var y = 0 ; y < cols ; y ++ ){
            grid[x][y]= new Spot();
        }
    }
    
    console.log(grid);
}
function draw(){
    background(220);
}


