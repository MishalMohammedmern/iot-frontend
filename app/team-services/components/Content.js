import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Content = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto mt-6 mb-6 px-4 md:px-0">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image src="/arrow.png" alt="back" width={10} height={10} />
        <h6>back</h6>
      </div>

      {[1, 2, 3].map((item, index) => (
        <div key={index} className="flex flex-col gap-5 mt-10">
          <h3 className="font-medium text-[#4B2615]">
            Law Firm is one of the leading legal offices
          </h3>
          <h3 className="font-medium text-[#4B2615] underline cursor-pointer">
            Readmore
          </h3>
          <div className="border border-b-2 border-[#97979780]"></div>
        </div>
      ))}
    </div>
  );
};

export default Content;
