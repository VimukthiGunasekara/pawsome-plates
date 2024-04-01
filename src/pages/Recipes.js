import RecipeCard from "../components/RecipeCard"

export default function Recipes() {
    const recipes = [
        {
            title: "Peanut Butter Pumpkin Biscuits",
            image: "/image/recipeimg/1.png",
            description: "Peanut Butter Pumpkin Biscuits are not only delicious,also packed with wholesome ingredients.",
            prep_time: "15 Minutes",
            cook_time: "25 Minutes",
        },
        {
            title: "Carrot and Oat Biscuits",
            image: "/image/recipeimg/2.png",
            description: "These Carrot and Oat Biscuits are packed with wholesome ingredients that provide valuable nutrients for your dog.",
            prep_time: "15 Minutes",
            cook_time: "20 Minutes",
        },
        {
            title: "Sweet Potato Chewies Bite",
            image: "/image/recipeimg/3.png",
            description: "Dogs absolutely love Sweet Potato Chewies; they're a simple, wholesome treat that they adore.",
            prep_time: "10 Minutes",
            cook_time: "02 Hours",
        },
        {
            title: "Peanut Butter Banana Bites",
            image: "/image/recipeimg/4.png",
            description: "These Peanut Butter Banana Bites are not only tasty but also packed with natural goodness for your dog to enjoy.",
            prep_time: "15 Minutes",
            cook_time: "15 Minutes",
        },
        {
            title: "Blueberry and Coconut Bites",
            image: "/image/recipeimg/5.png",
            description: "These Blueberry and Coconut Bites are packed with fruity goodness and the healthy benefits of coconut.",
            prep_time: "15 Minutes",
            cook_time: "15 Minutes",
        },
        {
            title: "Chicken and Sweet Potato Stew",
            image: "/image/recipeimg/6.png",
            description: "Balanced Chicken and Sweet Potato Stew offers dogs protein, vitamins, fiber, and carbohydrates for nutrition.",
            prep_time: "15 Minutes",
            cook_time: "25 Minutes",
        },
        {
            title: "Salmon and Quinoa Delight",
            image: "/image/recipeimg/7.png",
            description: "This nutrient-rich Salmon and Quinoa Delight provides omega-3, protein, vitamins, and minerals for dogs.",
            prep_time: "15 Minutes",
            cook_time: "20 Minutes",
        },
        {
            title: "Turkey and Brown Rice Medley",
            image: "/image/recipeimg/8.png",
            description: "Offering a balanced blend of protein, carbs, and veggies, Turkey and Brown Rice Medley makes a satisfying dog meal..",
            prep_time: "15 Minutes",
            cook_time: "25 Minutes",
        },
        {
            title: "Beef and Vegetable Stir-Fry",
            image: "/image/recipeimg/9.png",
            description: "Protein-packed Beef and Vegetable Stir-Fry with nutritious veggies offer a flavorful, textured dog meal.",
            prep_time: "10 Minutes",
            cook_time: "15 Minutes",
        }
    ].sort(() => Math.random() - 1)
    return (
        <div className="recipes-container">
            {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
            ))}
        </div>
    )
}