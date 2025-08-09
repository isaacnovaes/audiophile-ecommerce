import { createFileRoute, ErrorComponent, useRouter } from '@tanstack/react-router';
import AppContainer from '../components/AppContainer';
import Button from '../components/Button';
import CompanyInfo from '../components/CompanyInfo';
import GeneralProductCategoriesList from '../components/GeneralProductCategoriesList';
import { data } from '../data';
import { BREAKPOINTS } from '../utils/constants';

const formatMoney = (n: number) =>
    new Intl.NumberFormat('us', {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'symbol',
    }).format(n);

export const Route = createFileRoute('/product-detail/$slug')({
    component: RouteComponent,
    errorComponent: ErrorComponent,
});

function RouteComponent() {
    const { slug } = Route.useParams();
    const router = useRouter();

    const product = data.find((p) => p.slug === slug);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <AppContainer>
            <button
                className='tablet:block hidden'
                type='button'
                onClick={() => {
                    router.history.back();
                }}
            >
                Go back
            </button>
            <div className='tablet:flex-row tablet:min-h-120 tablet:gap-y-0 tablet:gap-x-[69px] desktop:gap-x-[124px] tablet:mt-6 tablet:mb-30 mt-16 mb-22 flex flex-col items-center gap-y-8'>
                <picture>
                    <source
                        height={560}
                        media={`(min-width: ${BREAKPOINTS.desktop})`}
                        srcSet={product.image.desktop}
                        width={540}
                    />
                    <source
                        height={480}
                        media={`(min-width: ${BREAKPOINTS.tablet})`}
                        srcSet={product.image.tablet}
                        width={281}
                    />
                    <source
                        height={352}
                        media={`(max-width: ${BREAKPOINTS.tablet})`}
                        srcSet={product.image.mobile}
                        width={327}
                    />
                    <img alt={product.name} className='rounded-lg' />
                </picture>
                <div className='tablet:w-[340px] desktop:w-[445px] desktop:items-start flex w-[327px] flex-col items-start'>
                    {product.new ? (
                        <span className='text-overline text-dark-orange mb-6 uppercase'>
                            new product
                        </span>
                    ) : null}
                    <h3 className='text-h4 desktop:text-h2 mb-6 text-black uppercase'>
                        {product.name}
                    </h3>
                    <p className='text-body desktop:text-left mb-6 text-left text-black/50'>
                        {product.description}
                    </p>
                    <p className='mb-[31px] font-bold'>{formatMoney(product.price)}</p>
                    <div className='flex w-full items-center gap-x-4'>
                        <div className='flex items-center justify-between bg-gray-500'>
                            <button className='px-8 py-4' type='button'>
                                +
                            </button>
                            <div>5</div>
                            <button className='px-8 py-4' type='button'>
                                -
                            </button>
                        </div>
                        <Button label='add to cart' />
                    </div>
                </div>
            </div>
            <div className='tablet:mb-[153px] desktop:gap-y-0 desktop:mb-40 desktop:flex-row desktop:gap-x-[125px] mb-22 flex flex-col gap-y-22'>
                <div>
                    <h5 className='text-h5 tablet:mb-8 mb-6 uppercase'>features</h5>
                    <p className='text-body desktop:max-w-[635px] text-left whitespace-pre-wrap text-black/50'>
                        {product.features}
                    </p>
                </div>
                <div className='tablet:flex-row tablet:gap-y-0 tablet:gap-x-[165px] desktop:flex-col desktop:gap-y-8 flex flex-col gap-y-6'>
                    <h5 className='text-h5 uppercase'>in the box</h5>
                    <ul>
                        {product.includes.map((i) => (
                            <li key={i.item} className='text-body text-black/50'>
                                <span className='text-dark-orange desktop:mr-[21px] mr-6'>
                                    {i.quantity}x
                                </span>
                                {i.item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <GeneralProductCategoriesList />
            <CompanyInfo />
        </AppContainer>
    );
}
