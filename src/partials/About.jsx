import React, { useState, useRef, useEffect } from "react";
import FeaturesBg from "../images/features-bg.png";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Sobre nós</h1>
          </div>

          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                <div className="relative inline-flex flex-col">
                  <img
                    className="md:max-w-none mx-auto rounded"
                    src={FeaturesBg}
                    width="500"
                    height="462"
                    alt="Features bg"
                  />
               
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
            >

              <div className="mb-8 md:mb-0">
            
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      VSN Advogados
                    </div>
                    <div className="text-gray-600">
                      O VSN Advogados é um escritório especializado em
                      RECUPERAÇÃO DE VEÍCULOS APREENDIDOS POR BANCOS E
                      FINANCEIRAS que está há mais de 10 anos no mercado. Com
                      atuação à nível nacional, de forma totalmente digital para
                      acelerar a resolução das causas e prezar pelo conforto dos
                      seus clientes. Contamos com profissionais altamente
                      capacitados na matéria, preocupados com a constante
                      atualização dos seus conhecimentos e implantação de
                      inovações tecnológicas para atender seus clientes com
                      máxima eficiência.
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
