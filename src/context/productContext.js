import { collection, onSnapshot, query, where } from "firebase/firestore";
import all_product from "../Assets/all_product";
import new_collections from "../Assets/new_collections";
import { auth, db } from "../firebase/firebaseConfig";
const { createContext, useReducer, useEffect } = require("react");

// Create a context
const ProductContext = createContext();

const initialState = {
  products: [],
  userName: "",
  cart: [],
  isLoading: false,
  user: null,
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
    case "setUser":
      return {
        ...state,
        user: action.payload,
        cart: [],
      };
    case "addToCart":
      return {
        ...state,
        cart: action.payload
          .map((cartItem) => {
            const productId = cartItem.data().productId;
            const matchingProduct = all_product.find(
              (item) => productId === item.id
            );

            if (matchingProduct) {
              return {
                docId: cartItem.id, // Include the document ID
                ...matchingProduct, // Include the product data
              };
            } else {
              console.error(
                `Matching product not found for productId: ${productId}`
              );
              return null; // Handle the case where the product is not found
            }
          })
          .filter((item) => item !== null), // Filter out null values
      };

    default: {
      throw new Error("Unknown action type");
    }
  }
}
function ProductProvider({ children }) {
  const [{ products, userName, cart, isLoading, user }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // Fetching Items from database:

  const itemsRef = collection(db, "cartItems");
  useEffect(() => {
    const fetchPost = async () => {
      dispatch({ type: "loading", payload: true });
      if (user) {
        const queryItems = query(itemsRef, where("userId", "==", user.uid));
        const unsubscribe = onSnapshot(queryItems, (snapShot) => {
          dispatch({ type: "addToCart", payload: snapShot.docs });
        });

        dispatch({ type: "loading", payload: false });
        return () => unsubscribe();
      }
      // Move this outside of the 'if (user)' block
      dispatch({ type: "loading", payload: false });
    };

    fetchPost();
  }, [user, cart.length]);

  async function getNewCollectionData() {
    dispatch({ type: "loading", payload: true });
    try {
      const fetchedCollections = await new_collections;
      dispatch({ type: "newCollection", payload: fetchedCollections });
    } catch (error) {
      console.error("Error fetching new collections:", error);
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

  // Authentication

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "setUser", payload: authUser });
      } else {
        console.error("No user Logged In");
      }
    });

    return () => unsubscribe();
  }, []);

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
        user,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
