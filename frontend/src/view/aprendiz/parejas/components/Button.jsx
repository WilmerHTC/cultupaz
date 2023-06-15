export default function Button(props) {
    return (
        <button className='button-juegos' onClick={props.action}>{props.label}</button>
    );
}
