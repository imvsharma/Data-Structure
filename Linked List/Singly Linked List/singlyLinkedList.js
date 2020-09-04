const Node = class {
	constructor(data) {
		this.data = data;
		this.next = null
	}
}

const SinglyLinkedList = class {
	constructor () {
		this.head = null;
	}

	isEmpty = () => this.head === null ? true : false;

	addAtBeginning = (data) => {
		const node = new Node (data);
		if(this.isEmpty()) {
			this.head = node;
		} else {
			let head = this.head;
			this.head = node;
			node.next = head;
		}
	}

	addAtEnd = data => {
		const node = new Node(data);
		if(this.isEmpty()) {
			this.head = node;
		} else {
			let current = this.head;
			while(current.next) {
				current = current.next;
			}
			current.next = node;
		}
	}
}


const singlyLinkedList = new SinglyLinkedList();
