import { Outlet } from 'react-router';

function MainLayout() {
    return (
        <>
            <header>
                <h1>main layout</h1>
            </header>
            <Outlet />
        </>
    )
}

export default MainLayout;
