import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import { RadioGroup } from '@headlessui/react';
import { Link } from 'react-router-dom';
const plans = [
  {
    name: 'Pay Per View',
    amount: '2,000 Naira',
  },
  {
    name: 'Monthly Subscription',
    amount: '10,000',
  },
  {
    name: 'Business (On Request)',
    amount: '** ** **',
  },
];

function SubscriptionPage() {
  const [selected, setSelected] = useState(plans[0]);

  useEffect(() => {
    document.title = 'Subscriptions | Virtual Tours NG';
  }, []);

  return (
    <main className='subscription-page'>
      <Navbar />
      <section className='w-full lg:w-[70%] 2xl:w-[60%] lg:mx-auto px-3 sm:px-[20px] min-h-screen'>
        <section>
          <h3 className='mt-16 mb-4 text-3xl poppins'>
            Select Your Virtual Tour Ng Subscription Plan
          </h3>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quae
            architecto distinctio eligendi dolores dicta et impedit, deserunt ad
            velit illum dignissimos obcaecati? Rerum inventore praesentium
            minima vel aliquam amet.
          </div>
        </section>
        <section className='subscription-cards-wrapper mx-auto w-full mt-10'>
          <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className='sr-only'>Server size</RadioGroup.Label>
            <div className='space-y-6'>
              {plans.map((plan) => (
                <RadioGroup.Option
                  key={plan.name}
                  value={plan}
                  className={({ active, checked }) =>
                    `${
                      active
                        ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                        : ''
                    }
                  ${
                    checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none border`
                  }
                >
                  {({ checked }) => (
                    <>
                      <div className='flex w-full items-center justify-between'>
                        <div className='flex items-center'>
                          <div className='text-sm flex gap-y-4 flex-col'>
                            <RadioGroup.Label
                              as='p'
                              className={`poppins font-bold ${
                                checked ? 'text-white' : 'text-gray-900'
                              }`}
                            >
                              {plan.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as='span'
                              className={`inline ${
                                checked ? 'text-sky-100' : 'text-gray-500'
                              }`}
                            >
                              <span>{plan.amount}</span>
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className='shrink-0 text-white'>
                            <CheckIcon className='h-6 w-6' />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </section>
        <section className='mt-20'>
          <Link to='/destinations/obudu-cattle-ranch'>
            <div className='text-center bg-blue-400 px-4 py-4 text-white mt-10 font-bold poppins w-full sm:w-[400px] mx-auto'>
              Proceed to make payment
            </div>
          </Link>
        </section>
      </section>
      <Footer />
    </main>
  );
}

export default SubscriptionPage;

function CheckIcon(props) {
  return (
    <svg viewBox='0 0 24 24' fill='none' {...props}>
      <circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
      <path
        d='M7 13l3 3 7-7'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
