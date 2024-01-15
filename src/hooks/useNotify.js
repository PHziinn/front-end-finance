import { toast } from "react-toastify";


export const useNotify = () => {


  function notifySuccess(){
    toast.success("Finança cadastrada com sucesso !");
  }
  function notifyWarn(){
    toast.warn("Preencha todos os campos !");
  }


  return {
    open,
    notifySuccess,
    notifyWarn,
  }
}