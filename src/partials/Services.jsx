import React from "react";
import { AiFillCopy, AiFillEdit, AiFillTool } from 'react-icons/ai';

function FeaturesBlocks() {
  return (
    <section className="relative bg-gray-200">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Outros serviços</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
           <AiFillTool className="w-16 h-16 p-1 -mt-1 mb-2"/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                REVISÃO DE CONTRATO DE VEÍCULO
              </h4>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
             <AiFillEdit className="w-16 h-16 p-1 -mt-1 mb-2"/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                REVISÃO DE CONTRATO DE DÍVIDAS BANCÁRIAS
              </h4>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <AiFillCopy className="w-16 h-16 p-1 -mt-1 mb-2"/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                DEFESA EM EXECUÇÃO <br></br> 
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
