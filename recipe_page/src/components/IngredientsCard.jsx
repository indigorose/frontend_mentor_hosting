export const IngredientsCard = () => {
	return (
		<div className="card__ingredient">
			{/* Ingredients Card*/}
			<h2 className="card__title">Ingredients</h2>
			<ul className="ingredient__list">
				<li className="ingredient__point">2-3 large eggs</li>
				<li className="ingredient__point">Salt, to taste</li>
				<li className="ingredient__point">Pepper, to taste</li>
				<li className="ingredient__point">
					1 tablespoon of butter or oil
				</li>
				<li className="ingredient__point">
					Optional fillings: cheese, diced vegetables, cooked meats,
					herbs
				</li>
			</ul>
		</div>
	);
};
