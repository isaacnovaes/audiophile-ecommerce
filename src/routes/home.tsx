import { createFileRoute, ErrorComponent } from '@tanstack/react-router';
import Home from '../features/Home/Home';

export const Route = createFileRoute('/home')({
    component: Home,
    errorComponent: ErrorComponent,
});
