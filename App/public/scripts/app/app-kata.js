var firstChop = function(arr, num){
  return arr.indexOf(num);
};

var secondChop = function(arr, num){
  for(var i = 0; i < arr.length; i+=1){
    if(arr[i] === num){
      return i;
    }
  }
  return -1;
};
