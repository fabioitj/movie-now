import { useEffect, useState } from "react";
import Card from "../../components/card/card";
import Pagination from "../../components/pagination/pagination";
import { getMoviesBySearch } from "../../hooks/movieApi";

const Movies = ({search}) => {
    const [page, setPage] = useState(1);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        getMoviesBySearch(null, null)
        .then((response) => {
            response.map((item) => {
                item.subtitle = item.overview;
                item.year = item.release_date.substr(0, 4);
                item.image = item.poster;
            });
            setLista(response);
        });
    }, []);

    useEffect(() => {
        if(search && search.length > 3){
            getMoviesBySearch(page, search)
            .then((response) => {
                response.map((item) => {
                    item.subtitle = item.overview;
                    item.year = item.release_date.substr(0, 4);
                    item.image = item.poster;
                });
                setLista(response);
            });
        }
    }, [page, search]);

    return (
        <>
            {
                lista.map((item) => {
                    return <Card id={item.id} title={item.title} subtitle={item.subtitle} year={item.year} image={item.image}/>
                })
            }
            <Pagination page={page} setPage={setPage}/>
        </>
    );
}

export default Movies;