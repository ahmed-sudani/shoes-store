export default function Footer() {
  return (
    <footer>
      <div className='bg-gray-800 text-white text-center flex flex-col items-center gap-5 p-10'>
        <img className='invert' src='/images/logo.svg' alt='' />
        <p className='text-xs xl:w-1/2'>
          Discover the perfect blend of style and performance with StrideMax
          Pro. Elevate your footwear game with our cutting-edge shoes designed
          to keep you comfortable and confident in every step. Shop now and
          experience the ultimate in comfort, versatility, and style. Your
          journey to exceptional footwear starts here.
        </p>
        <div className='flex gap-5 items-center'>
          <img
            className='w-10 h-10 object-cover cursor-pointer'
            src='https://www.svgrepo.com/show/452047/linkedin-1.svg'
            alt=''
          />
          <img
            className='w-10 h-10 object-cover cursor-pointer'
            src='https://www.svgrepo.com/show/452197/facebook.svg'
            alt=''
          />
          <img
            className='w-10 h-10 object-cover cursor-pointer'
            src='https://www.svgrepo.com/show/452123/twitter.svg'
            alt=''
          />
        </div>
      </div>

      <div className='bg-black text-white text-center text-xs w-full p-4'>
        Copyright &copy; {new Date().getFullYear()} Sneakers
      </div>
    </footer>
  )
}
