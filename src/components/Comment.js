
import useAuthStore from "../store/AuthStore"

export function Comment(props){

    const { logoutService, user } = useAuthStore((state) => state)

    return(
        <div>
            <p><strong>@{user.username}</strong> {props.date}</p>
            <p>{props.content}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}