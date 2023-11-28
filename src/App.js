import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

import React, { Component } from 'react';

export default class App extends Component {
  pagesize = 11;
  apiKey = "6153c310a6524282a928cbec0b3185a7"
  // apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} />} />
            <Route path="/home" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="home" pagesize={10} />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pagesize={10} country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pagesize={10} country="in" category="entertainment" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pagesize={10} country="in" category="technology" />} />
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pagesize={10} country="in" category="general" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pagesize={10} country="in" category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pagesize={10} country="in" category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pagesize={10} country="in" category="sports" />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  };
}
