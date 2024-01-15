


export const useConvertValues = () => {


  const convertValues = (value) => {
    const convert = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    })
    return convert
  }

  return {
    convertValues
  }
}