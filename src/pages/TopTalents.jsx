import React, { useState, useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const TopTalents = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = "https://randomuser.me/api/?results=15";
  const timeout = 5000;

  function fetchDataWithTimeout() {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Timeout error: The request took too long."));
      }, timeout);
    });

    const fetchDataPromise = fetch(apiUrl).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });

    return Promise.race([fetchDataPromise, timeoutPromise]);
  }
  console.log(data);
  useEffect(() => {
    fetchDataWithTimeout()
      .then((userData) => {
        setData(userData.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  if (loading) {
    return (
      <div className="loader-container">
        <div className="lds-dual-ring"></div>
      </div>
    );
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
          {/* {data.length > 0 && (
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
          )} */}
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
            {data.map((user) => (
              <div className="card" key={user.login.uuid}>
                <Link
                  className="card"
                  to={`/user/${user.login.uuid}`}
                  onClick={() => console.log(user.login.uuid)}
                >
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
                </Link>
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
