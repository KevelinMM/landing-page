import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (

    <div
      className="space-y-3 mt-5 overflow-hidden border-b "
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-white font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-200">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const faqsList = [
    {
      q: "POSSO FAZER ALGO PARA RECUPERAR O VEÍCULO?",
      a: "Sim! Essa é a boa notícia! Pode e deve RECORRER. O seu prazo JÁ ESTÁ CORRENDO, e há grandes chances de recuperá-lo.",
    },
    {
      q: "SE EU NÃO FIZER A DEFESA, POSSO SER COBRADO DE MAIS ALGUMA COISA PELO BANCO?",
      a: "Sim, se o valor obtido pela venda do carro não for capaz de quitar o saldo devedor do contrato, o banco continuará sendo seu credor e poderá converter a ação de busca e apreensão em execução para atingir outros bens seus. Assim você perderá o carro, todo o valor que já pagou por ele (incluindo a entrada) e poderá continuar devendo ao banco com o seu nome no SPC até a plena quitação.",
    },
    {
      q: "MEU NOME VAI CONTINUAR NO SPC?",
      a: "Sim, até a quitação plena do contrato.",
    },
    {
      q: "A BUSCA E APREENSÃO É LEGAL?",
      a: "O procedimento sim. Ou seja, o Banco pode requerer a medida. Mas precisa cumprir requisitos legais para que ele seja válido. Se você foi vitima de um caso de busca e apreensão recentemente, CLICA AGORA no botão do WhatsApp aqui do lado e peça atendimento preferencial no nosso plantão que iremos te passar todas as informações necessárias para recuperar prontamente o seu veículo.",
    },
  ];

  return (
    <section className="leading-relaxed w-full p-12 bg-gray-900 bg-opacity-95 shadow-xl mx-auto">
        <h1 className="h3 mb-4 text-center text-white">
          Perguntas frequentes
        </h1>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

