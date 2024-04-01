import RecipeCard from "../components/RecipeCard"

export default function Recipes() {
    const recipes = [
        {
            title: "Peanut Butter Pumpkin Biscuits",
            image: "/image/recipeimg/1.png",
            description: "These Peanut Butter Pumpkin Biscuits are not only delicious but also packed with wholesome ingredients.",
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
            title: "Sweet Potato Chewies",
            image: "/image/recipeimg/3.png",
            description: "Sweet Potato Chewies are a simple and wholesome treat that dogs love.",
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
            image: "/image/recipeimg/1.png",
            description: "These Blueberry and Coconut Bites are packed with fruity goodness and the healthy benefits of coconut.",
            prep_time: "15 Minutes",
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