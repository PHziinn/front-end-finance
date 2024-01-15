

import { Header } from "../components/Header";
import {  TableFinance } from "../components/TableFinance"
import { FinanceInfornation } from "../components/Information";
import { FinanceModal } from "../components/FinanceModal";
import { PaginacaoFinance } from "../components/Paginacao"
import { Footer } from "../components/Footer";
import { ToastContainer} from 'react-toastify';
import { useListFinances } from "../hooks/useListFinance";
import '../assets/global.css'



export const Home = () => {
  const { listFinance, listSoma, handleSaveFinance, totalPages, handleChangePage } = useListFinances()


  
  return(
    <>
    <ToastContainer position="top-center" autoClose={3000} />
    <Header />

    <main>
      <FinanceInfornation listSoma={listSoma} />
      <FinanceModal  onAddItem={handleSaveFinance}/>
      <TableFinance listFinance={listFinance} />
      <PaginacaoFinance count={totalPages} onChange={handleChangePage}/>
    </main>
      <Footer />


    </>
  )
};