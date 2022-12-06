/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = ({search, setSearch}) => {
    
    useEffect(() => {
        const itens = document.getElementsByClassName("navigation-list__item");
        for(const item of itens) {
            item.addEventListener("click", function () {
                document.getElementById("check-toggle").checked = false;
            });
        }

        const hamburger = document.getElementById("check-toggle");
        const search = document.getElementById("check-search");
        hamburger.addEventListener("change", () => {
            if(hamburger.checked)
                search.checked = false;
        });

        search.addEventListener("change", () => {
            if(search.checked)
                hamburger.checked = false;
        });

        const close = document.getElementById("close-search");
        close.addEventListener('click', () => {
            setSearch("");
        });
    }, []);

    return (
        <header className="navigation" id="navigation">
            <div className="navigation-toggle">
                <input type="checkbox" id="check-toggle" hidden/>
                <label className="label-toggle" for="check-toggle">
                    <img className="image-toggle" src={require('./../../images/hamburger.png')}/>
                </label>
                <ul className="navigation-list">
                    <li className="navigation-list__item"><Link to={"/now_playing"} className="navigation-list__link">Now Playing</Link></li>
                    <li className="navigation-list__item"><Link to={"/top_rated"} className="navigation-list__link">Top Rated</Link></li>
                    <li className="navigation-list__item"><Link className="navigation-list__link">Surprise Me</Link></li>
                </ul>
            </div>
            <div className="navigation-search">
                <input type="checkbox" id="check-search" hidden/>
                <label for="check-search" className="label-search">
                    <img className="image-search" src={require('./../../images/search.png')}/>
                </label>
                <div className="field-search">
                    <input type="search" id="input-search" className="input-search" placeholder="Search for the movie..." value={search} onChange={(e) => { setSearch(e.target.value)}}/>
                    <img id="close-search" className="close-search" src={require("./../../images/close.png")}/>
                </div>
            </div>
            <div className="logo-item">
                <Link to={"/now_playing"}><img className="image-logo" src={require('./../../images/logo.png')}/></Link>
            </div>
        </header>
    );
}

export default NavBar;