import React from 'react';
import services from '../../public/services.js';
const Services = () => {
    return (
        <div>
            <h1 className='text-primary tect-3xl font-semibold mt-14'>The services i offer:</h1>
            <div className='grid md:grid-cols-3 gap-5 my-8'>
                {
                    services.map(services => <div key={services.id} className='service-card flex flex-col justify-center items-center
                     text-center text-white p-6'>
                        <img src={services.image} className='mb-3' alt="" />
                        <h6 className='text-2xl mb-4'>{services.title}</h6>
                        <p className='text-base'>{services.description}</p>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;