var firstChop = function(arr, num) {
  var i = 0, left = 0, right = arr.length, mid = 0;
  while(left < right) {
    mid = Math.floor((left+right)/2);
    if(arr[mid] === num) {
      return mid;
    } else if(arr[mid] > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if(arr[left] === num){
    return left;
  } else {
    return -1;
  }
};

var secondChop = function(arr, num) {
  for(var i = 0; i < arr.length; i+=1){
    if(arr[i] === num){
      return i;
    }
  }
  return -1;
};

