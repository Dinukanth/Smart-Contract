import React from 'react';
import {
  HomeIcon,
  PlusIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon, // Replace TrendingUpIcon with ArrowTrendingUpIcon
  ChartPieIcon,
  FolderIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <div className="flex flex-col items-center bg-white p-4 h-screen border-r border-gray-200 space-y-4 ">
      {/* Top Icon */}
      <button className="p-2 rounded-full bg-indigo-100">
        <HomeIcon className="h-8 w-8 text-indigo-500" />
      </button>

      {/* <button className="p-3 rounded-full bg-gray-100">
        <PlusIcon className="h-6 w-6 text-gray-500" />
      </button> */}

      {/* Other Icons */}
      <button className="p-3 rounded-full bg-gray-200">
        <ChartBarIcon className="h-6 w-6 text-gray-700" />
      </button>
      <button className="p-3 rounded-full bg-gray-100">
        <ArrowTrendingUpIcon className="h-6 w-6 text-gray-500" /> {/* Use ArrowTrendingUpIcon */}
      </button>
      <button className="p-3 rounded-full bg-gray-100">
        <ChartPieIcon className="h-6 w-6 text-gray-500" />
      </button>
      <button className="p-3 rounded-full bg-gray-100">
        <FolderIcon className="h-6 w-6 text-gray-500" />
      </button>
      <button className="p-3 rounded-full bg-gray-100">
        <BoltIcon className="h-6 w-6 text-gray-500" />
      </button>
    </div>
  );
};

export default Navbar;
