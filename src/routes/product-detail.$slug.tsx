import { createFileRoute, ErrorComponent } from '@tanstack/react-router';
import ProductDetail from '../features/Product-Detail/ProductDetail';

export const Route = createFileRoute('/product-detail/$slug')({
    component: ProductDetail,
    errorComponent: ErrorComponent,
});
