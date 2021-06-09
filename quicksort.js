
function partition(left, right) {
    var pivot = heights[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (heights[i] < pivot) {
            i++;
        }
        while (heights[j] > pivot) {
            j--;
        }
        if (i <= j) {
			var temp = heights[i];
			heights[i] = heights[j];
			heights[j] =temp;
			update_height(arr[i],heights[i],2);
			update_height(arr[j],heights[j],2);
          
            i++;
            j--;
        }
    }
    return i;
}



function quicksort(l,r){
	c_delay =0;
	quickSort(l,r);
}



function quickSort(left, right) {
	
    if (left == right) return;

    var index = partition(left, right);
    if (left < index - 1) {
        quickSort(left, index - 1);
    }
    if (index < right) {
        quickSort(index, right);
    }

}