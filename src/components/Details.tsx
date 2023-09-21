import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NewsDetails } from "../interface/NNews";
import Image from "react-bootstrap/Image";
import { Button, Container } from "react-bootstrap";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<NewsDetails | null>(null);

  const URLDetails = "https://api.spaceflightnewsapi.net/v4/articles/";
  const getNews = async () => {
    try {
      const response = await fetch(URLDetails + id);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setDetails(data);
        console.log(details);
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
    <Container>
      <Link to={"/"}>
        <Button>Homepage</Button>
      </Link>
      <h2 className="text-start">{details?.news_site}</h2>
      <Link to={`${details?.url}`}>
        <h1 className="text-decoration-none">{details?.title}</h1>
      </Link>
      <Image src={details?.image_url} fluid />
      <p>{details?.summary}</p>
      <p>Pubblicato il {details?.published_at}</p>
      <p>Aggiornato il {details?.updated_at}</p>
    </Container>
  );
};

export default Details;
