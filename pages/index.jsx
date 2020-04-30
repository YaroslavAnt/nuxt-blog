import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/pages/Home';
import { fetchPosts, setMessage } from '../redux/actions/appActions';

class App extends React.Component {
  // static getInitialProps({ store }) {}

  async componentDidMount() {
    const { dispatchSetMessage, dispatchFetchPosts } = this.props;
    try {
      dispatchFetchPosts();
    } catch (error) {
      dispatchSetMessage('Fail to load');
    }
  }

  handleClose = () => {
    const { dispatchSetMessage } = this.props;
    dispatchSetMessage('');
  };

  render() {
    const { posts, message } = this.props;
    return <Home posts={posts} message={message} handleClose={this.handleClose} />;
  }
}

const mapStateToProps = (state) => ({
  posts: state.app.posts,
  message: state.app.message,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchPosts: () => dispatch(fetchPosts()),
  dispatchSetMessage: (message) => dispatch(setMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
