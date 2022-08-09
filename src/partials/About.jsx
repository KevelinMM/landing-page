import React, { useState, useRef, useEffect } from "react";
import ConsultoriaFundo from "../images/consultoria-fundo.jpg";

function Features() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
  }, [tab]);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-200 pointer-events-none "
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 "></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-4 md:pt-12">
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-10">
            <h1 className="h2 mb-4">Sobre nós</h1>
          </div>

          <div className="md:grid md:grid-cols-12 md:gap-3">
            <div
              className="max-w-xl mx-auto sm:col-span-5 lg:col-span-6 mb-12 sm:mt-20 md:mt-8 lg:mt-2"
              ref={tabs}
            >
              <div className="relative flex flex-col">
                <div className="relative inline-flex flex-col">
                  <img
                    className="mx-auto rounded"
                    src={ConsultoriaFundo}
                    width="500"
                    height=""
                    alt="consultoria-fundo"
                  />
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 text-justify px-10">
              <div className="pb-8 mt-4">
                <div className="font-bold leading-snug tracking-tight mb-8">
                  VSN Advogados
                </div>
                <div className="text-gray-600">
                  O <sctrong className="font-bold">VSN Advogados</sctrong> é um
                  escritório especializado em
                  <strong className="font-bold">
                    RECUPERAÇÃO DE VEÍCULOS APREENDIDOS POR BANCOS E FINANCEIRAS
                  </strong>{" "}
                  que está há mais de 10 anos no mercado.{" "}
                  <strong className="font-bold">
                    Com atuação à nível nacional, de forma totalmente digital
                    para acelerar a resolução das causas e prezar pelo conforto
                    dos seus clientes.
                  </strong>{" "}
                  Contamos com profissionais altamente capacitados na matéria,
                  preocupados com a constante atualização dos seus conhecimentos
                  e implantação de inovações tecnológicas para atender seus
                  clientes com máxima eficiência.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
