import axios from '../../services';

export const fetchData = (activeTab, page, perPage) => {
    return axios.get(`/project-list?type=${activeTab}&page_no=${page}&page_limit=${perPage}`).then((res)=>{
      return {
        status: res.data.status,
        data: res.data.data.project_list,
        totalPage: res.data.data.page_links.last_page,
        loading: true,
      }
    }).catch(err => {
      return err
    })    
};