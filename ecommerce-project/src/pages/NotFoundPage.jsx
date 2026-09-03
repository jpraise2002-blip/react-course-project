import { Header } from '../components/Header';
import './NotFoundPage.css';

export function NotFoundPage({ cart }) {
    return (
        <>
            <Header cart={cart} />

            <div className='not-found-page'>
                <p className='error-head'>404</p> 
                <p className='error-tail'>Page not Found</p>
            </div>
        </>
    )
}