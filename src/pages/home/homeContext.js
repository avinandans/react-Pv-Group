import React, { createContext, useContext, useState } from 'react';
import { fetchData } from './api';
import { useQuery } from 'react-query';

const HomeContext = createContext();
export const HomeProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState(1);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    const {data, isLoading, error,isFetching } = useQuery(["projects", activeTab,page], ()=>{
        return fetchData(activeTab, page, perPage)
    })  

    return (
        <HomeContext.Provider value={{ projects:data, isLoading, isFetching, error, activeTab, perPage, page, setActiveTab, setPage, setPerPage }}>
        {children}
        </HomeContext.Provider>
    );
};

export const useProjectContext = () => useContext(HomeContext);