import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// my components
import Navbar from './Navbar';
import Footer from './Footer';

import Alert from '../common/Alert';

// my actions
import { video_get_all } from '../../actions/videoActions';

class VideosItem extends Component {

    render () {
        let { video } = this.video;

        return (
            <div>

            </div>
        );
    }

}

VideosItem.propTypes = {
    video: PropTypes.object.isRequired
};

class VideosFeed extends Component {

    render () {
        let { videos } = this.props;

		return videos.map (video => <VideosItem key={ video._id } video={ video } />);
    }

}

VideosFeed.propTypes = {
    videos: PropTypes.array.isRequired
};

class Videos extends Component {
  
    // componentDidMount () { this.props.video_get_all (); }

    render () {
        let { videos, loading } = this.props.video;
        let video_content;

        // TODO: add spinner
		// if (videos === null || loading) video_content = <Spinner />;
		if (videos === null) {
            video_content = (
                <div className="text-center">
                    <h2 class="text-info">No videos found!</h2>
                </div>
            );
        }

		else video_content = <VideosFeed videos={ videos } />;

        return (
        <div>
        <Navbar />

        <div class="page blog-post-list">
            <Alert />
            
            <section class="clean-block clean-blog-list dark">
                <div class="container">
                    <div class="block-heading">
                        <h2 class="text-info">Videos</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>

                    <div class="block-content">
                        { video_content }             
                    </div>
                </div>
            </section>
        </div>

        <Footer />
        </div>
        );
    }
}

Videos.propTypes = {
	video_get_all: PropTypes.func.isRequired,
	video: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	video: state.video
});

export default connect (mapStateToProps, { video_get_all }) (Videos);