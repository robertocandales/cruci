import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// my components
import TextArea from '../input/TextArea';

// my actions
// import { health_center_add_review } from '../../../actions/healthActions';

class ReviewForm extends Component {

    constructor () {
        super ();

        this.state = {
            review: '',
            errors: {}
        }

        this.onChange = this.onChange.bind (this);
        this.onSubmit = this.onSubmit.bind (this);
    }

    componentWillReceiveProps (nextProps) {

        if (nextProps.errors) this.setState ({ errors: nextProps.errors });

    }

    onChange (e) { this.setState ({ [e.target.name]: e.target.value }); }

    onSubmit (e) {

        e.preventDefault ();

        let review_data = {
            review: this.state.review,
        };

        this.props.post_add_comment (review_data);

    }

    render () {
        let { errors } = this.state;

		return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="comment">Review the health center...</label>
                        <TextArea
                            placeholder=""
                            name="short"
                            value={ this.state.review }
                            onChange={ this.onChange }
                            error={ errors.review }
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Review</button>
                </form>
            </div>
		);
    }

}

ReviewForm.propTypes = {
    // health_center_add_review: PropTypes.func.isRequired
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
});

connect (mapStateToProps, { }) (ReviewForm);

class ReviewItem extends Component {

    render () {
        let { review } = this.props;

        // /* TODO: the owner of the review or an admin can delete it */
		return (
			<div>
				<div class="comment">
					<a class="comment-img" href="#non">
						<img src={process.env.PUBLIC_URL + '/img/no-avatar-icon.png'} 
							alt="" width="50" height="50" />
					</a>
					<div class="comment-body">
						<div class="text">
							<p>{ review.text }</p>
						</div>
						{/* FIXME: add date and hour */}
						<p class="attribution">by <a href="#non">{ review.name }</a> at 14:23pm, 4 Dec 2015</p>
					</div>
				</div>
			</div>
		);
    }

}

ReviewItem.propTypes = {
    review: PropTypes.object.isRequired
};

class ReviewFeed extends Component {

    render () {
        let { reviews } = this.props;

        return reviews.map (review => <ReviewItem key={ review._id } review={ review } />);
    }

}

ReviewItem.propTypes = {
    reviews: PropTypes.array.isRequired
};

class Reviews extends Component {

    render () {
        let { isAuthenticated } = this.props.auth;

        const auth_reviews = (
            <div>
                <ReviewForm />
                <hr></hr>
                {/* FIXME: */}
                {/* <ReviewsFeed reviews={ center.reviews }/> */}
            </div>
        );

        const public_reviews = (
            <div>
                <hr></hr>
                {/* FIXME: */}
                {/* <ReviewsFeed reviews={ center.reviews }/> */}
            </div>
        );

        return (
            <div>
                { isAuthenticated ? auth_reviews : public_reviews }
            </div>
        );
    }

}

Reviews.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect (mapStateToProps, { }) (Reviews);