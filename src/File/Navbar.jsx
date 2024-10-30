import React from 'react';

// Import images
import HomeIconImage from '../File/Image/bitbucket.png';
import ChartBarIconImage from '../File/Image/Chart.png';
import ArrowTrendingUpIconImage from '../File/Image/Activity.png';
import ChartPieIconImage from '../File/Image/Chart.png';
import FolderIconImage from '../File/Image/Layers_light.png';
import BoltIconImage from '../File/Image/More Circle.png';

const Navbar = () => {
  return (
    <div className="flex flex-col items-center bg-white p-4 h-screen border-r border-gray-200 space-y-4">
      {/* Top Icon */}
      <button className="p-2 rounded-full bg-indigo-100">
        <img src={HomeIconImage} alt="Home" className="h-8 w-8" />
      </button>

      {/* Other Icons */}
      <button className="p-3 rounded-full bg-gray-200">
        <img src={ChartBarIconImage} alt="Chart Bar" className="h-6 w-6" />
      </button>
      <button className="p-3 rounded-full bg-gray-100">
        <img src={ArrowTrendingUpIconImage} alt="Trending Up" className="h-6 w-6" />
      </button>
      <button className="p-3 rounded-full bg-gray-100">
        <img src={ChartPieIconImage} alt="Chart Pie" className="h-6 w-6" />
      </button>
      <button className="p-3 rounded-full bg-gray-100">
        <img src={FolderIconImage} alt="Folder" className="h-6 w-6" />
      </button>
      <button className="p-3 rounded-full bg-gray-100">
        <img src={BoltIconImage} alt="Bolt" className="h-6 w-6" />
      </button>
      
    </div>
  );
};

export default Navbar;
