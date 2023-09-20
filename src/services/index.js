import axios from "axios";
export default axios.create({
    baseURL: 'https://admin.pvgroup.co.in/api',
    headers: {
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS", 
        'Authorization': ``,
        'Content-Type':'application/json',
    }
});