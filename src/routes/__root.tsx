import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import * as React from 'react';

function RootComponent() {
    return (
        <React.Fragment>
            <div>Hello from root</div>
            <Outlet />
            <TanStackRouterDevtools />
        </React.Fragment>
    );
}

export const Route = createRootRoute({
    component: RootComponent,
});
