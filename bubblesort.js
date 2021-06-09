

function bubbleSort() {
    c_delay = 0;
    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - i - 1; j++) {
            
            if (heights[j] > heights[j+1]) {
                
				var temp  =  heights[j];
				heights[j] = heights[j+1];
				heights[j+1] = temp;
				
			    update_height(arr[j],heights[j],n);
				update_height(arr[j+1],heights[j+1],20);
            
			}


        }
    }
}
 