class PriorityQueue {
	constructor() {
		this.list = [];
	}

	isEmpty = () => this.list.length === 0 ? true : false;

	enqueue = (item) => {

		if(this.isEmpty()) {
			this.list.push(item);
		} else {
			let found = false
			for(let i =0 ; i < this.list.length; i++) {
				if(this.list[i].weight > item.weight){
					this.list.splice(i,0,item);
					found = true;
					break;
				}
			}
			if(!found) this.list.push(item);
		}
	}

	dequeue = () => {
		if(this.isEmpty()) {
			return "List is Empty";
		}
	 	
	 	return this.list.shift();
	}

	front = () => {
		if(this.isEmpty()) {
			return "List is Empty";
		}

		return this.list[0];
	} 

	rear = () => {
		if(this.isEmpty()) {
			return "List is Empty";
		}

		return this.list[this.list.length -1];
	}
	
}