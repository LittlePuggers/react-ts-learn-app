export function Button({ btnText, onClick, className}) {
    return (
        <button className={className} onClick={onClick}>{btnText}</button>
    );
}
