import { Button, Card, Col, Row } from "react-bootstrap";
import { Result } from "../interface/NNews";
import { Link } from "react-router-dom";

interface NewsProp {
  news: Result;
}

const NewsViews = ({ news }: NewsProp) => {
  return (
    <Link to={`/${news.id}`}>
      <Card>
        <Card.Img variant="top" src={news.image_url} width={"200px"} />
        <Card.Body>
          <Card.Title>
            {" "}
            <h3>{news.title}</h3>
          </Card.Title>
          <Card.Text>{news.summary}</Card.Text>
        </Card.Body>
        <Card.Text>Caricato il{news.published_at}</Card.Text>
      </Card>
    </Link>
  );
};

export default NewsViews;
