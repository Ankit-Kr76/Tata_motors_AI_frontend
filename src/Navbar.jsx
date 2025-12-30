import React from "react";

function Navbar() {
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Brand Name */}
          <div className="flex items-center gap-2">
            {/* Optional: You could add a logo icon here */}
            <h1 className="text-white text-sm font-bold tracking-tight">
              Tata Motors ChatBot
            </h1>
          </div>

          {/* Right Side: Tagline / Badge */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
