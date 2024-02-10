"use client";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <>
      <button
      type="button"
      className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-20 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <svg fill="rgb(156 163 175)" height="200px" width="200px" version="1.1" id="Layer_1" viewBox="-45.85 -45.85 550.23 550.23" stroke="rgb(156 163 175)" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke-width="0.00458531"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="4.585310000000001"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_830_"> <g> <g> <path d="M336.688,343.962L336.688,343.962c-21.972-0.001-39.848-17.876-39.848-39.848v-66.176 c0-21.972,17.876-39.847,39.848-39.847h103.83c0.629,0,1.254,0.019,1.876,0.047v-65.922c0-16.969-13.756-30.725-30.725-30.725 H30.726C13.756,101.49,0,115.246,0,132.215v277.621c0,16.969,13.756,30.726,30.726,30.726h380.943 c16.969,0,30.725-13.756,30.725-30.726v-65.922c-0.622,0.029-1.247,0.048-1.876,0.048H336.688z"></path> <path d="M440.518,219.925h-103.83c-9.948,0-18.013,8.065-18.013,18.013v66.176c0,9.948,8.065,18.013,18.013,18.013h103.83 c9.948,0,18.013-8.064,18.013-18.013v-66.176C458.531,227.989,450.466,219.925,440.518,219.925z M372.466,297.024 c-14.359,0-25.999-11.64-25.999-25.999s11.64-25.999,25.999-25.999c14.359,0,25.999,11.64,25.999,25.999 C398.465,285.384,386.825,297.024,372.466,297.024z"></path> <path d="M358.169,45.209c-6.874-20.806-29.313-32.1-50.118-25.226L151.958,71.552h214.914L358.169,45.209z"></path> </g> </g> </g> </g></svg>
      <span className="mt-2 block text-sm font-semibold text-gray-900">Connect with your wallet</span>
    </button>
    </>
  );
};

export default Dashboard;