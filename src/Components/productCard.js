const ProductCard = (image) => {
    return (
        <div className="product-card">
            <img src={image.product1} alt="" />
            <div>
                <h1>{image.text1}</h1>
            </div>
        </div>
    );
}
 
export default ProductCard;