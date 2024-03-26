import { Helmet } from 'react-helmet'
import faq from '../../data/faq.json'
import ContactUs from '../components/ContactUs'
import FAQList from '../components/faq/FAQList'
import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <Helmet>
        <title>Sneakers | Contact</title>
      </Helmet>
      <main className='flex max-md:flex-col xl:mx-40 mx-10 xl:my-20 md:m-10 xl:px-10 py-10 xl:gap-40 gap-10 items-center justify-between'>
        <div className='flex flex-col gap-10 md:w-1/2'>
          <h1 className='text-xl font-bold'>
            Here is a frequently asked questions
          </h1>
          <FAQList faqItems={faq} />
        </div>
        <ContactUs />
      </main>
    </Layout>
  )
}
