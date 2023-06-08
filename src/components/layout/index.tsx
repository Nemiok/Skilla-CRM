import { Outlet } from 'react-router-dom';
import Header from './header';
import React, { Suspense } from 'react'
import './styles.css'
import Aside from './aside';

const Layout = () => {

    return (
        <>
            <div className='App_Container'>
                <Header />

                <main className="main-container">
                    <Aside></Aside>

                    <section className='section-page-content'>
                        <Suspense>
                            <Outlet />
                        </Suspense>
                    </section>
                </main>
            </div>
        </>
    )
}

export default React.memo(Layout) 