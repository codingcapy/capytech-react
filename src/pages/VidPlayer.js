
import { Video } from "../components/Video"

export function VidPlayer(props) {
    return (
        <main>
            <Video src={props.src} />
        </main>
    )
}