import all_product from "../Assets/all_product";
import new_collections from "../Assets/new_collections";

const { createContext, useReducer } = require("react");

// Create a context
const ProductContext = createContext();

const initialState = {
  products: [],
  userName: "",
  cart: [],
  isLoading: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "newCollection":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case "allProduts":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    default: {
      throw new Error("Unknown action type");
    }
  }
}
function ProductProvider({ children }) {
  const [{ products, userName, cart, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );
  async function getNewCollectionData() {
    dispatch({ type: "loading" });
    await dispatch({ type: "newCollection", payload: new_collections });
  }
  function getAllProducts() {
    dispatch({ type: "allProduts", payload: all_product });
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        cart,
        userName,
        getNewCollectionData,
        getAllProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
