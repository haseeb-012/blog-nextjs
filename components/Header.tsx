import Image from 'next/image';
import React from 'react'

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white px-4 py-4 lg:px-8 shadow-sm">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="The Tested List"
            width={120}
            height={40}
            className="h-8 w-auto  md:h-24"
          />
        </div>
      </div>
    </header>
  );
}

export default Header