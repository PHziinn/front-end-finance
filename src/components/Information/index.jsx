/* eslint-disable react/prop-types */
import { useSomaFinance } from "../../hooks/useSomaFinance"
import { useConvertValues } from "../../hooks/useConvertValues"

export const FinanceInfornation = ({listSoma}) => {
  const { ganho, despesas, result} = useSomaFinance(listSoma)
  const { convertValues } = useConvertValues()

  return (
    
      <section className="-mt-32" id="balance">

        <div className="bg-white p-6 pr-8 mb-14 rounded text-neutral-600">
          <h3 className="font-normal text-base flex items-center justify-between">

            <span>Entradas</span>
            <img src="/src/assets/img/entrada.svg" alt="Imagem de Entrada" />
          </h3>
          <p className="text-3xl leading-10 mt-4" >{convertValues(Number(ganho))}</p>

        </div>

        <div className="bg-white p-6 pr-8 mb-14 rounded text-neutral-600">
          <h3 className="font-normal text-base flex items-center justify-between">

            <span>Saída</span>
            <img src="/src/assets/img/saida.svg" alt="Imagem de Saída" />
          </h3>
          <p className="text-3xl  leading-10 mt-4" >{convertValues(Number(despesas))}</p>
          
        </div>

        <div className="p-6 pr-8 mb-14 rounded text-white"
          style={result >= 0 ? {background: '#22bd22'} : {background: '#B32222'}}>

          <h3 className="font-normal text-base flex items-center justify-between">
            <span>Total</span>
            <img src="/src/assets/img/total.svg" alt="Imagem Total" />
          </h3>
          <p className="text-3xl leading-10 mt-4" >{convertValues(Number(result))}</p>

        </div>
        
      </section>
  )
}