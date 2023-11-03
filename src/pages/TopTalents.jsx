import React, { useState, useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";
import Footer from "../components/footer";
const TopTalents = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userFetch = 12;
    const fetchPromises = Array.from({ length: userFetch }, () =>
      fetch("https://randomuser.me/api/").then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
    );

    Promise.all(fetchPromises)
      .then((userData) => {
        const users = userData.map((response) => response.results[0]);
        setData(users);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  console.log(data);
  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="ferror">Error: {error.message}</p>;
  }
  return (
    <div>
      <Navbar />
      <div className="top_talent_head">
        <h2>Green Energy Talents</h2>
        <p>Browse for talents. Filter your search below</p>
        <div className="topthflex">
          <p>Filtered By:</p>
          {data.length > 0 && (
            <select className="">
              <option value="">All Locations (states)</option>
              {data.map((user, index) => (
                <option key={index} value="">
                  {user.location.state}
                </option>
              ))}
            </select>
          )}
          {data.length > 0 && (
            <select className="">
              <option value="">Years of Experience</option>
              {data.map((user, index) => (
                <option key={index} value="">
                  {user.registered.age}
                </option>
              ))}
            </select>
          )}
          <select name="" id="">
            <option value="">Badge</option>
            <option value="">Sunking</option>
            <option value="">Koolboks</option>
          </select>
        </div>
      </div>
      <div className="top-talent">
        {data.length > 0 && (
          <div className="flex_container">
            {data.map((user, index) => (
              <div className="card" key={index}>
                <div className="center">
                  <img
                    src={user.picture.large}
                    alt={`User ${user.name.first}`}
                  />
                </div>
                <h3>
                  {user.name.first} {user.name.last}
                </h3>
                <p>
                  <MdLocationOn /> {user.location.state} {", "}{" "}
                  {user.location.country}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
      <MainFooter />
    </div>
  );
};

export default TopTalents;
