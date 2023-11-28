import React, { Component } from 'react';

export class NewsItems extends Component {
  render() {
    let { source, title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl ? "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/1024px-A_black_image.jpg" : imageUrl} className="card-img-top" style={{ height: "175px", width: "287px" }} alt="..." />
          <div className="card-body">
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>
              {source}
            </span>
            <h5 className="card-title">{title ? `${title.slice(0, 40)}...` : "No Title Available"}</h5>
            <p className="card-text">{description ? `${description.slice(0, 80)}...` : "No Description Available"}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">View More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
