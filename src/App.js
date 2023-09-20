// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import './asstes/font/lemonMilk/font.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {Homepage, About, Projects, Details, HappyCustomers, FAQ, ContactUs} from './pages';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import Footer from './components/footer';
import axios from './services';
import { useEffect, useState } from 'react';
import Scrolltotop from './components/scrolltotop';
import { Toaster } from 'react-hot-toast';
import NotFound from './pages/notFound';
import Image from './components/utils/Image/Image';
import callIcon from './asstes/image/call_icon.png'
import { CMSProvider } from './CMSContext';

function App() {
  const [setting, setSetting] = useState([])
  const [footer, setFooter] = useState("")
  const queryClient = new QueryClient()

  
  const fetchData = () => {
    Promise.all([
      axios.get('/settings'),
      axios.get('/cms-list')
    ]).then((res) => {
        setSetting(res[0].data.data)
        res[1].data.data.filter((elem)=>{          
          if(elem.cms_title === "lower-footer") {
            return setFooter(elem)
          } else {
            return "not found"
          }
        })
    }).catch(error => {
      console.error(error);
    });
  }  
  
  useEffect(()=>{
    fetchData();
  },[])
  
  return (
    
      <QueryClientProvider client={queryClient}>
        <CMSProvider>   
          <div className="App">      
            <BrowserRouter>
              <Scrolltotop/>
              <Header/>
              <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/about-us" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/project/:id" element={<Details/>}/>
                <Route path="/happy-customers" element={<HappyCustomers/>}/>
                <Route path="/faq" element={<FAQ/>}/>
                <Route path="/contact-us" element={<ContactUs contactInfo={setting} />}/>
                <Route path="*" element={<NotFound/>} />
              </Routes>
              <Link to={`tel:${setting.phone}`} className='sticky_tel'>
                <Image src={callIcon} width={60} height={63} alt="Call Icon" />
              </Link>
              <Footer fData={setting} desc={footer.cms_desc}/>
            </BrowserRouter>
            <Toaster
              position="bottom-center"
              reverseOrder={false}
            />
            <ReactQueryDevtools/>
          </div>      
        </CMSProvider>
      </QueryClientProvider>
    
  );
}

export default App;
