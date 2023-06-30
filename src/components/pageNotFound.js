import { useNavigate } from "react-router-dom";

export function PageNotFound(){
    const navigator = useNavigate()
    return(
        <div class="mainContent">
            <h1>Error 404</h1>
            <h2>Page not found</h2>
            <button
            id="errorButton"
            onClick={() => navigator('/logs')}
            >Back to homepage</button>
        </div>
    )
}