import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Fragment } from 'react';
import TopBar from '../components/TopBar';

function RootComponent() {
    return (
        <Fragment>
            <TopBar />
            <Outlet />
            {/* <TanStackRouterDevtools /> */}
        </Fragment>
    );
}

export const Route = createRootRoute({
    component: RootComponent,
});
