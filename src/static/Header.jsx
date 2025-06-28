import React from 'react'
import Personal from '../pages/Personal'
import Company from '../pages/Company'
import Help from '../pages/Help'
import Business from '../pages/Business'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-14 py-4 '>
        <section className=' flex justify-between items-center gap-10'>
            <main>
                <img className=' w-24 ' src="./kuda.png" alt="" />
            </main>
            <main className=' flex justify-center items-center gap-5'>
                <Personal/>
                <p>Business</p>
                <p>Company</p>
                <p>Help</p>
            </main>

        </section>
        <section className=' flex justify-center items-center gap-4'>
            <main className=' flex justify-center items-center gap-4'>
                <p>Sign in</p>
                <button className='bg-[#40196D] text-[white] px-6 rounded-[10px] py-2'>Join Kuda</button>
            </main>
            <main ><img className='w-10 bg-[#AAD3C2] p-[5px] rounded-[10px]' src="./nig.png" alt="" /></main>
        </section>
    </div>
  )
}

export default Header