import recipeImg from '../assets/images/image-omelette.jpeg';
import { PreparationCard } from './PreparationCard';
import { IngredientsCard } from './IngredientsCard';
import { InstructionsCard } from './InstructionsCard';
import { NutritionCard } from './NutritionCard';
const RecipeCard = () => {
	return (
		<article className="container">
			<section className="container__card">
				{/* Header */}
				<div className="card__header">
					<img
						className="header__img"
						src={recipeImg}
						alt="A landscape photo of an omelette with salad garnish."
					/>
					<h1 className="header__title">Simple Omelette Recipe</h1>
					<p className="header__text">
						An easy and quick dish, perfect for any meal. The
						classic omelette combines beaten eggs cooked to
						perfection, optionally filled with your choice of
						cheese, vegetables, or meats.
					</p>
				</div>
				<PreparationCard />
				<IngredientsCard />
				<InstructionsCard />
				<NutritionCard />
			</section>
		</article>
	);
};

export default RecipeCard;
