import {createContext,useContext,useState} from 'react';
import UserProfile from './../components/UserProfile';

const StateContext = createContext();

const initialState ={
    chat:false,
    cart:false,
    UserProfile:false,
    Notification:false,
}