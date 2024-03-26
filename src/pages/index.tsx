import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Sneakers | Home</title>
      </Helmet>
      <div className='flex flex-col xl:gap-20 gap-10'>
        <section className='relative items-center xl:min-h-screen flex xl:px-40 py-10 px-10 bg-red-500 overflow-auto max-md:flex-col-reverse xl:gap-10 gap-5 xl:justify-between max-md:justify-center'>
          <div className='flex flex-col xl:gap-10 gap-5 items-start basis-1/2'>
            <h1 className='xl:text-5xl max-xl:text-2xl font-bold text-white'>
              StrideMax Pro
            </h1>
            <p className='text-white'>
              Step into comfort and style with our revolutionary new shoe, the
              StrideMax Pro. Crafted with precision engineering and cutting-edge
              design, these shoes are more than just footwear; they're a
              statement of performance and fashion. Whether you're hitting the
              streets for a run or stepping into the boardroom, the StrideMax
              Pro is your ultimate companion, offering unparalleled comfort,
              support, and durability.
            </p>
            <Link
              className='px-20 py-5 border max-md:w-full text-center text-white'
              to='/product'
            >
              Order Now
            </Link>
          </div>
          <div className='md:w-1/2 flex-grow'>
            <LazyLoadImage
              effect='blur'
              className='object-contain'
              src='/images/derrick-payton-jHXyDTQgt0A-unsplash-removebg-preview.png'
              alt=''
            />
          </div>
        </section>

        <section className='items-center flex xl:px-40 px-10 overflow-auto max-md:flex-col xl:gap-10 gap-5 justify-between'>
          <div className='md:w-1/2'>
            <LazyLoadImage
              effect='blur'
              className='object-contain rounded-xl'
              src='https://images.unsplash.com/photo-1643584548820-fc2ea2c95ed8?q=80&w=1880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
            />
          </div>

          <div className='flex flex-col xl:gap-10 gap-5 items-start basis-1/2'>
            <h1 className='xl:text-5xl text-2xl font-bold'>
              Style and Convenience
            </h1>
            <p>
              Transition seamlessly from the gym to the urban jungle with the
              StrideMax Pro's versatile design. Engineered to complement your
              active lifestyle, these shoes blend performance and style
              effortlessly. Whether you're pairing them with athletic gear for a
              workout session or dressing them up with casual attire for a day
              out, the StrideMax Pro adapts to any setting with ease, ensuring
              you always look and feel your best.
            </p>
            <Link
              className='px-20 py-5 border max-md:w-full text-center'
              to='/product'
            >
              Order Now
            </Link>
          </div>
        </section>

        <section className='items-center flex xl:px-40 px-10 overflow-auto max-md:flex-col-reverse xl:gap-10 gap-5 xl:justify-between justify-center'>
          <div className='flex flex-col gap-5 items-start basis-1/2'>
            <h1 className='xl:text-5xl text-2xl font-bold'>
              Performance Enhancements
            </h1>
            <p>
              With our advanced cushioning technology, the StrideMax Pro ensures
              each step is met with unparalleled comfort and responsiveness.
              Whether you're pounding the pavement or sprinting towards the
              finish line, our dynamic cushioning system absorbs shock and
              returns energy, propelling you forward with each stride.
            </p>
            <ul className='list-disc list-inside'>
              <li>Dynamic Cushioning</li>
              <li>Breathable Mesh Upper</li>
              <li>Enhanced Stability</li>
              <li>Lightweight Construction</li>
              <li>Durable Outsole</li>
            </ul>

            <Link
              className='px-20 py-5 border max-md:w-full text-center'
              to='/product'
            >
              Order Now
            </Link>
          </div>
          <div className='md:w-1/2'>
            <LazyLoadImage
              effect='blur'
              className='object-contain rounded-xl'
              src='https://images.unsplash.com/photo-1643584549037-96e2a1652a1e?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
            />
          </div>
        </section>
        <section>
          <div className='max-w-7xl mx-auto px-4'>
            <h2 className='text-3xl font-semibold text-gray-800 mb-8'>
              Testimonials
            </h2>
            <div className='flex flex-wrap gap-5'>
              <div className='bg-white p-6 rounded-lg shadow-md flex items-center max-md:flex-col gap-5'>
                <div className=''>
                  <img
                    src='https://randomuser.me/api/portraits/men/1.jpg'
                    alt='John Doe'
                    className='w-16 h-16 rounded-full'
                  />
                </div>
                <div>
                  <p className='text-gray-700 mb-4 max-md:text-center'>
                    "I love my new sneakers from Sneakers! They are so
                    comfortable and stylish. Definitely recommend them to
                    everyone."
                  </p>
                  <p className='text-gray-600 font-semibold max-md:text-center'>
                    - John Doe
                  </p>
                </div>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md flex items-center max-md:flex-col gap-5'>
                <div className=''>
                  <img
                    src='https://randomuser.me/api/portraits/men/2.jpg'
                    alt='Michael Johnson'
                    className='w-16 h-16 rounded-full'
                  />
                </div>
                <div>
                  <p className='text-gray-700 mb-4 max-md:text-center'>
                    "Sneakers has a fantastic selection of shoes for every
                    occasion. I couldn't be happier with my purchase!"
                  </p>
                  <p className='text-gray-600 font-semibold max-md:text-center'>
                    - Michael Johnson
                  </p>
                </div>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md flex items-center max-md:flex-col gap-5'>
                <div>
                  <img
                    src='https://randomuser.me/api/portraits/men/3.jpg'
                    alt='David Williams'
                    className='w-16 h-16 rounded-full'
                  />
                </div>
                <div>
                  <p className='text-gray-700 mb-4 max-md:text-center'>
                    "The quality of the shoes from Sneakers is unmatched. I
                    highly recommend them to anyone looking for comfortable
                    footwear."
                  </p>
                  <p className='text-gray-600 font-semibold max-md:text-center'>
                    - David Williams
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='flex flex-col items-center xl:px-40 px-10 overflow-auto gap-10 justify-center'>
          <h2 className='text-center xl:text-4xl text-2xl font-bold'>
            Why Chose Us?
          </h2>

          <div className='flex max-md:flex-col flex-wrap justify-center gap-10 p-2'>
            <div className='flex flex-col gap-2 items-center md:w-96 rounded-xl overflow-hidden bg-white shadow p-4 cursor-default hover:shadow-md'>
              <img
                className='w-20'
                src='/images/local_shipping_FILL0_wght300_GRAD0_opsz24.svg'
                alt=''
              />
              <h3 className='text-center text-lg font-bold'>Fast Shipping</h3>
              <p className='text-center text-sm'>
                Enjoy expedited shipping options to get your StrideMax Pro shoes
                delivered to your doorstep quickly. With our efficient shipping
                processes, you'll receive your order in no time, allowing you to
                start enjoying your new shoes sooner.
              </p>
            </div>

            <div className='flex flex-col gap-2 items-center md:w-96 rounded-xl overflow-hidden bg-white shadow p-4 cursor-default hover:shadow-md'>
              <img
                className='w-20'
                src='/images/support_agent_FILL0_wght300_GRAD0_opsz24.svg'
                alt=''
              />
              <h3 className='text-center text-lg font-bold'>
                Responsive Customer Service
              </h3>
              <p className='text-center text-sm'>
                Our dedicated customer service team is here to assist you with
                any inquiries or concerns you may have. Whether you need help
                with sizing, product information, or order assistance, we're
                committed to providing prompt and helpful support to ensure your
                shopping experience is smooth and enjoyable.
              </p>
            </div>

            <div className='flex flex-col gap-2 items-center md:w-96 rounded-xl overflow-hidden bg-white shadow p-4 cursor-default hover:shadow-md'>
              <img
                className='w-20'
                src='/images/currency_exchange_FILL0_wght300_GRAD0_opsz24.svg'
                alt=''
              />
              <h3 className='text-center text-lg font-bold'>
                Easy Returns and Exchanges
              </h3>
              <p className='text-center text-sm'>
                We understand that finding the perfect fit is essential when it
                comes to footwear. That's why we offer hassle-free returns and
                exchanges, allowing you to shop with confidence. If your
                StrideMax Pro shoes don't meet your expectations, simply return
                or exchange them within our specified timeframe for a
                hassle-free resolution.
              </p>
            </div>

            <div className='flex flex-col gap-2 items-center md:w-96 rounded-xl overflow-hidden bg-white shadow p-4 cursor-default hover:shadow-md'>
              <img
                className='w-20'
                src='/images/lock_FILL0_wght300_GRAD0_opsz24.svg'
                alt=''
              />
              <h3 className='text-center text-lg font-bold'>Secure Checkout</h3>
              <p className='text-center text-sm'>
                Shop with peace of mind knowing that your personal and payment
                information is protected with our secure checkout process. We
                utilize the latest encryption technology to ensure that your
                data remains safe and secure throughout your transaction, so you
                can focus on finding the perfect pair of shoes without worrying
                about the safety of your information.
              </p>
            </div>

            <div className='flex flex-col gap-2 items-center md:w-96 rounded-xl overflow-hidden bg-white shadow p-4 cursor-default hover:shadow-md'>
              <img
                className='w-20'
                src='/images/editor_choice_FILL0_wght300_GRAD0_opsz24.svg'
                alt=''
              />
              <h3 className='text-center text-lg font-bold'>Reward Program</h3>
              <p className='text-center text-sm'>
                Join our exclusive reward program to earn points with every
                purchase, which can be redeemed for discounts, special offers,
                and more. As a valued member of our community, you'll enjoy
                additional perks and benefits designed to enhance your shopping
                experience and reward your loyalty.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
