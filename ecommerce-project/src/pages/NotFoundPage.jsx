import { Header } from '../components/Header';
import './NotFoundPage.css';

export function NotFoundPage() {
    return (
        <>
            <Header />

            <div className='not-found-page'>
                404. Page not Found.
            </div>
        </>
    )
}