import React from 'react'
import { Link } from 'react-router-dom'
export default function Register() {
  return  (<div className='bg-orange-500'>
  <div className='max-w-7xl mx-auto px-4'>
    <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
      <div className='lg:col-span-2 lg:col-start-4'>
        <form className='p-10 rounded bg-white shadow-sm'>
          <div className='text-2xl'>Đăng ký</div>
          <div className='mt-8'>
            <input
              type='email'
              name='email'
              className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
              placeholder='Email'
            />
            <div className='mt-1 text-red-600 min-h-[1rem] text-sm'>Email không hợp lệ</div>
          </div>
          <div className='mt-2'>
            <input
              type='password'
              name='confirm_password'
              className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
              placeholder='confirm Mật khẩu'
            />
            <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
          </div>
          <button className="w-full text-center py-4 px-2 uppercase bg-red-400  text-white text-sm hover:bg-red-600 "> đăng ký </button>
          <div className='mt-2'>
            <div className='flex items-center justify-center gap-2'>
              <span className='text-gray-500'>Bạn đã có tài khoản ? </span>
              <Link to='/login' className='text-red-400'>Đăng nhập</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
)
}
