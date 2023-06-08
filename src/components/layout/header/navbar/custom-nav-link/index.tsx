import { Link, useMatch } from 'react-router-dom';
import React from 'react'
import './styles.css'

interface CustomNavLinkProps {
    children: React.ReactNode;
    to: string;
    icon: any
}

const CustomNavLink = ({ children, to, icon, ...props }: CustomNavLinkProps) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link
            to={to}
            className={match ? 'nav-link nav-link_active' : 'nav-link'}
            {...props}>
            <div className='custom-link__svg-container'>
                {icon}
            </div>
            {children}
        </Link>
    );
};

export default React.memo(CustomNavLink);