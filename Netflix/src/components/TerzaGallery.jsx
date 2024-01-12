const TerzaGallery = ({film})=> {
    return (
        <>
        <section className="container ">
        <div className="row  mb-5">
            {/* <h4> Trending Now</h4> */}
            <div className="col-2 "><img src={film.Poster} alt={film.Title} width="111%"  height="auto" /></div>
 
 
       
        </div>
        </section>
        </>
    )
}
export default  TerzaGallery