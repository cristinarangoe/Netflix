import { useState } from "react";
import useContentful from "../services/getContentful";
import { useEffect } from "react";
import HomeNavBar from "../components/HomeNavBar";
import { helpers } from "../generalHelpers/contentfulHelpers";
import { getDataByGeneraSeries } from "../utils/getDataByGenera";
import Carrusel from "../components/carrusel";
import Footer from "../components/Footer";

function Series() {
  const [content, setContent] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    //traer los datos y limpiandolos
    useContentful.getData().then((data) => {
      if (data) {
        const cleanContent = helpers.contentfulClean(data);
        const aux = getDataByGeneraSeries(cleanContent);
        setContent(aux);
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
      <div className="z-0 my-3">
        {Array.from(content).map(([key, val]) => (
          <Carrusel key={key} content={val} id={key} genre={key} />
        ))}
      </div>
      <div>
        <Footer estilo="bg-black/90" estiloSm="bg-black/90" />
      </div>
    </div>
  );
}

export default Series;