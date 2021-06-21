
//accessing html elements------------------------------------------------------------------

var win = document.getElementById("win");
var sl = document.getElementById("slider");
var sortBtn = document.getElementById('sortBtn');
var dropBtn = document.getElementById('dropBtn');
var algo1 = document.getElementById('a1');
var algo2 = document.getElementById('a2');
var algo3 = document.getElementById('a3');
document.body.style.backgroundColor =  "black";

//getting size of array from slider and then adjusting the width of bars accordingly----------------------------------------------------------------------------

var n = sl.defaultValue;
var winWidth = screen.width - 100;
var w = (winWidth - 4 * n) / n;
var arr = [];
var heights=[];
resetArr(n);
sl.addEventListener("input", function () {
	console.log("inside slider event listener");
    n = sl.value;

    winWidth = 1220 - 62;
    w = Math.floor(8 * (winWidth) / (13 * n));
    w = w + (winWidth - n * w) / (20 * n);
    resetArr(n);
	
    // console.log(winWidth);
    // console.log(n);
    // console.log(w);  
});

//resetting the array -------------------------------------------------------------------------------------------------------------

function resetArr(n) {
 
    arr = [];
	heights = [];
    win.innerHTML = '';
    for (let i = 0; i < n; ++i) {
        var rand = (Math.floor(Math.random() * 500) + 1);
        var b = document.createElement('div');
        b.className = "bar";
        b.style.height = rand + "px";
        b.style.width = w + 'px';
		heights[i]= rand;
        arr.push(b);
        win.appendChild(arr[i]);
        var color;
        arr[i].addEventListener("mouseover", function () {
            color = this.style.backgroundColor;
            this.style.backgroundColor = "#ffbb00"
        })
        arr[i].addEventListener("mouseout", function () {

            this.style.backgroundColor = color;

        })
         console.log("h=" + heights[i]);

    }
}
var delay_time =100;
//choosing algorithm for sorting-------------------------------------------------------------
var algo = 1;
algo1.addEventListener("click", function () {
    algo = 1;
    dropBtn.innerHTML = "Bubble Sort";

});
algo2.addEventListener("click", function () {
    algo = 2;
    dropBtn.innerHTML = "Merge Sort";
});
algo3.addEventListener("click", function () {
    algo = 3;
    dropBtn.innerHTML = "Quick Sort";
});

//handling button click----------------------------------------------------------------------
 var z=0;
sortBtn.addEventListener("click", function () {
	//console.log("inside sort btn event listener");
    if (arr.length < 1)
        resetArr(n);
    if (algo == 1) {
		
        bubbleSort();
    }
      else if (algo == 2) {

         mergeSort(0, n-1);
 
      }
    else { quicksort(0, n - 1); }
});

//--------------------------------------------------------------------------------------