var values = [];
//var arr = [];
var total = 800;
var i = 0;
var j = 0;

function setup() {
    createCanvas(800, 800);
    for( i = 0; i < total; i++){
    
        values[i] = random(height); 
        
    }  
    i = 0;

}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}

function draw() {
    background(0);
    
    
    if(i < total) { 
        for(j = 0; j < total-i-1; j++) {
            
            var a = values[j];
            var b = values[j + 1];
            
            if(a > b) {
                swap(values, j, j + 1);
            }
        }
        

    }
    else {
        console.log("finished");
        noLoop();
    }
    i++; 
    

    for(var n = 0; n < values.length; n++) {
        
        stroke(225);
        line(n, height, n, height - values[n]);
        
    }
}

