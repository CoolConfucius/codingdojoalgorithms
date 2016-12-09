function subsets(string){
  // var array = [''];
  return helper([], '', string);
}

function helper(array, char, remain){
  array.push(char);
  array.push(remain); 

  if (remain.length == 1) {
    return array; 
  }; 
  var char = remain[0];
  var remain = remain.substring(1);
  console.log(remain);
  var next = helper([], char, remain);
  array.push(char+next[next.length - 1]);
  return array.concat(next);
}

// console.log(subsets("abc"));
console.log(subsets("abcd"));