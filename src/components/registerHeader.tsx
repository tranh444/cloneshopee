import { Link } from 'react-router-dom'
import shopeeImg from '../assets/shopee.png'

export default function RegisterHeader() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white shadow-sm'>
      <div className='flex items-center  '>
        <div className='flex items-center gap-2 p-2 container mx-auto'>
          <div>
            <Link to='/login'>
              <img src={shopeeImg} alt='Shopee Logo' className='w-14 h-13' />
            </Link>
          </div>
          <div className='text-orange-600 font-bold'> Đăng nhập</div>
        </div>
        <div className='ml-auto mr-8 text-orange-600 font-bold'>
          <p> bạn cần giúp đỡ?</p>
        </div>
      </div>
    </header>
  )
}
