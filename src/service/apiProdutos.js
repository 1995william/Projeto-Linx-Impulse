import axios from "axios";

export const apiProdutos = async (contador) => {
  const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${contador}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.error("erro request", e);
  }
};
