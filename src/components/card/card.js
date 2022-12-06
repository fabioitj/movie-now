/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovieById } from "../../hooks/movieApi";
import "./card.css";

const Card = ({ id, title, subtitle, year, image }) => {
  useEffect(() => {
    const card = document.getElementById("card_" + id);
    card.addEventListener("click", function () {
      unturn_cards();
      turn_actual_card(card);

      getMovieById(id).then((response) => {});
    });
  }, []);

  const turn_actual_card = (card) => {
    card.classList.add("card-turned");
  };

  const unturn_cards = () => {
    const cardsExistentes = document.getElementsByClassName("card");
    for (let cardExistente of cardsExistentes) {
      cardExistente.classList.remove("card-turned");
    }
  };

  return (
    <div className="card" id={"card_" + id}>
      <div className="card-view">
        <img className="card-view__image" src={image} />
        <div className="card-content">
          <div className="card-content__text">
            <h2 className="card-content__title">{title}</h2>
            <p className="card-content__subtitle">{subtitle}</p>
            <p className="card-content__year">{year}</p>
          </div>
          <Link className="card-content__button" to={"/"+id}>
            Assistir
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
