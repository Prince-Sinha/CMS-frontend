import Button from "./../components/Button";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Cookie from "js-cookie";
import { ToastContainer, toast } from "react-toastify";

export default function ChooseT() {
  const { Id, floorId, gender } = useParams();
  const [washroomDetails, setWashroomDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://backend.ankitkumar143872.workers.dev/api/v1/cleaner/get-washrooms`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookie.get("uuid")}`,
        },
        body: JSON.stringify({ floorId }),
      }
    )
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) {
          toast.error("Wrong Phone Number or Password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          return;
        }
        console.log(json.washrooms);
        setWashroomDetails(json.washrooms);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const washroomGenderList = washroomDetails.filter((washroom) =>
    washroom.washroom_name.startsWith(gender)
  );

  const handleChange = (Tid) => {
    console.log(Tid);
    navigate(`/${Id}/${floorId}/${gender}/${Tid}`);
  };

  return (
    <>
      <Header />
      <div className="container">
        {washroomGenderList.map((el) => {
          return (
            <button
              key={el.id}
              onClick={() => handleChange(el.id)}
              className="btn"
            >
              {el.washroom_name}
            </button>
          );
        })}
      </div>
    </>
  );
}
