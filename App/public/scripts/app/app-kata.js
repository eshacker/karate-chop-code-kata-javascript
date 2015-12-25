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
  var l = left === undefined ? 0 : left;
  var r = right === undefined ? arr.length : right;
  var mid = Math.floor(l/2 + r/2);
  if(l > r || arr.length === 0) {
    return -1;
  } else if(arr.length === 1 || l === r) {
    return arr[0] === num ? 0 : -1;
  } else if(arr[mid] === num) {
    return mid;
  } else if(arr[mid] > num) {
    return secondChop(arr, num, l, mid-1);
  } else if(arr[mid] < num) {
    return secondChop(arr, num, mid+1, r);
  }
  return -1;
};

var thirdChop = function(arr, num) {
  var l = 0;
  var r = arr.length;
  var m = Math.floor(l/2 + r/2);
  console.log(arr, num);
  if(l > r || r === 0) {
    return -1;
  } else if(r === 1 && l === r){
    return arr[0] === num ? 0 : -1;
  } else if(arr[m] === num){
    return m;
  } else if(arr[m] > num) {
    return thirdChop(arr.slice(l, m), num);
  } else if(arr[m] < num) {
    return thirdChop(arr.slice(m+1, r), num);
  }
  return -1;
};