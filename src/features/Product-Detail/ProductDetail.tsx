import { getRouteApi, useRouter } from '@tanstack/react-router';
import AppContainer from '../../components/AppContainer';
import CompanyInfo from '../../components/CompanyInfo';
import GeneralProductCategoriesList from '../../components/GeneralProductCategoriesList';
import { data } from '../../data';
import ProductFeatures from './ProductDescription';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import YouAlsoMayLike from './YouAlsoMayLike';

const ProductDetail = () => {
    const router = useRouter();
    const { slug } = getRouteApi('/product-detail/$slug').useParams();
    const product = data.find((p) => p.slug === slug);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <AppContainer>
            <button
                className='tablet:block text-body desktop:mt-20 desktop:mb-14 mt-8 mb-6 hidden text-black/50 hover:cursor-pointer'
                type='button'
                onClick={() => {
                    router.history.back();
                }}
            >
                Go Back
            </button>
            <ProductInfo product={product} />
            <ProductFeatures product={product} />
            <ProductGallery product={product} />
            <YouAlsoMayLike product={product} />
            <GeneralProductCategoriesList />
            <CompanyInfo />
        </AppContainer>
    );
};
export default ProductDetail;
