import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class CommentItem extends Component {

	render () {
		let { comment } = this.props;

		// /* TODO: the owner of the comment or an admin can delete a post */
		return (
			<div>
				<div class="comment">
					<a class="comment-img" href="#non">
						<img src={process.env.PUBLIC_URL + '/img/no-avatar-icon.png'} 
							alt="" width="50" height="50" />
					</a>
					<div class="comment-body">
						<div class="text">
							<p>{ comment.text }</p>
						</div>
						{/* FIXME: add date and hour */}
						<p class="attribution">by <a href="#non">{ comment.name }</a> at 14:23pm, 4 Dec 2015</p>
					</div>
				</div>
			</div>
		);
	}

}

CommentItem.propTypes = {
	comment: PropTypes.object.isRequired
};

class CommentFeed extends Component {

	render () {
		let { comments } = this.props;

		return comments.map (comment => <CommentItem key={ comment._id } comment={ comment } />);
	}

}

CommentFeed.propTypes = {
	comments: PropTypes.array.isRequired
};

class Comments extends Component {

    render () {
        let { isAuthenticated } = this.props.auth;
        let { comments } = this.props;

        const auth_comments = (
            <div>
                <hr></hr>
                {/* FIXME: */}
                {/* <CommentFeed comments={ comments }/> */}
            </div>
        );

        const public_comments = (
            <div>
                <hr></hr>
                {/* FIXME: */}
                {/* <CommentFeed comments={ comments }/> */}
            </div>
        );

        return (
            <div>
                { isAuthenticated ? auth_comments : public_comments }
            </div>
        );
    }

}

Comments.propTypes = {
    auth: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect (mapStateToProps, { }) (Comments);