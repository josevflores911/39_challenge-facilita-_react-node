import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { dir } from "../environment/config";
import ClientsTable from "../components/home/ClientsTable";
import ClientsCard from "../components/home/ClientsCard";

const Home = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  //const [showType, setShowType] = useState('card')

  const [showModal, setShowModal] = useState(false);

    
    

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${dir}/clients`)
      .then((response) => {
        setClients(response.data.data);
        //console.log(response.data)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
    
    const handleFilterClient = (userInput) => {
     
        let filterClients = [...clients];
        filterClients=[...filterClients.filter(obj => obj.name.toLowerCase().startsWith(userInput.toLowerCase()))];

        console.log(filterClients)

        setClients(filterClients)

    }

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowModal(true)}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowModal(false)}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8 mx-4">Clients List</h1>
        <Link to="/clients/create">
          <MdOutlineAddBox className="text-sky-800 text-4x1" />
        </Link>
      </div>
      <input
              type="text"
              onChange={(e)=>{handleFilterClient(e.target.value)}}
        className="m-4 text-blue-600 border border-blue-300 rounded outline-indigo-700"
        placeholder="Search..."
      />
      {loading ? (
        <Spinner />
      ) : showModal ? (
        <ClientsTable clients={clients} onClose={() => setShowModal(false)} />
      ) : (
        <ClientsCard clients={clients} />
      )}
    </div>
  );
};

export default Home;
