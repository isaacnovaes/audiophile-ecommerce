import { createFileRoute, ErrorComponent } from '@tanstack/react-router';
import Category from '../features/Category/Category';

export const Route = createFileRoute('/category/$type')({
    component: Category,
    errorComponent: ErrorComponent,
});
