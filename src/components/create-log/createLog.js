import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CreateLog(){
    // TODO: Create grid for form
    return(
        <div class="mainContent">
            <div class="contentBox" id="createLog">
                <form>
                    <label htmlFor="newName">Name</label>
                    <input
                    type="text"
                    id="newName"
                    />
                </form>
            </div>
        </div>
    )
}