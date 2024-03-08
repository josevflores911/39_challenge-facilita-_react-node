import React from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle,BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import ClientModal from "./ClientModal";

const ClientSingleCard = ({ client }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div key={client.id}
          className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
          <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
            tlf: {client.telephone}
          </h2>
          <h4 className="my-2 text-gray-500">{client.id}</h4>
          <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className="text-red-300 text-2xl" />
            <h2 className="my-1">{ client.email}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-red-300 text-2xl" />
            <h2 className="my-1">{ client.name}</h2>
          </div>
          <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                <BiShow className="text-3xl text-blue-800 hover:text-black cursor-pointer"
                onClick={()=>setShowModal(true)}/>
            <Link to={`/clients/details/${client.id}`}>
              <BsInfoCircle className="text-2xl text-green-800 hover:text-black"/>info
            </Link>  
            <Link to={`/clients/edit/${client.id}`}>
              <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black"/>edit
            </Link>  
            <Link to={`/clients/delete/${client.id}`}>
              <MdOutlineDelete className="text-2xl text-red-600 hover:text-black"/>delete
            </Link>  
          </div>
            {showModal && (<ClientModal client={client} onClose={()=>setShowModal(false)} />)}
        </div>
    )
}

export default ClientSingleCard