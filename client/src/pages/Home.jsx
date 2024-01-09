import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;


const Home = ({type}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);


  return (
    <>
      <Container>
        {Array.isArray(videos)
          ? videos.map((video) => <Card key={video?._id} video={video} />)
          : null}

      </Container>
          {/* static video */}
    <video controls width="650" height="500">
      <source 

        src="assets\screen-capture.webm" 
        type="video/webm" />

      <p>
            Votre navigateur ne prend pas en charge les vidéos HTML5. Voici
        <a href="assets\screen-capture.webm">un lien pour télécharger la vidéo</a>.
      </p>
    </video>  
          
  </> 
  );
};

export default Home;