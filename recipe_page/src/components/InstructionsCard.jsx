export const InstructionsCard = () => {
	return (
		<div className="card__instructions">
			{/* Instructions Card */}
			<h2 className="card__title">Instructions</h2>
			<ol type="1">
				<li className="instruction__point">
					<strong>Beat the eggs:</strong> In a bowl, beat the eggs
					with a pinch of salt and pepper until they are well mixed.
					You can add a tablespoon of water or milk for a fluffier
					texture.
				</li>
				<li className="instruction__point">
					<strong>Heat the pan:</strong> Place a non-stick frying pan
					over medium heat and add butter or oil.
				</li>
				<li className="instruction__point">
					<strong>Cook the omelette:</strong> once the butter is
					melted and bubbling, pour in the eggs. Tilt the pan to
					ensure the eggs evenly coat the surface.
				</li>
				<li className="instruction__point">
					<strong>Add fillings(optional):</strong> When the eggs begin
					to set at the edges but ar still slightly runny in the
					middle, sprinkle your chose fillings over one half of the
					omelette
				</li>
				<li className="instruction__point">
					<strong>Fold and serve:</strong> As the omelette continues
					to cook, carefully lift one edge and fold it over the
					fillings. Let it cook for another minute, then slide it onto
					a plate.
				</li>
				<li className="instruction__point">
					<strong>Enjoy:</strong> Serve hot, with additional salt and
					pepper if needed.
				</li>
			</ol>
		</div>
	);
};
