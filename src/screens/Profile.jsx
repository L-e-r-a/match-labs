import React from "react";
import { useState, useEffect } from 'react';
import Card from "../components/Card";
import Loader from "../components/Loader";
import styles from "./Profile.module.css";
import Tags from "../components/Tags";
import getDataFromApi from '../utils';

const Profile = (props) => {

  // API URL && Initial State
  const labsUrl = "https://match-labs-api.herokuapp.com/api/no_auth/labs";
  const [profile, updateProfile] = useState({});
  const [loading, updateLoading] = useState(true);

  // Request API Data for Lab by ID
  useEffect(() => {
    const stopLoading = getDataFromApi(labsUrl, updateProfile, (data) => {
      return data.find((lab) => lab.id === parseInt(props.match.params.id));
    });
    updateLoading(stopLoading);
  }, []);



  return (
    <>
      {/* Show Loading Component until API response */}
      {loading ? (<Loader />) : (
        <div className={styles.profile}>
          <div className={styles.hero}>
            {profile.company && <Card imgUrl={profile.company.profile_image}></Card>}
          </div>

          <div className={styles.rightSide}>
            <h3 className={styles.name}>{profile.name}</h3>

            <section className={styles.skills}>
              <p className={styles.tagsTitle}>Technologies</p>
              {profile.technologies && <Tags tags={profile.technologies}></Tags>}
            </section>

            <section className={styles.objectives}>
              <h4 className={styles.heading}>Objectives</h4>
              <p>{profile.objectives}</p>
            </section>

            <section className={styles.description}>
              <h4 className={styles.heading}>About</h4>
              {profile.company && profile.company.description}
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
