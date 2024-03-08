import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dir } from "../environment/config";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";


const CreateClients = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitud, setLongitud] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  
  const handleSaveClient = () => {
    const data = {
      name,
      email,
      telephone,
      latitude,
      longitud
    };

    setLoading(true);

    axios
      .post(`${dir}/clients`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert('An error happened');

      });
  };

  return (
    <>
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Create Clients</h1>
        {loading ? <Spinner /> : ''}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full"/>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Email</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full"/>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Telephone</label>
            <input type="number" value={telephone} onChange={(e)=>setTelephone(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full"/>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Latitude</label>
            <input type="number" value={latitude} onChange={(e)=>setLatitude(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full"/>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Longitud</label>
            <input type="number" value={longitud} onChange={(e)=>setLongitud(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full"/>
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleSaveClient}>Save</button>
        </div>
        </div>
    </>
      )
}

export default CreateClients
