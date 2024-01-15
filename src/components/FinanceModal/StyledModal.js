


export const StyledModal = () => {
  const stylesButton = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const stylesText = {
  color: 'green',
  decoration: 'none',
}

  return {
    stylesButton,
    stylesText
  }
}