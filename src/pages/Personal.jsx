import React, {useState} from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GiHouse } from "react-icons/gi";
import { RiSendPlaneFill } from "react-icons/ri";
import { LuPiggyBank } from "react-icons/lu";
import { TfiBarChartAlt } from "react-icons/tfi";
import { FaCreditCard } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";
import { FaMobile } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaCarAlt } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { CgCircleci } from "react-icons/cg";
import { BsArrowUpRightCircle } from "react-icons/bs";
const Personal = () => {
    const [pdrop, setPdrop] = useState(false)
  return (
    <div className=' relative' onMouseEnter={()=>setPdrop(true)}
    onMouseLeave={()=> setPdrop(false)}
    >

        <div className=' flex justify-center items-center gap-1'>
            <h1>Personal</h1>
            <MdOutlineArrowDropDown/>
        </div>
        {pdrop &&(
            <div className=' flex justify-between absolute z-20 w-[400px] py-[20px] rounded-[20px] bg-[white] shadow-md ... ' >
            <section className='  w-[50%] pl-3 justify-items-start'>
                <nav className=' flex justify-center items-center gap-2  mb-2'>
                    <main className=' bg-[#F3F5FF] text-[#40196D] p-[5px] rounded-[10px] '><GiHouse/></main>
                    <main>
                        <p>Discover Personal</p>
                    </main>
                </nav>
                <nav className=' flex justify-center items-center gap-2 mb-2'>
                    <main className=' bg-[#E6FFF1] text-[#48D38A] p-[5px] rounded-[10px] '><RiSendPlaneFill/></main>
                    <main>
                        <p>Transfer & Spend</p>
                    </main>
                </nav>
                <nav className=' flex justify-center items-center gap-2 mb-2'>
                    <main className=' bg-[#FFF8E5] text-[#FFC83E] p-[5px] rounded-[10px] '><LuPiggyBank/></main>
                    <main><p>Save</p></main>
                </nav>
                <nav className=' flex justify-center items-center gap-2 mb-2'>
                    <main className=' bg-[#DFE3FF] text-[#40196D] p-[5px] rounded-[10px] '><TfiBarChartAlt/></main>
                    <main><p>Investments</p></main>
                </nav>
                <nav className=' flex justify-center items-center gap-2 mb-2'>
                    <main className=' bg-[#E6FFF1] text-[#48D38A] p-[5px] rounded-[10px] '><FaCreditCard/></main>
                    <main><p>Kuda card</p></main>
                </nav>
            </section>
            <section className=' grid gap-3 w-[50%] justify-items-start '>
                <h1>PAYMENTS</h1>
                <nav className=' flex justify-center items-center gap-2 mb-2'>
                    <main className=' bg-[#FDE3E3] text-[#F7685B] p-[5px] rounded-[10px] '><HiLightBulb/></main>
                    <main><p>electricity</p></main>
                </nav>
                    <nav className=' flex justify-center items-center gap-2 mb-2'>
                        <main className=' bg-[#E6FFF1] text-[#48D38A] p-[5px] rounded-[10px] '><FaMobile/></main>
                        <main><p>Airtime</p></main>
                    </nav>
                    <nav className=' flex justify-center items-center gap-2 mb-2'>
                        <main className=' bg-[#E3F8FD] text-[#5FDAF4] p-[5px] rounded-[10px] '><FaWifi/></main>
                        <main><p>Internet</p></main>
                    </nav>
                    <nav className=' flex justify-center items-center gap-2 mb-2'>
                        <main className=' bg-[#DFE3FF] text-[#40196D] p-[5px] rounded-[10px] '><IoBag/></main>
                        <main><p>Gift cards</p></main>

                    </nav>
                    <nav className=' flex justify-center items-center gap-2 mb-2'>
                        <main className=' bg-[#FFF8E5] text-[#FFC83E] p-[5px] rounded-[10px] '><CgCircleci/></main>
                        <main><p>Cardless Transfer</p></main>
                    </nav>
                    <nav className=' flex justify-center items-center gap-2 mb-2'>
                        <main className='bg-[#E3F8FD] text-[#5FDAF4] p-[5px] rounded-[10px] '><MdLiveTv/></main>
                        <main><p>TV</p></main>
                    </nav>
                    <nav className=' flex justify-center items-center gap-2 mb-2'>
                        <main className='bg-[#FDE3E3] text-[#F7685B] p-[5px] rounded-[10px] '><BsArrowUpRightCircle/></main>
                        <main><p>Betting</p></main>
                    </nav>
                    <nav className=' flex justify-center items-center gap-2 mb-2'>
                        <main className=' bg-[#E6FFF1] text-[#48D38A] p-[5px] rounded-[10px] '><FaCarAlt/></main>
                        <main><p>Transport</p></main>
                    </nav>
                    <h1>CREDIT</h1>
                    <nav className=' flex justify-center items-center gap-2 mb-2'>
                        <main className='bg-[#E3F8FD] text-[#5FDAF4] p-[5px] rounded-[10px] '><TbWorld/></main>
                        <main><p>Overdraft</p></main>
                    </nav>
                    <nav className=' flex justify-center items-center gap-2 mb-2'>
                        <main className=' bg-[#DFE3FF] text-[#40196D] p-[5px] rounded-[10px] '><TbMoneybag/></main>
                        <main><p>Loans</p></main>
                    </nav>
            </section>

            </div>

        )}

    </div>
  )
}

export default Personal