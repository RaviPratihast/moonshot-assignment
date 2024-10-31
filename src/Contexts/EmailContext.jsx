import { createContext, useContext, useEffect, useReducer } from "react";
import { EmailReducer } from "../Reducers/EmailReducer";

const EmailContext = createContext(null);

const useEmail = () => useContext(EmailContext);

const initialState = {
  data: [],
  loading: true,
  error: null,
};
const EmailProvider = ({ children }) => {
  const [stateEmail, dispatchEmail] = useReducer(EmailReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatchEmail({ type: "SET_LOADING" });
        const response = await fetch("https://flipkart-email-mock.now.sh/");
        const data = await response.json();
        dispatchEmail({ type: "SET_DATA", payload: data });
      } catch (error) {
        dispatchEmail({ type: "SET_ERROR", payload: error.message });
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <EmailContext.Provider value={{ stateEmail, dispatchEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

export { EmailProvider, useEmail };
