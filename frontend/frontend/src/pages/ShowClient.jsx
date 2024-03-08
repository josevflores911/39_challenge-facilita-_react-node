import axios from "axios";
import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

import {dir} from '../environment/config.js'
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";

const ShowClient = () => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${dir}/clients/${id}`)
      .then((response) => {
        console.log("here");
        console.log(response.data);
        setClient(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Show Client</h1>
        {loading ? (<Spinner />) : (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="my-4">
              <span className="text-x1 mr-4 text-gray-500">ID</span>
              <span>{ client.id}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 mr-4 text-gray-500">Name</span>
              <span>{ client.name}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 mr-4 text-gray-500">Email</span>
              <span>{ client.email}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 mr-4 text-gray-500">Telephone</span>
              <span>{ client.telephone}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 mr-4 text-gray-500">Latitude</span>
              <span>{ client.latitude}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 mr-4 text-gray-500">Longitud</span>
              <span>{ client.longitud}</span>
            </div>
            {/* {<div className="my-4">
              <span className="text-x1 mr-4 text-gray-500">Create Time</span>
              <span>{ new Date(book.createAt).toString()}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 mr-4 text-gray-500">Last Update Time</span>
              <span>{ new Date(book.updateAt).toString()}</span>
            </div>} */}
          </div>
        )}
      </div>
    </>
      )
}

export default ShowClient