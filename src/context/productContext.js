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
        isLoading: action.payload,
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
    case "specificProduct":
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
    dispatch({ type: "loading", payload: true });
    try {
      const fetchedCollections = await new_collections;
      // Dispatch the data to the reducer
      dispatch({ type: "newCollection", payload: fetchedCollections });
    } catch (error) {
      console.error("Error fetching new collections:", error);
      // Handle error state if needed
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  }

  async function getAllProducts() {
    dispatch({ type: "loading", payload: true });
    try {
      const fetchedCollections = await all_product;
      dispatch({ type: "allProduts", payload: fetchedCollections });
    } catch (error) {
      console.error("Error fetching new collections:", error);
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  }

  async function getSpecificProduct(category) {
    dispatch({ type: "loading", payload: true });
    try {
      const fetchedCollections = all_product.filter(
        (item) => item.category === category
      );
      dispatch({ type: "specificProduct", payload: fetchedCollections });
    } catch (error) {
      console.error("Error fetching new collections:", error);
    } finally {
      dispatch({ type: "loading", payload: false });
    }
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
        getSpecificProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
