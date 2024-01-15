import { useEffect, useState } from "react";
import { api } from "../services/api";



export const useListFinances = () => {
  const [listFinance, setListFinance] = useState([]);
  const [listSoma, setListSoma] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);



  function handleSaveFinance(item) {
    const data = item.dados

    api.post('/criar/finance', data).then(() => {
      api.get('/finances').then(res =>{
        setListFinance(res.data.finance)
      })
      api.get('/calcular/finance').then(res =>{
      setListSoma(res.data)
      })
    })
  }

    const handleFinance = () => {
      api.get(`/finances`).then(res => {
        setListFinance(res.data.finance);
      });
      api.get('/calcular/finance').then(res => {
        setListSoma(res.data);
      });
      
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/finances?page=${page}`);
        setListFinance(response.data.finance);
        setTotalPages(response.data.TotalPages);
        const res = await api.get('/calcular/finance');
        setListSoma(res.data)
      } catch (error) {
        console.error('Error: ', error);
      }
    };
    fetchData();
  },[page]);
  


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };



  return {
    listFinance,
    listSoma,
    totalPages,
    handleFinance,
    handleSaveFinance,
    handleChangePage,
  }
}

