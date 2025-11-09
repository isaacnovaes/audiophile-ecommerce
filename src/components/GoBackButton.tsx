import { useRouter } from '@tanstack/react-router';

const GoBackButton = () => {
    const router = useRouter();

    return (
        <button
            className='text-body desktop:mt-20 desktop:mb-14 mt-8 mb-6 -translate-x-3 p-3 text-black/50 hover:cursor-pointer'
            type='button'
            onClick={() => {
                router.history.back();
            }}
        >
            Go Back
        </button>
    );
};
export default GoBackButton;
