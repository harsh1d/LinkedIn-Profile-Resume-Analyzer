import React from "react";
import { Icon } from "@iconify/react";

export const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon icon="logos:linkedin-icon" className="text-2xl" />
          <h1 className="text-xl font-semibold">LinkedIn Profile & Resume Analyzer</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-blue-100 transition-colors flex items-center gap-1">
                <Icon icon="lucide:home" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-100 transition-colors flex items-center gap-1">
                <Icon icon="lucide:info" />
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-100 transition-colors flex items-center gap-1">
                <Icon icon="lucide:help-circle" />
                <span>Help</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};