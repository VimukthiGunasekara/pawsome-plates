const Card = ({ title, subtitle, imageSrc, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={imageSrc} alt={title} />
            <div className="card-info">
                <p>{title}</p>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default Card;
