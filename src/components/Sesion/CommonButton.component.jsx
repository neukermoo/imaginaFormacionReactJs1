export default function CommonButton(props) {
    return (
        <button className={props.style} onClick={props.onClick}>{props.value}</button>
    );
}