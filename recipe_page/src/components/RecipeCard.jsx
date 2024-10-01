import recipeImg from '../assets/images/image-omelette.jpeg';

const RecipeCard = () => {
	return (
		<div>
			<img
				className="recipe-img"
				src={recipeImg}
				alt="portrait photo of Jessica"
			/>
			{/* Header text */}
			<h1>Simple Omelette Recipe</h1>
			<p>
				An easy and quick dish, perfect for any meal. The classic
				omelette combines beaten eggs cooked to perfection, optionally
				filled with your choice of cheese, vegetables, or meats
			</p>
			{/* Preparation Card*/}
			<h3>Preparation time</h3>
			<ul>
				<li>
					<strong>Total:</strong> Approximately 10 minutes
				</li>
				<li>
					<strong>Preparation:</strong> 5 minutes
				</li>
				<li>
					<strong>Cooking:</strong> 5 minutes
				</li>
			</ul>

			{/* Ingredients Card*/}
			<h2>Ingredients</h2>
			<ul>
				<li>2-3 large eggs</li>
				<li>Salt, to taste</li>
				<li>Pepper, to taste</li>
				<li>1 tablespoon of butter or oil</li>
				<li>
					Optional fillings: cheese, diced vegetables, cooked meats,
					herbs
				</li>
			</ul>
			{/* Instructions Card */}
			<h2>Instructions</h2>
			<ul>
				<ol type="1">
					<li>
						<strong>Beat the eggs:</strong> In a bowl, beat the eggs
						with a pinch of salt and pepper until they are well
						mixed. You can add a tablespoon of water or milk for a
						fluffier texture.
					</li>
					<li>
						<strong>Heat the pan:</strong> Place a non-stick frying
						pan over medium heat and add butter or oil.
					</li>
					<li>
						<strong>Cook the omelette:</strong> once the butter is
						melted and bubbling, pour in the eggs. Tilt the pan to
						ensure the eggs evenly coat the surface.
					</li>
					<li>
						<strong>Add fillings(optional):</strong> When the eggs
						begin to set at the edges but ar still slightly runny in
						the middle, sprinkle your chose fillings over one half
						of the omelette
					</li>
					<li>
						<strong>Fold and serve:</strong> As the omelette
						continues to cook, carefully lift one edge and fold it
						over the fillings. Let it cook for another minute, then
						slide it onto a plate.
					</li>
					<li>
						<strong>Enjoy:</strong> Serve hot, with additional salt
						and pepper if needed.
					</li>
				</ol>
			</ul>
			{/* Nutrition Table Card */}
			<h2>Nutrition</h2>
			<p>
				The table below shows nutritional values per serving without the
				additional fillings
			</p>
			<table>
				<tr>
					<td>Calories</td>
					<td>277kcal</td>
				</tr>
				<tr>
					<td>Carbs</td>
					<td>0g</td>
				</tr>
				<tr>
					<td>Protein</td>
					<td>20g</td>
				</tr>
				<tr>
					<td>Fat</td>
					<td>22g</td>
				</tr>
			</table>
		</div>
	);
};

export default RecipeCard;
