import { useState } from "react";
import useContentful from "../services/getContentful";
import { useEffect } from "react";
import HomeNavBar from "../components/HomeNavBar";
import { helpers } from "../generalHelpers/contentfulHelpers";
import { getDataByGenera } from "../utils/getDataByGenera";
import Carrusel from "../components/carrusel";
import Footer from "../components/Footer";

function Home() {
  const [content, setContent] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    //traer los datos y limpiandolos
    useContentful.getData().then((data) => {
      if (data) {
        const cleanContent = helpers.contentfulClean(data);
        const aux = getDataByGenera(cleanContent);
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
      <div className="relativez-10">
        <HomeNavBar />
      </div>
      <div className="z-0 my-3">
        {Array.from(content).map(([key, val]) => (
          <Carrusel
            key={key}
            content={[...val.movies, ...val.series]}
            id={key}
            genre={key}
          />
        ))}
      </div>
      <div>
        <Footer estilo="bg-black/90" estiloSm="bg-black/90" />
      </div>
    </div>
  );
}

export default Home;