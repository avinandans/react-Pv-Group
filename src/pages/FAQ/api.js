import axios from "../../services";

export const fetchData = () => {
    return Promise.all([
        axios.get('/faq-list'),
        axios.get('/cms-list')
    ]).then((res) => {
        const dynamicObject = {};
        res[1].data.data.filter(item => {
          if(item.cms_template_name === 'faq') {
            return dynamicObject[item.cms_template_name] = {...item}
          }
          return ""
        });    
  
        return {
          faqList : res[0].data.data,
          CMS: dynamicObject
        }
    })     
};

