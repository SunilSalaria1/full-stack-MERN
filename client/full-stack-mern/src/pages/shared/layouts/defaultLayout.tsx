import { Outlet } from 'react-router';

function DefaultLayout() {
    return (
        <>

            <main>
            <h1>default layout</h1>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout;
