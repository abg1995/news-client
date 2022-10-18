import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

function CreateNews(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const createNews = (e) => {
    e.preventDefault();

    const inputs = { title, text, image, date };

    axios
      .post("http://localhost:5005/api/news/post", inputs)
      .then((response) => {
        console.log(response);
        props.getNews();
        navigate("/news");
      })
      .catch((err) => {
        console.log("error creating post of news", err);
      });
  };

  return (
    <>
    <br />
      <h1 className="titles">Crea o escribe un articulo</h1>
      <br />
      <br />
      <section>
        <form onSubmit={createNews}>
            <br />
          <div>
            <label >
              Titulo: &nbsp;&nbsp;&nbsp;
              <input
                type="text"
                name="title"
                value={title}
                required={true}
                onChange={(e) => setTitle(e.target.value)}
              />
              &nbsp;&nbsp;&nbsp;
              <br />
            </label>
          </div>
          <br />
          <br />

          <div>
            <label>
              Texto: &nbsp;&nbsp;&nbsp;
              <textarea
                rows="4"
                cols="50"
                name="text"
                value={text}
                required={true}
                onChange={(e) => setText(e.target.value)}
              />
              &nbsp;&nbsp;&nbsp;
              <br />
            </label>
          </div>
          <br />
          <br />

          <div>
            <label>
              Link imagen: &nbsp;&nbsp;&nbsp;
              <input
                type="text"
                name="image"
                value={image}
                required={true}
                onChange={(e) => setImage(e.target.value)}
              />
              &nbsp;&nbsp;&nbsp;
              <br />
            </label>
          </div>
          <br />

          <div>
            <label>
              Fecha: &nbsp;&nbsp;&nbsp;
              <input
                type="date"
                name="date"
                value={date}
                required={true}
                onChange={(e) => setDate(e.target.value)}
              />
              &nbsp;&nbsp;&nbsp;
              <br />
            </label>
            <br />
            <br />
          </div>

          <Button type="submit">Crear post</Button>
        </form>
      </section>
    </>
  );
}

export default CreateNews;
