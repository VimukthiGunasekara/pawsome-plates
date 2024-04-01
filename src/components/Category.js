export default function CategorySection() {
    return (
        <div className="section category">
            <h1 className="category-title">Homemade<span className="category-title-snap"> Styles</span></h1>
            <p className="category-title-sec">recipes category</p>
            <div class="section category-section">
                <div class="category-item">
                    <img src="/image/categoryimg/1.png" alt="Category 1" />
                    <h3>Biscuits</h3>
                </div>
                <div class="category-item">
                    <img src="/image/categoryimg/2.png" alt="Category 2" />
                    <h3>Meals</h3>
                </div>
                <div class="category-item">
                    <img src="/image/categoryimg/3.png" alt="Category 3" />
                    <h3>Special Occasions</h3>
                </div>
                <div class="category-item">
                    <img src="/image/categoryimg/4.png" alt="Category 4" />
                    <h3>Frozen Treats</h3>
                </div>
            </div>
        </div>
    )
}