/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import "./back-button.css"

const BackButton = () => {
    useEffect(() => {
        const backButton = document.getElementById("back-button");
        if(backButton){
            backButton.addEventListener("click", function() {
                backButton.classList.add("back-button-closed");
            });
        }
    }, []);

    return (
        <a href="#navigation" className="back-button" id="back-button">
            <img className="back-button__image" src={require("./../../images/back-button.png")}/>
        </a>
    );
}

export default BackButton;