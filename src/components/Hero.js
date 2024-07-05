import CustomImage from "./CustomImage";

export default function HeroSection() {
    const images = [
        "./image/1.png}",
        "https://vimukthigunasekara.github.io/pawsome-plates/image/2.png",
        "${process.env.PUBLIC_URL}/image/3.png",
        "/image/4.png"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Your Dog's Perfect Homemade Recipe!</h1>
                <p className="info">Embark on a culinary adventure with our paw-some recipe, meticulously crafted with love and care 🐾 Prepare for a tail-wagging experience filled with delicious goodness, guaranteed to make your furry friend's day an unforgettable delight! 🐶.</p>
                <button className="btn">Explore Now</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgsrc={src} />
                ))}
            </div>
        </div>
    )
}