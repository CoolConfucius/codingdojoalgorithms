// chapter5

function ListNode(value){
  this.val = value; 
  this.next = null; 
}

var list = new ListNode(0);
console.log(list);

function addfront(value){
  var newnode = new ListNode(value);
  newnode.next = list; 
  list = newnode; 
  return newnode;
};
addfront(1);
console.log(list);

function contains(value){
  if (list.val === value) {
    return true; 
  };
  var cursor = list.next; 
  while(cursor !== null){
    if (cursor.val === value) {
      return true; 
    } else {
      cursor = cursor.next; 
    }
  }
  return false; 
}

console.log(contains(0));
console.log(contains(1));
console.log(contains(2));

function removefront(){
  if (!list) { return null };
  if (list.next !== null) {
    list.val = null; 
    list = list.next; 
  } else {
    list = null; 
  }
}

console.log(list);
removefront(); 
console.log(list);
removefront(); 
console.log(list);
removefront(); 
console.log(list);

list = new ListNode(3);
addfront(4);

function front(){
  if (!list) {return null};
  return list.val; 
}

console.log(front());


// SList 
var slist