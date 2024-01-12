import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PrimaGallery from './PrimaGallery';


const MyGallery = ()=> {
const saga = ['avatar','harry potter','the matrix']

//     const [films, setFilms] = useState([]);

//   const fetchData = async () => {
//     try {
//       const res = await fetch(
//         'http://www.omdbapi.com/?s='+saga+'&apikey=1a73cf6e'
//       );
//       if (res.ok) {
//         let data = await res.json();
//         setFilms(data.Search);
//         console.log(data.Search);
//       } else {
//         console.log('error');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//    fetchData();
//   }, []);
    return (
        <>
        <Container >
        <Row >
        
            <Col >
                 
     {saga.map((saga) =>(<PrimaGallery saga={saga} key={saga}/>))}
    </Col>
        </Row>
        </Container>

        </>
    )
}
export default MyGallery