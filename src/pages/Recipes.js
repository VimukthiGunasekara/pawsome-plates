import React from "react";
import RecipeCard from "../components/RecipeCard"
import FooterSection from "../components/Footer";

export default function Recipes() {
    const recipes = [
        {
            title: "Peanut Butter Pumpkin Biscuits",
            image: `${process.env.PUBLIC_URL}/image/recipeimg/1.png`,
            description: "Peanut Butter Pumpkin Biscuits are not only delicious,also packed with wholesome ingredients.",
            prep_time: "15 Minutes",
            cook_time: "25 Minutes",
        },
        {
            title: "Carrot and Oat Biscuits",
            image: `${process.env.PUBLIC_URL}/image/recipeimg/2.png`,
            description: "These Carrot and Oat Biscuits are packed with wholesome ingredients that provide valuable nutrients for your dog.",
            prep_time: "15 Minutes",
            cook_time: "20 Minutes",
        },
        {
            title: "Sweet Potato Chewies Bite",
            image: `${process.env.PUBLIC_URL}/image/recipeimg/3.png`,
            description: "Dogs absolutely love Sweet Potato Chewies; they're a simple, wholesome treat that they adore.",
            prep_time: "10 Minutes",
            cook_time: "02 Hours",
        },
        {
            title: "Peanut Butter Banana Bites",
            image: `${process.env.PUBLIC_URL}/image/recipeimg/4.png`,
            description: "These Peanut Butter Banana Bites are not only tasty but also packed with natural goodness for your dog to enjoy.",
            prep_time: "15 Minutes",
            cook_time: "15 Minutes",
        },
        {
            title: "Blueberry and Coconut Bites",
            image: `${process.env.PUBLIC_URL}/image/recipeimg/5.png`,
            description: "These Blueberry and Coconut Bites are packed with fruity goodness and the healthy benefits of coconut.",
            prep_time: "15 Minutes",
            cook_time: "15 Minutes",
        },
        {
            title: "Chicken and Sweet Potato Stew",
            image: `${process.env.PUBLIC_URL}/image/recipeimg/6.png`,
            description: "Balanced Chicken and Sweet Potato Stew offers dogs protein, vitamins, fiber, and carbohydrates for nutrition.",
            prep_time: "15 Minutes",
            cook_time: "25 Minutes",
        },
        {
            title: "Salmon and Quinoa Delight",
            image: `${process.env.PUBLIC_URL}/image/recipeimg/7.png`,
            description: "This nutrient-rich Salmon and Quinoa Delight provides omega-3, protein, vitamins, and minerals for dogs.",
            prep_time: "15 Minutes",
            cook_time: "20 Minutes",
        },
        {
            title: "Turkey and Brown Rice Medley",
            image: `${process.env.PUBLIC_URL}/image/recipeimg/8.png`,
            description: "Offering a balanced blend of protein, carbs, and veggies, Turkey and Brown Rice Medley makes a satisfying dog meal..",
            prep_time: "15 Minutes",
            cook_time: "25 Minutes",
        },
        {
            title: "Beef and Vegetable Stir-Fry",
            image: `${process.env.PUBLIC_URL}/image/recipeimg/9.png`,
            description: "Protein-packed Beef and Vegetable Stir-Fry with nutritious veggies offer a flavorful, textured dog meal.",
            prep_time: "10 Minutes",
            cook_time: "15 Minutes",
        },
        {
            title: "Fish and Sweet Potato Mash",
            image: `${process.env.PUBLIC_URL}/image/recipeimg/10.png`,
            description: "This Fish and Sweet Potato Mash offers dogs protein from fish, vitamins and fiber from vegetables, and carbohydrates from sweet potato. Adjust portions based on your dog's size, age, and dietary needs.",
            prep_time: "15 Minutes",
            cook_time: "30 Minutes",
        },
        {
            title: "Pupcakes",
            image: `${process.env.PUBLIC_URL}/image/recipeimg/11.png`,
            description: "These Pupcakes are a delightful treat for special occasions or celebrations for your dog. Remember to store them in an airtight container and use them within a week",
            prep_time: "15 Minutes",
            cook_time: "20 Minutes",
        },
        {
            title: "Celebration Treats",
            image: `${process.env.PUBLIC_URL}/image/recipeimg/12.png`,
            description: "These Celebration Treats are a fun and flavorful way to mark a special day for your furry friend. Store them in an airtight container in the refrigerator and use them within a week.",
            prep_time: "15 Minutes",
            cook_time: "15 Minutes",
        },
        {
            title: "Cheesy Chicken Bites",
            image: `${process.env.PUBLIC_URL}/image/recipeimg/13.png`,
            description: "These Cheesy Chicken Bites are small, flavorful treats ideal for dog training. They combine chicken and cheese, making them enticing. Store in an airtight container and use within a week.",
            prep_time: "15 Minutes",
            cook_time: "15 Minutes",
        }
    ].sort(() => Math.random() - 1)
    return (
        <div>
            <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}


            </div>
            <FooterSection />
        </div>
    )
}