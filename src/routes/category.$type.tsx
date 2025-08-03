import { createFileRoute, ErrorComponent, Link } from '@tanstack/react-router';
import AppContainer from '../components/AppContainer';
import Button from '../components/Button';
import CompanyInfo from '../components/CompanyInfo';
import GeneralProductCategoriesList from '../components/GeneralProductCategoriesList';
import { data } from '../data';
import { CategoryTypeSchema } from '../types/global';
import { BREAKPOINTS } from '../utils/constants';

export const Route = createFileRoute('/category/$type')({
    component: RouteComponent,
    errorComponent: ErrorComponent,
});

function RouteComponent() {
    const { type } = Route.useParams();

    const categoryTypeValidation = CategoryTypeSchema.safeParse(type);

    if (categoryTypeValidation.error) {
        const error = new Error(`${type} is a wrong category`);
        return (
            <div className='my-10 flex flex-col items-center'>
                <ErrorComponent error={error} />
                <Link to='/home'>
                    <Button label='Go to home' />
                </Link>
            </div>
        );
    }

    const productsFromType = data.filter((d) => d.category === categoryTypeValidation.data);

    return (
        <>
            <div className='flex h-[196px] items-center justify-center bg-black'>
                <h2 className='text-h2 text-white uppercase'>{categoryTypeValidation.data}</h2>
            </div>
            <AppContainer>
                {productsFromType.map((product) => {
                    return (
                        <div
                            key={product.id}
                            className='tablet:gap-y-[52px] desktop:gap-y-0 desktop:gap-x-[125px] desktop:flex-row tablet:first:mt-30 desktop:first:mt-40 desktop:even:flex-row-reverse desktop:mb-40 mb-30 flex flex-col items-center gap-y-8 first:mt-16'
                        >
                            <picture>
                                <source
                                    height={560}
                                    media={`(min-width: ${BREAKPOINTS.desktop})`}
                                    srcSet={product.categoryImage.desktop}
                                    width={540}
                                />
                                <source
                                    height={352}
                                    media={`(min-width: ${BREAKPOINTS.tablet})`}
                                    srcSet={product.categoryImage.tablet}
                                    width={689}
                                />
                                <source
                                    height={352}
                                    media={`(max-width: ${BREAKPOINTS.tablet})`}
                                    srcSet={product.categoryImage.mobile}
                                    width={327}
                                />
                                <img alt={product.name} className='rounded-lg' />
                            </picture>
                            <div className='tablet:w-[572px] desktop:w-[445px] desktop:items-start flex w-[327px] flex-col items-center'>
                                {product.name ? (
                                    <span className='text-overline text-dark-orange mb-6 uppercase'>
                                        new product
                                    </span>
                                ) : null}
                                <h3 className='text-h4 mb-6 text-center text-black'>
                                    {product.name}
                                </h3>
                                <p className='text-body desktop:text-left mb-6 text-center text-black/50'>
                                    {product.description}
                                </p>
                                <Link params={{ slug: product.slug }} to='/product-detail/$slug'>
                                    <Button label='see product' />
                                </Link>
                            </div>
                        </div>
                    );
                })}
                <GeneralProductCategoriesList />
                <CompanyInfo />
            </AppContainer>
        </>
    );
}
