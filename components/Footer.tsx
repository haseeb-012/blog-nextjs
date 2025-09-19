import Link from 'next/link';
import React from 'react'

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-sm text-gray-500">
            Copyright © 2025 thetestlist.com All Rights Reserved
          </div>
          <div className="flex flex-wrap justify-center space-x-4 text-sm md:justify-end md:space-x-6">
            <Link
              href="/about"
              className="flex cursor-pointer items-center text-gray-500 hover:text-gray-700"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="flex cursor-pointer items-center text-gray-500 hover:text-gray-700"
            >
              Get In Touch
            </Link>
            <Link
              href="/privacy"
              className="flex cursor-pointer items-center text-gray-500 hover:text-gray-700"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="flex cursor-pointer items-center text-gray-500 hover:text-gray-700"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer