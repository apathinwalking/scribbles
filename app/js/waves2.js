import * as d3 from "d3";
import * as FastSimplexNoise from "fast-simplex-noise";
import assign from "lodash/assign";
// var options = {
// 	svg: {
// 		width: "400px",
// 		height: "600px"
// 	},
// 	noise: {
// 		amplitude: 1.0,
// 		frequency: 1.0,
// 		max: 1.0,
// 		min: -1.0,
// 		octaves: 1,
// 		persistence: 0.5,
// 		random: Math.random
// 	}
// };

// var noise = new FastSimplexNoise(options.noise);

// var lineFunction = d3.svg.line

// var svg = d3.select("#svg");
// svg
// 	.attr('width', options.svg.width)
// 	.attr('height', options.svg.height);

class Design {
	constructor({element = "body", width = '400px', height = '600px'} = {}) {
		assign(this, {element, width, height});
		this.draw();
	}
	draw() {
		const svg = d3.select(this.element).append("svg");
		svg.attr('width', this.width);
		svg.attr('height', this.height);

		// const rect = svg.append("rect");
	    // rect.attr("width", "100%");
	    // rect.attr("height", "100%");
	}

}

class Column {
	constructor(options) {

	}
}

console.log("hi");
var d = new Design();
d.draw();
