import React from 'react';
import ReactDOM from 'react-dom';
import * as venn from 'venn.js';
import * as d3 from 'd3';

class Diagram extends React.Component {
  componentDidMount() {
	var sets = [ {sets: ['A'], size: 12},
				 {sets: ['B'], size: 12},
				 {sets: ['A','B'], size: 6}];

	var chart = venn.VennDiagram();
	d3.select(".venn").datum(sets).call(chart);
  }

  render() {
    return (<div className="venn"></div>);
  }
}

ReactDOM.render(<Diagram />, document.getElementById('root'));
