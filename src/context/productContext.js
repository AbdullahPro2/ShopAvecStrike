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
  function getNewCollectionData() {
    dispatch({ type: "newCollection", payload: new_collections });
  }

  return (
    <ProductContext.Provider
      value={{ products, isLoading, cart, userName, getNewCollectionData }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
