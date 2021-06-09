function mergeSort(s,e){
	 c_delay =0;
	 Sort(s, e);
}
function  Sort(s, e) {
    if (s >= e) {
        return;
    }
    var m = Math.floor((s + e) / 2);
     Sort(s, m);
     Sort(m + 1, e);
    merge(s, m, e);
}
function merge(s, m, e) {
    var la = [];
    var ra = [];
    var nu = [];
    for (var i = s; i < m + 1; ++i) {
        la.push(heights[i]);
    }
    for (var i = m + 1; i < e + 1; ++i) {
        ra.push(heights[i]);
    }
    var i = 0;
    var j = 0;
    var k = s;
    while (i < la.length && j < ra.length && k < e + 1) {
        if (la[i] < ra[j]) {
            nu.push(la[i]);
            ++i;
        }
        else {
            nu.push((ra[j]));
            ++j;
        }
    }
    while (i < la.length) {
        nu.push((la[i]));
        ++i;
    }
    while (j < ra.length) {
        nu.push((ra[j]));
        ++j;
    }
    for (let q = 0; q < nu.length; ++q) {
        heights[s++] = nu[q] ;
		update_height(arr[s-1],heights[s-1],2 );
    }
} 