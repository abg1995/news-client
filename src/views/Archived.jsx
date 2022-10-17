import Card from "react-bootstrap/Card";
import { NavLink, Spinner } from "react-bootstrap";
import "../styles/news.css";

function Archived(props) {

  
  const renderArchived = () => {
    const solution = props?.archived?.map((element) => {
      return (
        <Card style={{ width: "18rem" }} key={element?._id}>
          <Card.Img variant="top" src={element?.image} />
          <Card.Body>
            <Card.Title>{element?.title}</Card.Title>
            <Card.Subtitle> {element?.date}</Card.Subtitle>
            <NavLink variant="primary" href={`/archived/${element?._id}`}>
              Mas info
            </NavLink>
          </Card.Body>
        </Card>
      );
    });
    return solution.sort().reverse();
  };

  
  return (
    <>
      <h1>Archived news</h1>

      <section className="news-card">
        <br />
        {props.archived === null ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          renderArchived()
        )}
        <br /> <br />
      </section>
    </>
  );
}

export default Archived;
