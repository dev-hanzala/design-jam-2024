import React from 'react'

const UnderlinedButton = ({ children }: { children: React.ReactNode }) => {
	return (
    <button className="w-fit border-b-2 border-black pb-3 text-2xl font-medium">
			{children}
    </button>
  );
}

export default UnderlinedButton