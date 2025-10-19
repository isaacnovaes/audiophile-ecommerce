import { createFileRoute, ErrorComponent } from '@tanstack/react-router';
import Checkout from '../features/Checkout/Checkout';

export const Route = createFileRoute('/checkout')({
    component: Checkout,
    errorComponent: ErrorComponent,
});
