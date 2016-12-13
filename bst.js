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


// bst.prototype.min = function(){
//   if(!this.root) return this;
//   else return this.root.min(); 
// }

// btnode.prototype.min = function(){
//   if(this.left) this.left.min();
//   else return this; 
// }

// bst.prototype.max = function(){
//   if(!this.root) return this;
//   else return this.root.max(); 
// }

// btnode.prototype.max = function(){
//   if(this.right) this.right.max();
//   else return this; 
// }

bst.prototype.traverse = function(i){
  var cur = i || this.root; 
  console.log(this.root);
  if(cur.left) (this.traverse(cur.left));
  console.log(cur.val);
  if(cur.right) (this.traverse(cur.right));
  return; 
}

btnode.prototype.traverse = function(i){
  var cur = i || this; 
  if(cur.left) (this.left.traverse());
  console.log(cur.val);
  if(cur.right) (this.right.traverse());
  return; 
}



var bstex = new bst(); 
bstex.add(20).add(10).add(0);



console.log(bstex);

console.log(bstex.find(20));
console.log(bstex.find(10));
console.log(bstex.find(0));
console.log(bstex.find(5));

// bstex.root.traverse();
bstex.traverse();