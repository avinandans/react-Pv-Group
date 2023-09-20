import axios from "../../services";

export const fetchData = () => {
    return Promise.all([
      axios.get('/slider-list'),
      axios.get('/cms-list'),
      axios.get('/project-list'),
      axios.get('/happy-customer'),
    ]).then((res) => {
      const dynamicObject = {};
      res[1].data.data.map(item => {
        const key = item.cms_template_name.replace(/-/g, '_');
        dynamicObject[key] = item
        return item;
      });
      return {
        hero : res[0].data.data,
        CMS: dynamicObject,
        projects: res[2].data.data.project_list,
        testimonials: res[3].data.data,
      }
    }).catch((error)=>{
      console.log(error.message)
      return error
    }) 
};