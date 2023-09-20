import axios from './services';
import React, { createContext, useContext, useState } from 'react';
import { useQuery } from 'react-query';

const CMSContext = createContext();

export const CMSProvider = ({ children }) => {
  const {data, isLoading, error, isFetching } = useQuery(["CMS"], ()=>{
    return Promise.all([
      axios.get('/cms-list'),
      axios.get('/settings')
    ]).then((res) => {      
      const dynamicObject = {};
      res[0].data.data.map((item) => {
          const key = item.cms_template_name.replace(/-/g, '_');
          return dynamicObject[key] = item
      })   
      return {
        CMS: dynamicObject, 
        settings: res[1].data.data
      }
    })
  })
  

  return (
    <CMSContext.Provider value={{ data, isLoading, isFetching, error }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMSContext = () => useContext(CMSContext);