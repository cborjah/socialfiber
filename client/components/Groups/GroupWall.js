import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchGroupPosts } from '../../actions/groups';
import Cookies from 'js-cookie';
import MessageBox from './MessageBox';
import CommentBox from './CommentBox';
import GroupWallMessages from './GroupWallMessages';
import GroupWallComments from './GroupWallComments';
import GroupUsersList from './GroupUsersList';
import GroupWallMessagesNoReply from './GroupWallMessagesNoReply';


class GroupWall extends Component {

  componentWillMount() {
    this.props.fetchGroupPosts(Cookies.get('groupID'));
  }

  render() {

    const groupPosts = this.props.groupPosts.map((post, idx) => <GroupWallMessages key={idx} post={post} />);
    const groupPostsNoReply = this.props.groupPosts.map((post, idx) => <GroupWallMessagesNoReply key={idx} post={post} />);

    return(
      <div className="testgroup">
        <MessageBox />
        {groupPosts}
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return {
    groupPosts: state.groups.groupPosts
  }
}

export default connect(mapStateToProps, { fetchGroupPosts })(GroupWall);
