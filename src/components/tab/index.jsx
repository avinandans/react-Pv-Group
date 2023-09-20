import React, { useState } from 'react'

const TabComponent = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    
    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  
    return (
      <div>
        <ul className="nav nav-tabs mb-3 justify-content-center" id="ex1" role="tablist">
          {tabs.map((tab, index) => (
            <>
                <li className="nav-item" key={index}>
                    <button
                    type="button"
                    onClick={() => handleTabClick(index)}
                    className={index === activeTab ? 'nav-link active' : 'nav-link'}
                    > 
                        {tab.title}
                    </button>
                </li>
            </>
          ))}
        </ul>  
        <div className="tab-content">
          <div className="pro-page-text text-center">
            <h3>Our past <span>projects</span></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. It has roots in a piece of classical Latin literature, making it over 2000 years old.Lorem ipsum dolor sit amet consectetur, adipisicing elit. It has roots in a piece of classical Latin literature, making it over 2000 years old.
            </p>
          </div>
          {tabs[activeTab].content}
        </div>
      </div>
    );
  };

export default TabComponent