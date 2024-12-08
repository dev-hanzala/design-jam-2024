import React from 'react'

const Specialty = () => {
	return (
    <div className="flex gap-[44px] bg-[#FAF4F4] px-[100px] py-24">
      <div className="flex flex-col items-start justify-center">
        <p className="text-[32px] font-medium">Free Delivery</p>
        <p className="text-xl">
          For all oders over $50, consectetur adipim scing elit.
        </p>
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-[32px] font-medium">90 Days Return</p>
        <p className="text-xl">
          If goods have problems, consectetur adipim scing elit.
        </p>
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-[32px] font-medium">Secure Payment</p>
        <p className="text-xl">
          100% secure payment, consectetur adipim scing elit.
        </p>
      </div>
    </div>
  );
}

export default Specialty