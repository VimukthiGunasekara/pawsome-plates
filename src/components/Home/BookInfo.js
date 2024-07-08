export default function BookInfoSection() {
    return (
        <div className="bisection bi">
            <div className="colbi biimg">
                <img src={`${process.env.PUBLIC_URL}/image/book-info.png`} alt="Category 3" />
            </div>
            <div className="colbi bii">
                <h1 className="title">Delicious Homemade Dog Treats Made Just for Your Pup!</h1>
                <p className="info">Unleash the joy with our homemade doggy recipe! Packed with love and tasty goodness, this meal is sure to make your dog's tail wag with delight. Ready for a fun culinary adventure? 🐕🍴</p>
                <div className="info-container">
                    <h4 className="info">📑 20+ Recipes.</h4>
                    <h4 className="info">🗂️ 1000+ Downloads</h4>
                    <h4 className="info">⭐ 4.6/5 Ratings</h4>
                </div>
            </div>
        </div>
    )
}