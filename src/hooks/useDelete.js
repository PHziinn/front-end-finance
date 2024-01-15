import { api } from "../services/api";
import { useListFinances } from "./useListFinance";


export const useDelete = () => {
  const { handleFinance } = useListFinances();
  
    function handleDelete(id) {
      const confirma = window.confirm('Tem certeza que deseja excluir?');
      if (confirma) {
        api.delete(`/deletar/finance/${id}`).then(() => {
          handleFinance()
        });
      }
    }


  return {
    handleDelete
  }
}