import { useEffect, useState } from "react";


export const useSomaFinance = (listSoma) => {
  const [ganho, setGanho] = useState(0)
  const [despesas, setDespesas] = useState(0)
  const [result, setResult] = useState(0)

  

  useEffect(() => {
    listSoma.map((finance) => { 
      if(finance.categoria === 'Ganho' ){
      setGanho(finance._sum.valor)
    } else if (finance.categoria === 'Despesas'){
      setDespesas(finance._sum.valor)
    }
    setResult( ganho - despesas )
  })
});

  return {
    ganho,
    despesas,
    result,
  }

}