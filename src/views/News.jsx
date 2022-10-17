import Card from "react-bootstrap/Card";
import { NavLink, Spinner } from "react-bootstrap";
import "../styles/news.css";

function News(props) {


  const renderNews = () => {
    const result = props?.news?.map((element) => {
      return (
        <Card style={{ width: "18rem" }} key={element._id}>
          <Card.Img variant="top" src={element?.image} />
          <Card.Body>
            <Card.Title>{element?.title}</Card.Title>
            <Card.Subtitle> {element?.date}</Card.Subtitle>
            <NavLink href={`/news/${element?._id}`} >
              Mas info
            </NavLink>
          </Card.Body>
        </Card>
      );
    });
    return result;
  };

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
          renderNews()
        )}
        <br /> <br />
      </section>
    </>
  );
}

export default News;
