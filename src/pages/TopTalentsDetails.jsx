import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MdLocationOn } from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import MainFooter from "../components/MainFooter";
import { Link } from "react-router-dom";

const TopTalentsDetails = () => {
  const { uuid } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("UUID:", uuid);
  useEffect(() => {
    fetch(`https://randomuser.me/api/?seed=${uuid}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUserDetails(data.results[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [uuid]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="lds-dual-ring"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="">
        {userDetails && (
          <div className="">
            {/* <Navbar /> */}
            <div className="border">
              <div className="border_top">
                <img src={userDetails.picture.large} alt="" />
                <div className="border_top_txt">
                  <h1>
                    {`${userDetails.name.first} ${userDetails.name.last}`}
                  </h1>
                  <p>
                    <MdLocationOn /> {userDetails.location.state} {", "}{" "}
                    {userDetails.location.country}
                  </p>
                  <Link to='/login' className="border_btn">
                    Please Login to request a quote
                  </Link>
                </div>
              </div>
              <div className="flex_border">
                <div className="border_left">
                  <div className="overview">
                    <h1>Overview</h1>
                    <p>Summary</p>
                  </div>
                  <hr />
                  <div className="certifications">
                    <h2>Certifications</h2>
                    <p>No Certifications Found!</p>
                    <h2>Languages</h2>
                    <p>English</p>
                    <p>Yoruba</p>
                  </div>
                  <hr />
                  <div className="brands">
                    <h2>Familiar Brands</h2>
                    <p>Huwaei</p>
                    <p>Luminus</p>
                  </div>
                  <hr />
                </div>
                <hr />
                <div className="border_right">
                  <h2>Work Gallery</h2>
                  <div className="img">
                    <img src="/toptalent/work.jpg" alt="" />
                    <img src="/toptalent/work.jpg" alt="" />
                    <img src="/toptalent/work.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
            <MainFooter />
          </div>
        )}
      </div>
    </div>
  );
};

export default TopTalentsDetails;
