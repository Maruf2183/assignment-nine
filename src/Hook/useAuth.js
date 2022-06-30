import{ useContext } from 'react';
import { Authcontex } from '../ContexAPI/AuthProvider';

const useAuth = () => {
    return useContext(Authcontex);
};

export default useAuth;