import React from "react";
import { FaDesktop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
            {/* Left Section: Logo */}
            <div className="flex items-center space-x-2">
                <div className="bg-purple-500 p-2 rounded-md">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                </div>

            </div>

            {/* Center Section: Controls */}




            <div className="flex items-center space-x-2">

                <div>
                    <h1 className="text-gray-600 text-lg font-semibold">Project ABC</h1>
                    <p className="text-sm text-gray-400">Canvas Size 1440 x 1024 (px)</p>
                </div>

                <div style={styles.toolbar}>

                    <div style={styles.deviceIcons}>
                        <FaDesktop style={styles.icon} title="Desktop" />
                        <FaTabletAlt style={styles.icon} title="Tablet" />
                        <FaMobileAlt style={styles.icon} title="Mobile" />
                    </div>

                </div>


                <button className="w-8 h-8 flex items-center justify-center border rounded-md">
                    <svg className="h-5 w-5 text-gray-500" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center border rounded-md">
                    <svg className="h-5 w-5 text-gray-500" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
                <div className="flex items-center border rounded-md p-1">
                    <button className="px-1 text-gray-500">-</button>
                    <span className="px-2 text-gray-700">100%</span>
                    <button className="px-1 text-gray-500">+</button>
                </div>
            </div>

            {/* Right Section: Actions */}
            <div className="flex items-center space-x-3">
                <button className="bg-purple-500 text-white py-1 px-4 rounded-md">Preview</button>
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
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#ffff',
        borderBottom: '1px solid #ddd',
    },
    projectName: {
        fontSize: '18px',
        fontWeight: 'bold',
    },
    deviceIcons: {
        display: 'flex',
        gap: '10px',
    },
 
};


export default Header;
