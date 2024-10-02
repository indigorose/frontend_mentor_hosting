import recipeImg from '../assets/images/image-omelette.jpeg';
import { PreparationCard } from './PreparationCard';
import { IngredientsCard } from './IngredientsCard';
import { InstructionsCard } from './InstructionsCard';
import { NutritionCard } from './NutritionCard';
const RecipeCard = () => {
	return (
		<article className="container">
			<section className="container-card">
				{/* Header */}
				<div className="card-header">
					<img
						className="header-img"
						src={recipeImg}
						alt="portrait photo of Jessica"
					/>
					<h1 className="header-title">Simple Omelette Recipe</h1>
					<p className="header-text">
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
