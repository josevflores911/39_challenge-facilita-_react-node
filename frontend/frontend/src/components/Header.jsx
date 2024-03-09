import React from "react";
// import { Menu, X } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Placeholder for the logo - replace with <img> tag or similar if you have an URL */}
          <div className="w-10 h-10 bg-gray-500 mr-2 flex items-center justify-center rounded text-gray-800 font-bold">J</div>
          <span className="text-xl font-bold">My Website</span>
        </div>
      </div>
    </header>
  );
};

export default Header;