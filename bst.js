function bst(){
  this.root = null; 
}

function btnode(val){
  this.val = val; 
  this.left = null; 
  this.right = null; 
}

bst.prototype.add = function(val){
  if (!this.root) {
    this.root = new btnode(val);
  };
  var current = this.root;
  while(current){
    if (val < current.val) {
      if (!current.left) {
        current.left = new btnode(val);
        break; 
      };
      current = current.left; 
    } else {
      if (!current.right) {
        current.right = new btnode(val);
        break; 
      };
      current = current.right; 
    };
  }
  return this; 
}

bst.prototype.find = function (val) {
  if (!this.root) {return false};
  return this.root.find(val); 
}

btnode.prototype.find = function (val){
  if (this.val === val) {
    return true; 
  };
  if (val < this.val) {
    if (!this.left) {
      return false; 
    };
    return this.left.find(val); 
  } else {
    if (!this.right) {
      return false; 
    };
    return this.right.find(val); 
  };
}



var bst = new bst(); 
bst.add(20).add(10).add(0);


console.log(bst);

console.log(bst.find(20));
console.log(bst.find(10));
console.log(bst.find(0));
console.log(bst.find(5));