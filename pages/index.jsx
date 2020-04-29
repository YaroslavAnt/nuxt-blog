import React from 'react';
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from '../redux/actions/counterActions';
import Home from '../components/pages/Home';
import apiClient from '../api/apiClient';
import { setPosts } from '../redux/actions/appActions';

class App extends React.Component {
  static getInitialProps({ store }) {}

  async componentDidMount() {
    const { dispatchSetPosts } = this.props;
    try {
      const { data: fetchedPosts } = await apiClient.get('/');
      dispatchSetPosts(fetchedPosts);
    } catch (error) {}
  }

  render() {
    console.log(this.props);
    const { posts, counter, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <h1>{counter}</h1>

        <Home posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.value,
  posts: state.app.posts,
});

const mapDispatchToProps = (dispatch) => ({
  incrementCounter,
  decrementCounter,
  dispatchSetPosts: (posts) => dispatch(setPosts(posts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
