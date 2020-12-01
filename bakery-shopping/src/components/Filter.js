import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Products</div>
        <div className="filter-sort">
          Order
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option>Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value="">ALL</option>
            <option value="6 inch">"6 inch"</option>
            <option value="8 inch">"8 inch"</option>
            <option value="9 inch">"9 inch"</option>
            <option value="10 inch">"10 inch"</option>
            <option value="12 inch">"12 inch"</option>
            <option value="14 inch">"14 inch"</option>
            <option value="16 inch">"16 inch"</option>
          </select>
        </div>
      </div>
    );
  }
}
export default Filter;
