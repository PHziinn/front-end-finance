import { useState } from "react";
import { useNotify } from "./useNotify";



export const useCreateFinance = (onAddItem) => {
  const [data, setData] = useState('');
  const [titulo, setTitulo] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');
  const { notifyWarn, notifySuccess } = useNotify()


  const categoriaOptions = [
    {value: '', text: 'Selecione sua opção'},
    {value: 'Ganho', text: 'Ganho'},
    {value: 'Despesas', text: 'Despesas'},
  ];


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  function handleAddIntens(){
    const dados = {
        data,
        titulo,
        valor,
        categoria,
      }
      if (dados.data === ''){
        notifyWarn()
      } else if (dados.titulo === ''){
        notifyWarn()
      } else if (dados.valor === ''){
        notifyWarn()
      } else if (dados.categoria === ''){
        notifyWarn()
      } else {
        console.log(dados)
        onAddItem({dados})
        notifySuccess()
      }
  }
  
  return {
    data,
    titulo,
    valor,
    categoria,
    categoriaOptions,
    open,
    handleClose,
    handleOpen,
    setData,
    setTitulo,
    setValor,
    setCategoria,
    handleAddIntens,

  }
}