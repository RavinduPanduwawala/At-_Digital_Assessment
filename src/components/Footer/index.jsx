import React from 'react'
import Logo from '../../assets/images/logo.svg'

const Footer = () => {
  return (
    <footer className="bg-purple text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex justify-between">
          {/* Left side */}
          <div className="mb-6 md:mb-0 w-4/12">
            <a href="https://flowbite.com/" className="flex items-center">
              <img className="h-8 w-auto" src={Logo} alt="At-Digital" />
            </a>
            <p className="text-white text-sm text-start pt-4">
              Your goals is our target. Not anything in between. We use online
              marking platforms and tools to archive single objective - your
              business results.
            </p>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
            {/* First column */}
            <div className="text-start">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Our Technologies
              </h2>
              <ul className="text-white font-medium">
                <li>
                  <a href="https://flowbite.com/" className="hover:underline">
                    ReactJS
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Gatsby
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    NextJS
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    NodeJS
                  </a>
                </li>
              </ul>
            </div>

            {/* Second column */}
            <div className="text-start">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Our Services
              </h2>
              <ul className="text-white font-medium">
                <li>
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Social Media Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Web & Mobile App Development
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Data & Analytics
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <hr className="my-6 border-white sm:mx-auto lg:my-8 w-1/2" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <button className="text-white hover:text-gray-900 focus:outline-none">
              Privacy Policy
            </button>
            <div className="ms-5">|</div>
            <button className="text-white hover:text-gray-900 ms-5 focus:outline-none">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
