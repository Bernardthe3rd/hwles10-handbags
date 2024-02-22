function Product({textLabel, imageSrc, imageAlt, nameBag, price}) {
    return (
        <article>
            <span>{textLabel}</span>
            <img src={imageSrc} alt={imageAlt}/>
            <p>{nameBag}</p>
            <h4>{price}</h4>
        </article>
    )
}
export default Product;