import React, { createContext, useContext, useState } from 'react';
import { fetchData } from './api';
import { useQuery } from 'react-query';
import axios from '../../services';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState(1);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [pageError, setPageError] = useState(false)

    const fetchData = (activeTab, page, perPage) => {
        return axios.get(`/project-list?type=${activeTab}&page_no=${page}&page_limit=${perPage}`).then((res)=>{
          return {
            status: res.data.status,
            data: res.data.data.project_list,
            totalPage: res.data.data.page_links.last_page,
            loading: true,
          }
        }).catch((err) => {
          setPageError(true)
          return err
        })    
    };

    const {data, isLoading, error, isFetching, status } = useQuery(["projects", activeTab,page], ()=>{
        return fetchData(activeTab, page, perPage)
    })  
    
    console.log(status)

    return (
      <ProjectContext.Provider value={{pageError, projects:data, isLoading, isFetching, error, activeTab, perPage, page, setActiveTab, setPage, setPerPage }}>
        {children}
      </ProjectContext.Provider>
    );
  
};

export const useProjectContext = () => useContext(ProjectContext);