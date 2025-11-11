import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import AppContainer from './AppContainer';
import Button from './Button';

const ErrorComponent = (props: { readonly error: Error }) => {
    const [showError, setShowError] = useState(true);
    return (
        <AppContainer>
            <div className='my-2 flex flex-col gap-y-2'>
                <div className='flex items-center gap-2'>
                    <strong className='text-h6 text-black'>Something went wrong!</strong>
                    <button
                        className='rounded-sm border-1 border-black p-2 hover:cursor-pointer'
                        type='button'
                        onClick={() => {
                            setShowError((sw) => !sw);
                        }}
                    >
                        {showError ? 'Hide' : 'Show'} Error
                    </button>
                </div>
                {showError ? (
                    <div>
                        <pre className='overflow-auto rounded-sm border-1 border-red-400 p-2 text-red-400'>
                            <code>{props.error.message}</code>
                        </pre>
                    </div>
                ) : null}
                <Link className='self-center' to='/home'>
                    <Button label='go back home' />
                </Link>
            </div>
        </AppContainer>
    );
};
export default ErrorComponent;
