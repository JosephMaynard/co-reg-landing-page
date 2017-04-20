import './Title.css';

function Title(props) {
    return (
        <div className="Title">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

export default Title;
