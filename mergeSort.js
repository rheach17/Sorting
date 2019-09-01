var values = [];
var total = 800;
var i = 0;
var j = 0;
var k = 0;
var cur = 1;
var left = 0;


function setup() {
    createCanvas(800, 800);
    for( i = 0; i < total; i++){
    
        values[i] = random(height); 
        
    }  
    i = 0;
  
}



function draw() {
    background(0);

     for (left = 0; left < total-1; left = left + 2*cur) {
        // Find ending point of left subarray. mid+1 is starting point of right
        var mid = min(left + cur - 1, total-1);

        var right_end = min(left + 2*cur - 1, total-1);

        // Merge Subarrays arr[left_start...mid] & arr[mid+1...right_end] 
        merge(values, left, mid, right_end); 
     } 
    //loop to end after current has reached total
    if(cur >= total) {
        console.log("finished");
        noLoop();
    }
    cur = cur*2; 
    

    for(var n = 0; n < values.length; n++) {
        
        stroke(225);
        line(n, height, n, height - values[n]);
        
    }
    sleep(500);
}

function merge(arr, l, m, r) { 

    var n1 = m - l + 1; 
    var n2 =  r - m; 
  
    // create temp arrays 
    var L = [];
    var R = []; 
  
    // Copy data to temp arrays L[] and R[] 
    for (i = 0; i < n1; i++) 
        L[i] = arr[l + i]; 
    for (j = 0; j < n2; j++) 
        R[j] = arr[m + 1+ j]; 
  
    // Merge the temp arrays back into arr[l..r]
    i = 0; 
    j = 0; 
    k = l; 
    while (i < n1 & j < n2) 
    { 
        if (L[i] <= R[j]) 
        { 
            arr[k] = L[i]; 
            i++; 
        } 
        else
        { 
            arr[k] = R[j]; 
            j++; 
        } 
        k++; 
    } 
  
    // Copy the remaining elements of arrays
    while (i < n1) 
    { 
        arr[k] = L[i]; 
        i++; 
        k++; 
    } 
  
    while (j < n2) 
    { 
        arr[k] = R[j]; 
        j++; 
        k++; 
    } 
}

// Creating a time delay
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}