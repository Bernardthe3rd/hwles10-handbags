
function Tile(props) {
    let result = props.imageSrc
    if (result.includes('assets')) {
        result = <img src={props.imageSrc} alt={props.imageAlt}/>
    } else {
        result = props.children
    }
    return (
        <section>
            {result}
        </section>
    )
}

export default Tile;