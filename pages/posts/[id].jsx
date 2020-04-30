import { fetchPost, setMessage } from '../../redux/actions/appActions';

import Post from '../../components/pages/Post';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/dist/client/router';

class PostHoc extends React.Component {
  // static getInitialProps({ store }) {}

  componentDidMount() {
    const { dispatchFetchPost, router } = this.props;
    const { id } = router.query;
    dispatchFetchPost(id);
  }

  handleClose = () => {
    const { dispatchSetMessage } = this.props;
    dispatchSetMessage('');
  };

  render() {
    const { message, handleClose, post } = this.props;
    return <Post message={message} handleClose={handleClose} post={post} />;
  }
}

const mapStateToProps = (state) => ({
  post: state.app.post,
  message: state.app.message,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchPost: (id) => dispatch(fetchPost(id)),
  dispatchSetMessage: (message) => dispatch(setMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostHoc));
