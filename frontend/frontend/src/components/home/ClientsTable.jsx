import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { dir } from "../../environment/config";
import Spinner from "../Spinner";

const ClientsTable = ({ clients, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [orderArray, setOrderArray] = useState([]);
  const [distance, setDistance] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${dir}/clients/map`)
      .then((response) => {
        setOrderArray(response.data.data.arrayPositions);
        setDistance(response.data.data.minDistanceresult);
        console.log(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  clients.sort((a, b) => orderArray.indexOf(a.id) - orderArray.indexOf(b.id));

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      {loading ? (
        <Spinner />
      ) : (
        <div
          onClick={(event) => event.stopPropagation()}
          className="w-[1000px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
        >
          <AiOutlineClose
            className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
            onClick={onClose}
          />
          <h1 className="text-3xl my-4">
            Client Route List
          </h1>
          <table className="w-full  p-6 border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No</th>
                <th className="border border-slate-600 rounded-md">Name</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Email
                </th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Telephone
                </th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Latitude
                </th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Longitud
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={client.id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {client.name}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {client.email}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {client.telephone}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {client.latitude}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {client.longitud}
                  </td>
                </tr>
              ))}
            </tbody>
            <p className="absolute left-2 mr-10 px-4 py-1  rounded-lg">
              total distance:
            </p>
            <h2 className="absolute right-2 mr-10 px-4 py-1 bg-red-300 rounded-lg">
              {distance}
            </h2>
          </table>
        </div>
      )}
    </div>
  );
};

export default ClientsTable;
