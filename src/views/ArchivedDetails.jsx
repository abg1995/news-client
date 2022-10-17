import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Spinner } from "react-bootstrap";
import "../styles/news.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ArchivedDetails(props) {

  const { archivedId } = useParams();
  const navigate = useNavigate();
  const [archivedDetails, setArchivedDetails] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5005/api/archived/${archivedId}`)
      .then((response) => {
        setArchivedDetails(response.data);
      })
      .catch((e) => console.log("error getting archived News from api", e))
  }, []);


  const deleteArchived = () => {
    axios.delete(`http://localhost:5005/api/archived/${archivedId}`)
      .then(() => {
        props.getArchived();
        navigate("/archived");
      })
      .catch((err) => console.log("error deleting News from api", err));
  };

  return(
<>
<h1>Archived details</h1>

<section className="news-card">
        {props.archived === null ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
            <Card style={{ width: "28rem" }} key={archivedDetails._id}>
                      <Card.Img variant="top" src={archivedDetails?.image} />
                      <Card.Body>
                    <Card.Title>{archivedDetails?.title}</Card.Title>
                    <Card.Subtitle> {archivedDetails?.date}</Card.Subtitle>
                    <Card.Text>{archivedDetails?.text}</Card.Text>
                    <Button variant="primary" onClick={deleteArchived}>
                      Eliminar
                    </Button>
                  </Card.Body>
                   </Card>
        )}
        <br /> <br />
      </section>
</>

  ) 
}

export default ArchivedDetails;
