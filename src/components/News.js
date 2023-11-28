import React, { Component } from 'react';
import NewsItems from './NewsItems';
import PropTypes from 'prop-types';
import Spinner from './spinner';
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 11,
    category: "technology",
    totalResults: 0,
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  componentDidMount() {
    this.updateNews();
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  async updateNews() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&pagesize=${this.props.pagesize}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState(() => ({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    }));
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&pagesize=${this.props.pagesize}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState(() => ({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    }));
  }


  render() {
    return (
      <>
        <div className="container">
          <h1 className='text-center ' style={{ marginTop: "90px" }}>
            News Monkey - {this.capitalizeFirstLetter(this.props.category)} Headlines
          </h1>
          {this.state.loading && <Spinner />}
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {this.state.articles.map((element) => (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItems
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}

            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
