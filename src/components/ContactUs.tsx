import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
export default function ContactUs() {
  return (
    <section className='bg-gray-100 max-md:w-full rounded-xl py-12'>
      <div className='mx-auto px-4'>
        <h2 className='text-3xl font-semibold text-gray-800 mb-8'>
          Contact Us
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <div className='flex items-center mb-4'>
              <img
                src='https://www.svgrepo.com/show/479653/email-9.svg'
                alt='Email Icon'
                className='w-6 h-6 mr-2'
              />
              <div>
                <h3 className='text-xl font-semibold mb-1'>Email</h3>
                <p className='text-gray-700'>support@stridemaxpro.com</p>
              </div>
            </div>
            <div className='flex items-center'>
              <img
                src='https://www.svgrepo.com/show/533285/phone.svg'
                alt='Phone Icon'
                className='w-6 h-6 mr-2'
              />
              <div>
                <h3 className='text-xl font-semibold mb-1'>Phone</h3>
                <p className='text-gray-700'>1-800-123-4567</p>
              </div>
            </div>
          </div>
          <div className='md:col-span-2'>
            <div className='h-80'>
              <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={[51.505, -0.09]} />
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
