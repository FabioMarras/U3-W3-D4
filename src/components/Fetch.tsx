import { useEffect, useState } from "react";
import { Result } from "../interface/NNews";
import NewsViews from "./NewsViews";
import { Col, Container, Row } from "react-bootstrap";

const Fetch = () => {
  const URL = "https://api.spaceflightnewsapi.net/v4/articles/";

  const [news, setNews] = useState<Result[]>([]);

  const getNews = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        console.log(data.results);
        setNews(data.results);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        {news.map((newNews) => (
          <Col xs={12} md={4} lg={3} key={`id-${newNews.id}`}>
            <NewsViews news={newNews} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Fetch;
