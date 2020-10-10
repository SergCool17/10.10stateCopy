import React from 'react';
import s from './ProfileInfo.module.css';
import avatar from '../../../avatar.png';

const Profileinfo = () => {

    return (
        <div className={s.profilecontent}>
            <img id='11' alt='Ava' src={avatar} />
        </div>
    )
}

export default Profileinfo;