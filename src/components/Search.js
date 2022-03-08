import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			top_word: '',
			bottom_word: ''
		};
	}

	changeTopWord = (event) => {
		this.setState({ top_word: event.target.value });
	};

	changeBottomWord = (event) => {
		this.setState({ bottom_word: event.target.value });
	};

	// fetch meme from API and send info to App.js
	fetchImage = async (event) => {
		event.preventDefault();
		const memeAPI = 'https://api.imgflip.com/get_memes';
		try {
			const response = await axios.get(`${memeAPI}`);
			const data = response.data;
			const images = data.data.memes;
			const img = images[Math.floor(Math.random() * images.length)];
			this.props.updateMeme(this.state.top_word, this.state.bottom_word, img.url);
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<section className="section">
				<div className="field has-addons">
					<div className="control is-expanded">
						<input
							className="input is-large is-fullwidth is-family-monospace"
							id="top-input"
							placeholder="Top text"
							type="text"
							value={this.state.top_word}
							onChange={this.changeTopWord}
						/>
					</div>
				</div>
				<div className="field has-addons">
					<div className="control is-expanded">
						<input
							className="input is-large is-fullwidth is-family-monospace"
							id="bottom-input"
							placeholder="Bottom text"
							type="text"
							value={this.state.bottom_word}
							onChange={this.changeBottomWord}
						/>
					</div>
				</div>
				<div className="field has-addons">
					<div className="control is-expanded">
						<button className="button is-link is-large is-fullwidth" id="go-btn" onClick={this.fetchImage}>
							Go!
						</button>
					</div>
				</div>
			</section>
		);
	}
}

export default Search;

Search.propTypes = {
	updateMeme: PropTypes.func.isRequired
};
