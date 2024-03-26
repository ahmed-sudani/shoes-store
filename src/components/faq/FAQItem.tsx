import React, { useState } from 'react'

type Props = {
  question: string
  answer: string
}

const FAQItem: React.FC<Props> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='border border-gray-200 rounded-md shadow-md'>
      <div
        className='flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-100'
        onClick={toggleAccordion}
      >
        <h3 className='text-lg font-medium'>{question}</h3>
        <img
          className={`w-6 h-6 transition-transform transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          src='https://www.svgrepo.com/show/533619/arrow-sm-down.svg'
          alt='Arrow Icon'
        />
      </div>
      {isOpen && (
        <div className='px-4 py-3 border-t border-gray-200'>
          <p className='text-sm text-gray-700'>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default FAQItem
