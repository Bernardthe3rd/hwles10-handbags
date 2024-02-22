
function Tile({imageSrc, imageAlt, children}) {
    let result = imageSrc
    if (result.includes('assets')) {
        result = <img src={imageSrc} alt={imageAlt}/>
    } else {
        result = children
    }
    return (
        <section>
            {result}
        </section>
    )
}

export default Tile;

//Alternatieve opties door uitwerkingen gegeven:
// function Tile({ image, imgDescription, title, children }) {
//     console.log(image, imgDescription, title, children)
//     return (
//         <section>
//             {image && <img src={image} alt={imgDescription} />}
//             <h2>{title}</h2>
//             {children}
//         </section>
//     );
// }
//
// export default Tile;