import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon';
import Image from 'next/image'

const Navbar = () => {
  const user = false;
  return (
    <div className = "h-12 p-4 flex items-center justify-between text-orange-500 border-b-2 border-b-black uppercase md:h-24 lg:px-20 xl:px-40">
     {/*LEFT LINKS*/} 
      <div className = "hidden md:flex gap-4 flex-1">  
      <Link href = "/"> Home </Link>
      <Link href = "/menu"> Menu </Link>
      <Link href = "/contact"> Contact </Link>
      </div>
      {/* Logo */}

<div className = "text-xl md:font-bold flex-1 md:text-center"> 
  <Link href = " /"> Pizza </Link>
</div>


    {/* Mobile Menu */}
<div className="md:hidden">
<Menu />
</div>
{/*RIGHT LINKS*/}
<div className = "hidden md:flex gap-4 justify-end flex-1">  
<div className = "md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-black px-1 rounded-md"> 
  <Image src = "/phone.png" alt = " " width = {20} height = {20} />
  <span> 123-456-7890 </span>
</div>
      {!user ? (<Link href = "/menu"> Menu </Link>) :(
      <Link href = "/orders">Orders</Link> )}
      <CartIcon/>
      </div>
</div>

  );
};

export default Navbar