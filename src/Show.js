import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Badge,
  Card,
  CardImg,
  CardTitle,
  CardBody,
  Row,
  Col,
} from "reactstrap";

function Show({ show_id }) {
  const [show, setShow] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${show_id}`)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        setShow(res);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`https://api.tvmaze.com/shows/${show_id}/episodes`)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        setEpisodes(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [show_id]);

  if (!show) return <div>Loading...</div>;

  return (
    <Container>
      <section className="banner">
        <div
          className="banner-image"
          style={{
            backgroundImage: `url(${show.image.original})`,
          }}
        />
        <div>
          <h1>{show.name}</h1>
          {show.genres.map((genre) => (
            <Badge color="secondary" style={{ marginRight: 10 }}>
              {genre}
            </Badge>
          ))}
          <p className="language-container">Language: {show.language}</p>
          <a href={show.officialSite}>Go to official link</a>
        </div>
      </section>
      <div className="bar" />
      <Row>
        {episodes.map((episode) => {
          console.log(episode);
          return (
            <Col md="4" style={{ marginBottom: 20 }}>
              <Card>
                {episode.image && episode.image.original && (
                  <CardImg
                    top
                    width="100%"
                    src={episode.image.original}
                    alt="Card image cap"
                  />
                )}
                <CardBody>
                  <CardTitle tag="h5">{episode.name}</CardTitle>
                  <Badge>Episode: {episode.number}</Badge>
                  <div dangerouslySetInnerHTML={{ __html: episode.summary }} />
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Show;
