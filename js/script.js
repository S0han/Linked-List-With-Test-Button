// This is a doubly linked list


//This is the linked list itself
function LinkedList() {
	this.head = null;		//This is the head of the list
	this.tail = null;		//This is the tail
	this.length = 0;		//This is the length of the original list
}


//This will serve as the node of the linked list
function Node() {
	this.next = null;		//Allows to go to next node
	this.prev = null;		//Allows to got to the previous node
	this.content = null;	//Allows to look at content	
}

//We need content to be added to the node which is in the LL
LinkedList.prototype.add = function(_content) {
	var node = new Node();	//create new node by calling node func
	node.content = _content; //replace value of null with content passed into the fuction

	// if there are not other elements make the added node the head
	if(this.head == null) {
		this.head = node;	//make the node the head
		this.length = 1;	//adjust the length of the LL
		return node;		//return the node
	}

	//if a head node already exists make the new node the tail
	if (this.tail == null) {
		this.tail = node;	//make new element the tail
		this.tail.prev = this.head;	// point to previous element
		this.head.next = this.tail;	// head should point to next element
		this.length++; // increment the length by 1
		return node; //return the node
	}

	// make sure that the pointers are pointing to the correct node
	this.tail.next = node;
	node.prev = this.tail;
	this.tail = node;
	this.length++;
	return node;
}


// Create a function to print this Linked List
LinkedList.prototype.print = function() {
	
	//if the list is empty print that there is an empty list
	if(this.head == null) {
		return "Empty List";
	}
	
	//create and empty var to be populated with the list conent
	var s = "";
	
	// create a node for head if content exists
	var node = this.head;
	
	//create a loop that will allow you to populate node with values
	while (node != null) {
		s += node.content + "   ";
		node = node.next; //make sure node points to next node
	}

	return s;
}

//create an the object for the linked list using var
//this will call our linked list funciton and its properties
var myList = new LinkedList();

//this will link to the html to add a node by clicking the button
function addNode() {
	var el = document.getElementById('v').value;
	myList.add(el);
	document.getElementById("output").innerHTML = myList.print();
	var n = "You are currently on node " + (myList.length - 1) + ".";
	document.getElementById("trav").innerHTML = n;
}

//this will allow you to go to the previous node when clicking the button
function previousNode() {
	if (myList.head == null) {
		document.getElementById("trav").innerHTML = myList.print();
	}

	else if (myList.length == 1) {
		var x = "You are currently on node " + (myList.length - 1) + ", also known as the head node.";
		document.getElementById("trav").innerHTML = x;
	}

	else {
		var y = "You are currently on node " + (myList.length - 1) + ".";
		document.getElementById("trav").innerHTML = y;
		myList.length--;
	}
}

//this will allow you to go to the next node when clicking the button
function nextNode() {
	if (myList.head == null) {
		document.getElementById("trav").innerHTML = myList.print();
	}

	else if (myList.length == 1) {
		var x = "You are currently on node " + (myList.length - 1) + ", also known as the head node.";
		document.getElementById("trav").innerHTML = x;
	}

	else if (myList.tail.length == myList.length) {
		var b = "You are currently on node " + (myList.length - 1) + ", also known as the tail node.";
		document.getElementById("trav").innerHTML = b;
	}

	else {
		var y = "You are currently on node " + (myList.length - 1) + ".";
		document.getElementById("trav").innerHTML = y;
		myList.length++;
	}
}