import CustomImage from "./CustomImage"
import { redirectToWeb } from "./utils/utils";

export default function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <CustomImage imgsrc={recipe.image} />

            <div className="recipe-card-info">
                <div className="recipe-card-time-cards">
                    <div className="rctc-prep">
                        <p className="rctc-prep-title">Prepare TIme</p>
                        <p className="rctc-prep-time">{recipe.prep_time}</p>
                    </div>
                    <div className="rctc-cook">
                        <p className="rctc-cook-title">Cook TIme</p>
                        <p className="rctc-cook-time">{recipe.cook_time}</p>
                    </div>
                </div>
                <p className="recipe-card-title">{recipe.title}</p>
                <p className="recipe-card-desc">{recipe.description}</p>

                <button onClick={redirectToWeb} className="btn" type="button">View Recipe</button>
            </div>
        </div>
    )
}