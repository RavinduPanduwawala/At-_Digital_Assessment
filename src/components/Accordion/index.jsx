import React, { useState } from 'react'

const Accordion = () => {
  const [openItem, setOpenItem] = useState(null)

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <div className="w-full">
      <div className="text-2xl font-bold py-5 text-purple">
        Frequently Asked Questions
      </div>
      <div className="border rounded mb-2">
        <button
          className="w-full px-8 py-6 bg-gray-100 flex justify-between items-center"
          onClick={() => toggleItem(1)}
        >
          <span
            className={`${openItem === 1 ? 'text-purple' : ''} text-xl font-bold`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </span>
          <span>{openItem === 1 ? '-' : '+'}</span>
        </button>
        {openItem === 1 && (
          <div className="px-8 py-2 bg-gray-100 text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempo
          </div>
        )}
      </div>
      <div className="border rounded mb-2">
        <button
          className="w-full px-8 py-6 bg-gray-100 flex justify-between items-center"
          onClick={() => toggleItem(2)}
        >
          <span
            className={`${openItem === 2 ? 'text-purple' : ''} text-xl font-bold`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </span>
          <span>{openItem === 2 ? '-' : '+'}</span>
        </button>
        {openItem === 2 && (
          <div className="px-8 py-2 bg-gray-100 text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempo
          </div>
        )}
      </div>
      <div className="border rounded mb-2">
        <button
          className="w-full px-8 py-6 bg-gray-100 flex justify-between items-center"
          onClick={() => toggleItem(3)}
        >
          <span
            className={`${openItem === 3 ? 'text-purple' : ''} text-xl font-bold`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </span>
          <span>{openItem === 3 ? '-' : '+'}</span>
        </button>
        {openItem === 3 && (
          <div className="px-8 py-2 bg-gray-100 text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempo
          </div>
        )}
      </div>
    </div>
  )
}

export default Accordion
