import React from "react";

import ClientSingleCard from "./ClientSingleCard";

const ClientsCard = ({clients}) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {clients.map((item) => (
        <ClientSingleCard key={item.id} client={item}/>
      ))}
    </div>
    )
}

export default ClientsCard