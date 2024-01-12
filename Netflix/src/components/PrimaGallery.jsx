import { useState,useEffect } from 'react';
const PrimaGallery = ({saga})=> {
    const [films, setFilms] = useState([]);

    const fetchData = async () => {
      try {
        const res = await fetch(
          'http://www.omdbapi.com/?s='+saga+'&apikey=1a73cf6e'
        );
        if (res.ok) {
          let data = await res.json();
          setFilms(data.Search);
          console.log(data.Search);
        } else {
          console.log('error');
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
     fetchData();
    }, []);
    return (
        <>
        <section className="container ">
        <div className="row  mb-5">
            <h4> {saga}</h4>
            {films.slice(0,6).map((film)=>
            <a href="" className="col-2 d-flex "key={film.imdbID}><img src={film.Poster} alt={film.Title} width="200%"  height="auto" /></a>
            )}
       
        </div>
        </section>
        </>
    )
     
}
export default  PrimaGallery