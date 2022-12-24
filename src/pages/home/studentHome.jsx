import { Profile } from "../../components/profile"

export const StudentHome = ()=>{

    window.history.replaceState(null, "Home", "/")

    return(
        <div>
            <Profile/>
        </div>
    )
}
