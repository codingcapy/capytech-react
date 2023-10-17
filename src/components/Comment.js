export function Comment(props){
    return(
        <div>
            <p><strong>@{props.user}</strong> {props.date}</p>
            <p>{props.content}</p>
        </div>
    )
}