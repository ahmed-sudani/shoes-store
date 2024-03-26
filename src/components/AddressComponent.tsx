import React, { useMemo } from 'react'
import countryList from 'react-select-country-list'
import Select from 'react-select'

interface AddressComponentProps {
  name: string
}

const AddressComponent: React.FC<AddressComponentProps> = ({ name }) => {
  const options = useMemo(() => countryList().getData(), [])
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col gap-2'>
        <label>{name}</label>
        <div className='flex flex-col'>
          <input
            className='text-sm p-2 py-3 rounded border border-b-0 focus:border-b border-gray-300'
            type='text'
            placeholder='Name'
          />
          <Select
            styles={{
              control: (styles) => ({
                ...styles,
                paddingTop: '6px',
                paddingBottom: '6px',
                fontSize: '14px',
                lineHeight: '20px',
              }),
            }}
            options={options}
          />
          <input
            className='text-sm p-2 py-3 rounded border border-t-0 focus:border-t border-gray-300'
            type='text'
            placeholder='Address'
          />
        </div>
      </div>
    </div>
  )
}

export default AddressComponent
