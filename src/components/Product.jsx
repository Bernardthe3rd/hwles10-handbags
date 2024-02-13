function Product(props) {
    return (
        <article>
            <span>{props.textLabel}</span>
            <img src={props.imageSrc} alt={props.imageAlt}/>
            <p>{props.nameBag}</p>
            <h4>{props.price}</h4>
        </article>
    )
}
export default Product;