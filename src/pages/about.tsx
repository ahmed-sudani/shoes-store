import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

const AboutUs = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sneakers | About</title>
      </Helmet>
      <div className='flex max-md:flex-col xl:mx-40 mx-10 xl:my-20 md:m-10 xl:px-10 py-10 xl:gap-40 gap-10 justify-between'>
        <div className='max-w-7xl mx-auto px-4'>
          <h1 className='text-3xl font-semibold text-gray-800 mb-8'>
            About Sneakers
          </h1>
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center'>
              <img
                src='https://www.svgrepo.com/show/506432/check-circle.svg'
                alt='Check Circle Icon'
                className='w-6 h-6 mr-2'
              />
              <p className='text-gray-700'>
                Welcome to Sneakers, where comfort meets style! We are dedicated
                to providing high-quality footwear for all occasions, from
                casual outings to formal events. Our mission is to offer
                fashionable shoes that not only look great but also feel great
                on your feet.
              </p>
            </div>
            <div className='flex items-center'>
              <img
                src='https://www.svgrepo.com/show/506432/check-circle.svg'
                alt='Check Circle Icon'
                className='w-6 h-6 mr-2'
              />
              <p className='text-gray-700'>
                At Sneakers, we understand the importance of both fashion and
                function. That's why we carefully select materials and designs
                that prioritize both style and comfort. Whether you're walking
                through the city streets or hitting the trails, our shoes are
                designed to keep up with your active lifestyle.
              </p>
            </div>
            <div className='flex items-center'>
              <img
                src='https://www.svgrepo.com/show/506432/check-circle.svg'
                alt='Check Circle Icon'
                className='w-6 h-6 mr-2'
              />
              <p className='text-gray-700'>
                We believe that everyone deserves to wear shoes that make them
                feel confident and comfortable. That's why we offer a wide range
                of sizes and styles to suit every individual's unique taste and
                preferences. Thank you for choosing Sneakers for your footwear
                needs!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs
