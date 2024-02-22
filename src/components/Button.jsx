function Button({text, type, invisable}) {
    return (
        <button onClick={() => console.log({text})} type={type} disabled={invisable}>
            {text}
        </button>
    );
}

export default Button;