import { Outlet } from 'react-router';

function DefaultLayout() {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout;
