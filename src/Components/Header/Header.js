import React from 'react';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import {Head, FaNote, LogoName} from './Header.styled';

const Header = () => {
    return (
        <Head>
            <FaNote icon={faPenToSquare} />
            <LogoName>Notelify</LogoName>
        </Head>
        
    );
};

export default Header;