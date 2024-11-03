import React, { useState } from "react";
import { DevicesProvider, useEditor } from "@grapesjs/react";

import arrowIcon from "./image/Vector (1).png";
import plusIcon from "./image/Vector.png";
import angel from "./image/Rectangle 4010.png";
import share from "./image/ShareNetwork (1).png";
import { grey } from "@mui/material/colors";

const Header = () => {
  const editor = useEditor();
  const [selectedDevice, setSelectedDevice] = useState("Desktop");

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-purple-500 p-2 rounded-md">
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </div>

      <div style={{ position: "absolute", left: "300px" }}>
        <h1 className="text-gray-600 text-lg font-semibold">Project ABC</h1>
        <p className="text-sm text-gray-400">Canvas Size 1440 x 1024 (px)</p>
      </div>

      {/* Center Section: Controls */}
      <div className="flex items-center space-x-4">
        {/* Device Selection with Border */}
        <div style={{ ...styles.deviceSelector, marginLeft: "20px" }}>
          <div style={styles.deviceIcons}>
            <DevicesProvider>
              {({ selected, select, devices }) => (
                <select
                  value={selected}
                  onChange={(e) => select(e.target.value)}
                >
                  {console.log(devices)}
                  {devices.map((device) => (
                    <option value={device.id} key={device.id}>
                      {device.getName()}
                      <img
                        src={`${device.getName()}Icon`}
                        style={{
                          ...styles.icon,
                          ...(selectedDevice === device.id
                            ? styles.selectedIcon
                            : {}),
                        }}
                        onClick={() => setSelectedDevice(device.id)}
                        title={device.id}
                        alt={device.id}
                      />
                    </option>
                  ))}
                </select>
              )}
            </DevicesProvider>

            
          </div>
        </div>
        <button>
          <img src={angel} alt="Plus" className="h-10 " />
        </button>

        <div
          className="flex items-center border p-1"
          style={{ borderRadius: "30px", marginLeft: "20px" }}
        >
          <button className="px-1 text-gray-500">-</button>
          <span className="px-2 text-gray-700">100%</span>
          <button className="px-1 text-gray-500">+</button>
        </div>

        <button>
          <img src={angel} alt="Plus" className="h-10" />
        </button>

        {/* Right Section: Actions */}

        <button>
          <img src={arrowIcon} alt="Arrow" className="h-5 w-5" />
        </button>

        <button>
          <img src={angel} alt="Plus" className="h-10 " />
        </button>

        <button>
          <img src={plusIcon} alt="Plus" className="h-5 w-5" />
        </button>

        <button>
          <img src={angel} alt="Plus" className="h-10 " />
        </button>

        <button>
          <img src={share} alt="share" />
        </button>

        <div className="text-gray-500">Share</div>

        <button className="bg-purple-500 text-white py-1 px-4 rounded-md">
          Preview
        </button>
        <img
          src="https://via.placeholder.com/32"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

const styles = {
  deviceSelector: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "12px", // Rounded corners
    backgroundColor: "#f9f9f9", // Light background
    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
  },
  deviceIcons: {
    display: "flex",
    gap: "10px",
  },
  icon: {
    width: "24px",
    height: "24px",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  selectedIcon: {
    transform: "scale(1.1)", // Slightly enlarges the selected icon
  },
};

export default Header;
