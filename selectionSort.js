var values = [];
var total = 800;
var i = 0;
var j = 0;
var min_in = 0;

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

    min_in = i;
    // Finding the minimum element in unsorted array
    for(j = i+1; j < total; j++) {
        if(values[j] < values[min_in])
            min_in = j;
    }
    //swapping the minimum with current starting
    swap(values, min_in ,i);

    
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

