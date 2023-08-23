

export function Video(props) {
    return (
        <div>
            <video src={props.src} controls className="video"></video>
        </div>
    )
}