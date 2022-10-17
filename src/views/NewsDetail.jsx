import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Spinner } from "react-bootstrap";
import "../styles/news.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function NewsDetail(props) {

  const { newsId } = useParams();
  const navigate = useNavigate();
  const [newsDetails, setNewsDetails] = useState(null);

  
useEffect(() => {
    axios.get(`http://localhost:5005/api/news/${newsId}`)
    .then((response) => {
    setNewsDetails(response.data);
  })
  .catch((e) => console.log("error getting News from api", e))
},[])


  useEffect( () => {
    handleSubmit();
},[]);


  const handleSubmit = () => {
      if(newsDetails){
        const requestBody =  {
        
            title: newsDetails.title || null,
            text: newsDetails.text || null,
            image: newsDetails.image || null,
            date: newsDetails.date || null,
          
    }

    axios.put(`http://localhost:5005/api/news/${newsId}`,requestBody    )
      .then(() => {
          props.getNews();
          navigate("/news")
      })
      .catch((err) => console.log("error archiving News from api", err));
  };
      }

  return (
    <>
      <h1>the news</h1>

      <br />
      <br />

      <section className="news-card">
        {props.news === null ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
            <Card style={{ width: "28rem" }} key={newsDetails._id}>
                      <Card.Img variant="top" src={newsDetails?.image} />
                      <Card.Body>
                    <Card.Title>{newsDetails?.title}</Card.Title>
                    <Card.Subtitle> {newsDetails?.date}</Card.Subtitle>
                    <Card.Text>{newsDetails?.text}</Card.Text>
                    <Button variant="primary" onClick={handleSubmit}>
                      Archivar
                    </Button>
                  </Card.Body>
                   </Card>
        )}
        <br /> <br />
      </section>
    </>
  );
}

export default NewsDetail;
