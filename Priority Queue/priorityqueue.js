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

	dequeue = () => this.list.shift();
}