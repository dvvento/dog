import React, { useState } from "react";

function DogApp() {
  const [dogImg, setDogImg] = useState("");
  const [loading, setLoading] = useState(false);

  async function getDog() {
    setLoading(true);

    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setDogImg(data.message);
    } catch (error) {
      console.log("Ошибка:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button onClick={getDog}>Get Dog</button>

      {loading && <p>Loading...</p>}

      {dogImg && (
        <div>
          <img
            src={dogImg}
            alt="dog"
            style={{ width: "300px", marginTop: "20px" }}
          />
        </div>
      )}
    </div>
  );
}

export default DogApp;
