import Card from '../Card';

export default function CategorySection() {
    return (
        <div className="section category">
            <h1 className="category-title">Homemade<span className="category-title-snap"> Styles</span></h1>
            <p className="category-title-sec">Explore delicious, easy-to-make recipes for every occasion.</p>
            <div class="section category-section">
                <Card
                    title="Biscuits"
                    subtitle="05 Recipes"
                    imageSrc={`${process.env.PUBLIC_URL}/image/categoryimg/1.png`}
                />
                <Card
                    title="Special Occasions"
                    subtitle="02 Recipes"
                    imageSrc={`${process.env.PUBLIC_URL}/image/categoryimg/3.png`}
                />
                <Card
                    title="Meals"
                    subtitle="05 Recipes"
                    imageSrc={`${process.env.PUBLIC_URL}/image/categoryimg/2.png`}
                />
                <Card
                    title="Frozen Treats"
                    subtitle="08 Recipes"
                    imageSrc={`${process.env.PUBLIC_URL}/image/categoryimg/4.png`}
                />
            </div>
        </div>
    )
}