/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import 'react-toastify/dist/ReactToastify.css';
import { useCreateFinance } from '../../hooks/useCreateFinance';
import { useConvertValues } from '../../hooks/useConvertValues';
import { StyledModal } from './StyledModal';


export const FinanceModal = ({onAddItem}) => {
  const { stylesButton, stylesText } = StyledModal()

  const { data, titulo, valor, categoria, 
    open, categoriaOptions, setData, setTitulo, setValor, 
    setCategoria, handleOpen, handleClose, 
    handleAddIntens } = useCreateFinance(onAddItem)
  const { convertValues } = useConvertValues()


  return (
    <>
      <section>
        <Button sx={stylesText} color="success" onClick={handleOpen}>+ Nova transação</Button>
      </section>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={stylesButton}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Nova transição
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            <div className="m-3.5">
              <label className="absolute w-0 h-0 p-0 -my-1 overflow-hidden whitespace-nowrap border-0">Descrição</label>
              <input className="rounded p-3.5 w-full"
              name="descrição"
              type="text"
              value={titulo}
              onChange={e => setTitulo(e.target.value)}
              placeholder="Descrição" required/>
            </div>
            
            <div className="m-3.5">
              <label className="absolute w-0 h-0 p-0 -my-1 overflow-hidden whitespace-nowrap border-0">Valor</label>
              <input className="rounded p-3.5 w-full" 
              name='valor'
              type="number" 
              value={convertValues(valor)}
              onChange={e => setValor(e.target.value)}
              step={'0,01'}
              placeholder="0,00" required />
              <small className="text-gray-500">Use (vírgula) para casas decimais.</small>
            </div>

            <div className="m-3.5">
              <label className="absolute w-0 h-0 p-0 -my-1 overflow-hidden whitespace-nowrap border-0">Categoria</label>
              <select className="rounded p-3.5 w-full" 
              name="categoria"
              id="categoria"
              value={categoria}
              onChange={e => setCategoria(e.target.value)}
              required >
                
                {categoriaOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}

              </select>

              <small className="text-gray-500">Selecione a categoria (Dispesas) para negativo e, (Ganho) para positivo.</small>
            </div>

            <div className="m-3.5">
              <label className="absolute w-0 h-0 p-0 -my-1 overflow-hidden whitespace-nowrap border-0">Data</label>
              <input className="rounded p-3.5 w-full"
              name='data'
              type="date" 
              value={data}
              onChange={e => setData(e.target.value)} 
              required />
            </div>

            <div className="flex justify-between items-center p-2">
              <button className="w-44 h-12 text-red-600 rounded border border-red-600" onClick={handleClose}>Cancelar</button>

              <button className="w-44 h-12 text-white bg-green-600 hover:bg-green-700 rounded" type="submit" onClick={handleAddIntens}>Salvar</button>
            </div>
          </Typography>
        </Box>
      </Modal>
      </>

  );
}
