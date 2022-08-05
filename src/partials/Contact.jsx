import React from "react";
import { useState } from "react";

const Contact = () => {
  const [nm, setNm] = useState("");
  const [em, setEm] = useState("");
  const [msg, setMsg] = useState("");
  function handleName(e) {
    console.log(e.target.value);
    setNm(e.target.value);
  }
  function handleEmail(e) {
    console.log(e.target.value);
    setEm(e.target.value);
  }
  function handleMessage(e) {
    console.log(e.target.value);
    setMsg(e.target.value);
  }
  function handleSubmit(event) {
    console.log(`${nm} ${em} ${msg}`);
  }
  return (
    <div>
      <section id="contacts">
        <h2 className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font text-center mt-12">
          Contato
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-12 p-2 md:p-6 mx-4 space-x-4" >
          {/* left */}
          <div className="h-full bg-gray-900 bg-opacity-80 shadow-xl rounded-xl">
          <h1 className="text-white p-10">Informações</h1>
          </div>

          {/* right */}

          <form
            action="https://getform.io/f/c7e20834-9cc8-4818-a1b7-9d0cfc35072d"
            method="POST"
            onSubmit={handleSubmit}
            className=" container w-full"
          >
            <div className="mr-8">
            <div className="relative mb-4 ">
              <label className="leading-7 text-sm text-gray-400">Nome</label>
              <input
                type="text"
                name="name"
                className="w-full bg-white-800 rounded border border-gray-700 focus:ring-indigo-700 text-base outline-none text-dark-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleName}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                className="w-full bg-white-800 rounded border border-gray-700 focus:ring-indigo-700 text-base outline-none text-dark-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleEmail}
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-400">
                Telefone
              </label>
              <input
                type="text"
                name="name"
                className="w-full bg-white-800 rounded border border-gray-700 focus:ring-indigo-700 text-base outline-none text-dark-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleName}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Assunto
              </label>
              <input
                type="text"
                name="email"
                className="w-full bg-white-800 rounded border border-gray-700 focus:ring-indigo-700 text-base outline-none text-dark-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleEmail}
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-400">
                Mensagem
              </label>
              <textarea
                type="text"
                name="message"
                className="w-full bg-white-800 rounded border border-gray-700 focus:ring-indigo-700 h-32 text-base outline-none text-dark-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={handleMessage}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
            >
              Enviar
            </button>
            </div>
          </form>
          
        </div>
      </section>
    </div>
  );
};

export default Contact;
