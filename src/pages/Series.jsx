import { useState } from "react";
import useContentful from "../services/getContentful";
import { useEffect } from "react";
import HomeNavBar from "../components/HomeNavBar";
import { helpers } from "../generalHelpers/contentfulHelpers";
import { getDataByGenera } from "../utils/getDataByGenera";
import Carrusel from "../components/carrusel";
import Footer from "../components/carrusel";

export default function Series(){
      const [isLoading, setLoading] = useState(true);
  const [content, setContent] = useState();
  // const [genres, setGenres] = useState();

  useEffect(() => {
    //traer los datos y limpiandolos
    useContentful.getData().then((data) => {
      if (data) {
        const content = helpers.contentfulClean(data);
        const tmp = getDataByGenera(content);
        setContent(tmp);
        setLoading(false);
      }
    });
  }, [isLoading]);

  if (isLoading) {
    return <h1>Loading.........</h1>;
  }
  return (
    <div className="bg-black/90 ">
      <div className="relative z-10">
        <HomeNavBar />
      </div>
      <div className="z-0">
        {Array.from(content).map(([key, value]) => (
          <Carrusel
            key={key}
            content={value.series}
            id="1"
            genre={key}
          />
        ))}
      </div>
      <div><Footer/></div>
    </div>
  );
}