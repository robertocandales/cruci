import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// my components
// import TextField from '../../common/TextField';
import TextArea from '../../input/TextArea';

// my actions
import { post_add_comment } from '../../../actions/blogActions';

class CommentForm extends Component {

    constructor () {

        super ();
        this.state = {
            comment: '',

            errors: {}
        }

        this.onChange = this.onChange.bind (this);
        this.onSubmit = this.onSubmit.bind (this);

    }

    componentWillReceiveProps (nextProps) {

        if (nextProps.errors) this.setState({ errors: nextProps.errors });

    }

    onChange (e) { this.setState ({ [e.target.name]: e.target.value }); }

    onSubmit (e) {

        e.preventDefault ();

        let comment_data = {
            comment: this.state.comment,
        };

        this.props.post_add_comment (comment_data);

    }

	render () {

        let { errors } = this.state;

		return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="comment">Say something...</label>
                        <TextArea
                            placeholder=""
                            name="short"
                            value={ this.state.comment }
                            onChange={ this.onChange }
                            error={ errors.comment }
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Comment</button>
                </form>
            </div>
		);
	}

}

CommentForm.propTypes = {
    post_add_comment: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect (mapStateToProps, { post_add_comment }) (CommentForm);