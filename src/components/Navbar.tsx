import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className = "h-12 p-4 flex items-center justify-between text-amber-800 border-b-2 border-b-amber-800 uppercase">
      {/* Logo */}
<div className = "text-xl"> 
  <Link href = " /"> Pizza </Link>
</div>


    {/* Mobile Menu */}
<div>
<Menu />
</div>
</div>

  );
};

export default Navbar