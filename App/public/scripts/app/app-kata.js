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

var secondChop = function(arr, num, left, right) {
  left = left === undefined ? 0 : left;
  right = right === undefined ? arr.length : right;
  var mid = Math.floor(left/2 + right/2);
  if(left > right || arr.length === 0) {
    return -1;
  } else if(arr.length === 1 || left === right) {
    return arr[0] === num ? 0 : -1;
  } else if(arr[mid] === num) {
    return mid;
  } else if(arr[mid] > num) {
    return secondChop(arr, num, left, mid-1);
  } else if(arr[mid] < num) {
    return secondChop(arr, num, mid+1, right);
  }
  return -1;
};

