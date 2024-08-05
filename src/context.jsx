import { createContext, useReducer, useContext, useEffect } from 'react';
import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEMS
} from './actions';
import reducer from './reducer';
import cartItems from './data';

const AppContext = createContext();

const items = cartItems.map((item) => [item.id, item]);

const cart = new Map(items);

const initialState = {
    loading: false,
    cart
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
