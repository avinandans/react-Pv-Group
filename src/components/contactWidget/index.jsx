import React, { useState } from 'react'
import style from './index.module.css'
import axios from '../../services';
import { Toaster, toast } from 'react-hot-toast';
import { useCMSContext } from '../../CMSContext';

const ContactWidget = ({inputColumn}) => {
    const { data, isLoading, isFetching, error } = useCMSContext();
    console.log();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject:'',
        message: '',
    });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };
    
    const validateForm = () => {
        let isValid = true;
        const updatedErrors = { name: '', email: '', subject: '' , message: '' };
    
        if (!formData.name) {
          updatedErrors.name = 'Name is required';
          isValid = false;
        }
    
        if (!formData.email) {
          updatedErrors.email = 'Email is required';
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          updatedErrors.email = 'Email is invalid';
          isValid = false;
        }

        if (!formData.subject) {
            updatedErrors.subject = 'Subjct is required';
            isValid = false;
        }
    
        if (!formData.message) {
          updatedErrors.message = 'Message is required';
          isValid = false;
        }
    
        setErrors(updatedErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // You can perform the form submission here, for example, make an API call
            console.log('Form submitted:', formData);
            axios.post('/contact-us', formData).then((res)=>{
                console.log(res)
                toast.success(res.data.message);
                // Reset form data
                setFormData({ name: '', email: '', subject: '', message: '' });
            }).catch((err)=>{
                console.log(err)
            })
        }
    };

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <div className="row">
                <div className={"col-md-12"}>
                    <div className="pro-inner-text">
                        <h4 className={style.title}>{data?.CMS.contact_us.cms_title}</h4>
                        <p className={`${style.desc}`} dangerouslySetInnerHTML={{__html:data?.CMS.contact_us.cms_desc}}></p>
                    </div>
                </div>
                <div className={inputColumn ? "col-md-12" :"col-md-12"}>
                    <input 
                        type="text"
                        name="name"
                        className={`form-control ${style.input}`}
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {<span className='d-block invalid-feedback'>{errors.name}</span>}
                </div>
                <div className={inputColumn ? "col-md-12" :"col-md-6"}>
                    <input 
                        type="email"
                        name="email"
                        className={`form-control ${style.input}`}
                        placeholder="Enter Your email ID" 
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {<span className='d-block invalid-feedback'>{errors.email}</span>}
                </div>
                <div className={inputColumn ? "col-md-12" :"col-md-6"}>
                    <input 
                        type="text"
                        name="subject"
                        className={`form-control ${style.input}`}
                        placeholder="Subject" 
                        value={formData.subject}
                        onChange={handleInputChange}
                    />
                    {<span className='d-block invalid-feedback'>{errors.subject}</span>}
                </div>
                <div className={inputColumn ? "col-md-12" :"col-md-12"}>
                    <textarea
                        className={`form-control ${style.input}`}
                        name="message"
                        rows="3"
                        placeholder="Enter Message" 
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>
                    {<span className='d-block invalid-feedback'>{errors.message}</span>}
                </div>
                <div className="col-md-12 mt-3">
                    <button type="submit" className="btn btn_secondary w-100">Send</button>
                </div>
            </div>
        </form>
    )
}

export default ContactWidget