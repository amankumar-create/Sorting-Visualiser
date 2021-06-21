function sleep(milisec) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('')
    }, milisec);
  })
}
async function bubbleSort() {
     
    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - i - 1; j++) {
            
            arr[j].style.backgroundColor = "#F3FF58 ";
            arr[j+1].style.backgroundColor = "#F3FF58 ";

            if (heights[j] > heights[j + 1]) {
                await sleep(2);
                var temp = heights[j];
                heights[j] = heights[j + 1];
                heights[j + 1] = temp;
                
                update_height(arr[j], heights[j]);
                update_height(arr[j + 1], heights[j + 1]);
                await sleep(2);

            }
            arr[j].style.backgroundColor = "#8aff14 ";
            arr[j+1].style.backgroundColor = "#8aff14 ";
           
        }
          
    }
   
}
