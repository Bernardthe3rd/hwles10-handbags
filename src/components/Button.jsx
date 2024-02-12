function Button({children, onClicked, type, invisable}) {
    return (
        <button onClick={onClicked} type={type} disabled={invisable}>
            {children}
        </button>
    );
}

export default Button;