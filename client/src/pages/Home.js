import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      <Link to={'/'}>
        <button variant="raised">
           Home
        </button>
      </Link>
      <br />
      <Link to={'/list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
      <br />
      <Link to={'/express/test'}>
        <button variant="raised">
           Static JSON Test
        </button>
      </Link>
      <br />
      <Link to={'/express/gifs'}>
        <button variant="raised">
           Gif API Test
        </button>
      </Link>

    </div>
    );
  }
}
export default Home;