import React from 'react'
import style from './index.module.css';
import Image from '../Image/Image'
import quote from '../../../asstes/image/quotation.png'
import { truncate } from 'lodash';

const TestimItem = ({image, name, text, designation}) => {
    return (
        <div className={style.grid_item}>
            {/* <TestimItem name={elem.cms_name} image={elem.cms_image} text={elem.cms_desc} designation={elem.cms_designation} /> */}
            <div className={""}>
            <div className={style.quote_icon}>
                <Image src={quote} height={34} width={40} alt={"..."} className={quote.icon}/>
            </div>
            <p className={style.text}>
                {text}
            </p>
            <div className={style.user}>
                <Image className={style.user_image} src={image} height={50} width={50} alt={'...'} />
                <div className={style.user_info}>
                    <h5 className={style.user_name}>{name}</h5>
                    <p className={style.designation}>{designation}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default TestimItem