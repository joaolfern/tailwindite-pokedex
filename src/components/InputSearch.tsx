import InputText from './InputText'
import { IoSearch } from 'react-icons/io5'
import { } from 'formik'

function InputSearch() {
  return (
    <div className='input-search inline-flex shadow-md'>
      <InputText
        className='bg-pallet-white-400 text-lg p-1 rounded rounded-r-none focus:outline-none focus:ring focus:ring-inset focus:ring-blue-400'
        name='search'
      />
      <button
        className='bg-pallet-white-400 px-3 rounded-r focus:outline-none focus:ring focus:ring-inset focus:ring-blue-400'
        type='submit'
      >
        {<IoSearch />}
      </button>
    </div>
  )
}

export default InputSearch
