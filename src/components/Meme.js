import PropTypes from 'prop-types';

function Meme(props) {
	return (
		<section className="section is-medium pt-0 pb-6 has-text-centered">
			<article className="message is-medium">
				<div className="message-body" id="output">
					<div className="meme">
						<img id="img" width="800rem" height="auto" src={props.picURL} alt="" />
						<h2 id="top-text" className="top">
							{props.upper}
						</h2>
						<h2 id="bottom-text" className="bottom">
							{props.lower}
						</h2>
					</div>
				</div>
			</article>
		</section>
	);
}

export default Meme;

Meme.propTypes = {
	upper: PropTypes.string.isRequired,
	lower: PropTypes.string.isRequired,
	picURL: PropTypes.string.isRequired
};
