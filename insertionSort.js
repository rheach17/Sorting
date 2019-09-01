var values = [];
var total = 800;
var i = 0;
var j = 0;
var key = 0;

function setup() {
    createCanvas(800, 800);
    for( i = 0; i < total; i++){
    
        values[i] = random(height); 
        
    }  
    i = 0;
}


function draw() {
    background(0);

    key = values[i];
    j = i - 1;
	
	// Moving elements of array that are greater than key, to position ahead of the current position
    while (j >= 0 && values[j] > key) {
        values[j + 1] = values[j];
        j = j - 1;
    }
    values[j + 1] = key;
    
    
    if(i == total) {
        console.log("finished");
        noLoop();
    }
    i++; 
    

    for(var n = 0; n < values.length; n++) {
        stroke(225);
        line(n, height, n, height - values[n]);
    }
}

