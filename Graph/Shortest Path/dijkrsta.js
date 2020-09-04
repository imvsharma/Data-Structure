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

class Graph {
	constructor() {
		this.adjList = new Map();
	}

	addNode = node => {
		this.adjList.set(node, []);
	}

	addEdge = (src, dest, weight) => {
		this.adjList.get(src).push({"node": dest, "weight": weight});
	}

	getNodes = () => this.adjList.keys();

	getEdges = node => this.adjList.get(node);

}