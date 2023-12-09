import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const TopTalentsDetails = () => {
  const { uuid } = useParams;
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  return (
    <div>
      <div className="">
        {userDetails && (
          <div className="">
            <img src={userDetails.picture.large} alt="" />
            <p>Name: {`${userDetails.name.first} ${userDetails.name.last}`}</p>
            <p>
              <MdLocationOn /> {user.location.state} {", "}{" "}
              {user.location.country}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopTalentsDetails;
