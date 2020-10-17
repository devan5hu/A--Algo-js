//variables
var cols =5 ;
var rows =5 ;
var grid  =new Array(cols);
var w,h;
var open=[],close=[],start,end;
function removeFromArray(arr,key){
    for(var i = arr.length-1 ; i >= 0 ; i--){
        if(arr[i]==key){
            arr.splice(i,1);
        }
    }
}
    
    function Spot(i,j){
        this.i=i;
        this.j=j;
        this.f=0;
        this.g=0; 
        this.h=0; 
        this.neighbours =[ ];


        this.show= function(col){
            fill(col);
            noStroke();
            rect(this.i*w,this.j*h,w-1,h-1);
        }


        // this.addneighbors = function(grid){
        //     this.i=i;this.j=j;
        //     if( i <cols -1){
        //     this.neighbours.push(grid[this.i+1][j]);
        //     }
        //     if(i > 0){
        //     this.neighbours.push(grid[this.i-1][j]);
        //     }
        //     if(j < rows - 1){
        //     this.neighbours.push(grid[this.i][j+1]);
        //     }
        //     if(j > 0 ){
        //     this.neighbours.push(grid[this.i][j-1]);
        //     }
        // }
    
    

}
function setup(){
    
    createCanvas(400,400 );
    console.log('A*');
    //2d array
    for(var i = 0 ; i < cols ; i ++ ){
        grid[i]= new Array(rows);
    }

    for(var i = 0 ; i < cols ; i ++ ){
        for(var j = 0 ; j < rows ; j ++ ){
                grid[i][j]= new Spot(i,j);
        }
    }

    // for(var i = 0 ; i < cols ; i ++ ){
    //     for(var j = 0 ; j < rows ; j ++ ){
    //             grid[i][j].addneighbors(grid);
    //     }
    // }


    start=grid[0][0];
    end = grid[cols-1][rows - 1];     //defined start and end
    w=width/cols;
    h=height/rows;
    
    
    open.push(start);               //error??
    console.log(grid);
}
function draw(){
    if(open.length>0){
        var winner = 0;
        for(var i =0 ; i< open.length ; i++){           //implement
            if(open[i].f < open[winner].f){
                winner = i;
            }
        }
        var current = open[winner];

        if(current= end){
            console.log("done!");
        }
        removeFromArray(open, current);
        open.push(current);
    }
    
    else {
                        //not solvable
    }


    for(var i = 0 ; i < cols ; i ++ ){
        for(var j = 0 ; j < rows ; j ++ ){
                grid[i][j].show(color(255));
            }
        }
        background(0);
        for(var i = 0 ; i < open.length ; i++ ){
            open[i].show(color(0,255,0));
        }
        for(var i = 0 ; i < close.length ; i++ ){
            close[i].show(color(0,0,255));
        }
        

}



