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
				 {sets: ['DisjunctionA','DisjunctionB'], size: 8}]; // conjunction

	var chart = venn.VennDiagram();
	d3.select(".TwoElement").datum(sets).call(chart);

    d3.selectAll(".TwoElement .venn-circle")
      .on("mouseover", function(d, i) {
        var node = d3.select(this).transition();
        node.select("text").style("font-weight", "100")
                           .style("font-size", "36px");
      })
      .on("mouseout", function(d, i) {
        var node = d3.select(this).transition();
        node.select("text").style("font-weight", "100")
                           .style("font-size", "24px");
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
