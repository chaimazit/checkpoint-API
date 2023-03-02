import React from "react";

const UserItem = ({ list }) => {
  const { name, username, email, address, phone, website, company } = list;
  const { street, suite, city, zipcode } = address;
  const { bs, catchPhrase } = company;
  return (
    <div className="card">
      <h3
        style={{ fontStyle: "itallic", textAlign: "center", color: "#446382" }}
      >
        {name}
      </h3>
      <p>Username: {username}</p>
      <p>User's Email: {email}</p>
      <h5>Address</h5>
      <p>Street: {street} </p>
      <p> {suite} </p>
      <p>City: {city} </p>
      <p> {zipcode} </p>
      <p>Phone: {phone}</p>
      <p>Website{website}</p>
      <h5>company</h5>
      <p>{company.name}</p>
      <p>{bs}</p>
      <p>{catchPhrase}</p>
    </div>
  );
};

export default UserItem;