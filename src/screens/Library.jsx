import React, {useEffect, useState} from "react";
import styles from "./Library.module.css";

import Loader from "../components/Loader";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import {Link} from "react-router-dom";

import {fetchMatches, fetchLikes} from "../utils";
import Filter from "../components/Filter";

const Library = (props) => {

  const [matches, setMatches] = useState(null);
  const [likes, setLikes] = useState(null);
  const [data, setData] = useState(null);
  

  useEffect(() => {

    const onMount = async () => {
      getData();
    }
    onMount();
    
  }, []);

  const getData = async () => {
    const matches = await fetchMatches();
    const likes = fetchLikes();
    setMatches(matches);
    setLikes([likes]);
    setData(matches);
  }


  const onFilterClick = (name, item) => {
    const data = name === "matches" ? matches : likes; 
    setData(data);
  }

  if (!data) return <Loader />;


  return(
    <>
      <PageTitle>
          <h3>Library</h3>
      </PageTitle>

      <Filter handleItemClick={onFilterClick}/>

      <div className={"box-wide"}>
          <div className={styles.cards}>
              {data.map(match => (
                  <Link key={match.id} to={`/profile/${match.id}`}>
                      <Card
                        imgUrl={match.profile_image}
                        name={match.name}
                        technologies={match.technologies}
                      ></Card>
                  </Link>
              ))}
          </div>
      </div>
    </>
  );
};

export default Library;
