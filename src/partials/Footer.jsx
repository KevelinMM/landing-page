import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="w-full mx-auto bg-gray-50">
        <div className="text-sm text-gray-600 pl-4 pt-2">
          <Link
            to="#"
            className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
          >
            Politica de Privacidade
          </Link>
        </div>

        <div className="px-10 grid grid-cols-1 sm:grid-cols-3 gap-10 py-4 md:py-12 text-center">
          <div className="">
            <h6 className="text-gray-800 font-medium mb-2">CNPJ</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <p className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Web Studio
                </p>
              </li>
            </ul>
          </div>

          <div className="">
            <h6 className="text-gray-800 font-medium mb-2">CNPJ</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <p className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Web Studio
                </p>
              </li>
            </ul>
          </div>

          <div className="">
            <h6 className="text-gray-800 font-medium mb-2">Nome</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <p className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  About us
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyrights note */}
        <div className="text-center py-4 border-t border-gray-200 bg-gray-900 bg-opacity-80 shadow-xl">
          <div className="text-sm text-white mr-4">
            Made by NIU. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
