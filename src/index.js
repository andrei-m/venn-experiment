import React from 'react';
import ReactDOM from 'react-dom';
import * as venn from 'venn.js';
import * as d3 from 'd3';

class Examples extends React.Component {
  render() {
    return (
      <div>
        <TwoElement />
        <ThreeElement />
      </div>
    );
  }
}

class TwoElement extends React.Component {
  componentDidMount() {
	var sets = [ {sets: ['DisjunctionA'], size: 12}, // disjunction
				 {sets: ['DisjunctionB'], size: 20}, // disjunction
				 {sets: ['DisjunctionC'], size: 25}, // disjunction
				 {sets: ['DisjunctionA','DisjunctionB'], size: 10}, // conjunction
				 {sets: ['DisjunctionA','DisjunctionC'], size: 10}, // conjunction
				 {sets: ['DisjunctionB','DisjunctionC'], size: 10}, // conjunction
				 {sets: ['DisjunctionA','DisjunctionB','DisjunctionC'], size: 5}]; // conjunction


	var chart = venn.VennDiagram();
    var div = d3.select(".TwoElement");
	div.datum(sets).call(chart);

    var tooltip = d3.select("body").append("div")
       .attr("class", "venntooltip");

    div.selectAll("g")
      .on("mouseover", function(d, i) {
		// sort all the areas relative to the current item
        venn.sortAreas(div, d);
        // Display a tooltip with the current size
        tooltip.transition().duration(200).style("opacity", .9);
        tooltip.text(d.size + "M UE");

        // highlight the current path
        var selection = d3.select(this).transition("tooltip").duration(200);
        selection.select("path")
        .style("stroke-width", 10)
        .style("fill-opacity", d.sets.length == 1 ? .4 : .1)
        .style("stroke-opacity", 1);
    })
	.on("mousemove", function() {
        tooltip.style("left", (d3.event.pageX) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
    })
    .on("mouseout", function(d, i) {
        tooltip.transition().duration(400).style("opacity", 0);
        var selection = d3.select(this).transition("tooltip").duration(200);
        selection.select("path")
            .style("stroke-width", 0)
            .style("fill-opacity", d.sets.length == 1 ? .25 : .0)
            .style("stroke-opacity", 0);
    });
  }

  render() {
    return (<div className="TwoElement"></div>);
  }
}

class ThreeElement extends React.Component {
  componentDidMount() {
	var sets = [ {sets: ['DisjunctionA'], size: 12}, // disjunction
				 {sets: ['DisjunctionB'], size: 20}, // disjunction
				 {sets: ['DisjunctionC'], size: 25}, // disjunction
				 {sets: ['DisjunctionA','DisjunctionB'], size: 10}, // conjunction
				 {sets: ['DisjunctionA','DisjunctionC'], size: 10}, // conjunction
				 {sets: ['DisjunctionB','DisjunctionC'], size: 10}, // conjunction
				 {sets: ['DisjunctionA','DisjunctionB','DisjunctionC'], size: 5}]; // conjunction

	var chart = venn.VennDiagram();
	d3.select(".ThreeElement").datum(sets).call(chart);
  }

  render() {
    return (<div className="ThreeElement"></div>);
  }
}

ReactDOM.render(<Examples />, document.getElementById('root'));
