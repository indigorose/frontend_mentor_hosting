export const NutritionCard = () => {
	return (
		<section className="card__nutrition">
			{/* Nutrition Table Card */}
			<h2 className="card__title">Nutrition</h2>
			<p className="nutrition__text">
				The table below shows nutritional values per serving without the
				additional fillings
			</p>
			<table>
				<tr>
					<td className="nutrition__table--bottom">Calories</td>
					<td className="nutrition__table--bottom">277kcal</td>
				</tr>
				<tr className="nutrition__table--bottom">
					<td className="nutrition__table--bottom">Carbs</td>
					<td className="nutrition__table--bottom">0g</td>
				</tr>
				<tr className="nutrition__table--bottom">
					<td className="nutrition__table--bottom">Protein</td>
					<td className="nutrition__table--bottom">20g</td>
				</tr>
				<tr>
					<td>Fat</td>
					<td>22g</td>
				</tr>
			</table>
		</section>
	);
};
