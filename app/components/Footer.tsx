export default function Footer() {
  return (
    <div className='py-10 border-t-[1px] border-gray-600 w-[40%] mx-auto mt-20 font-serif text-sm '>
      <div className='flex gap-4 justify-center py-5'>
        <p className='text-blue-500 hover:text-orange-300 cursor-pointer transition-colors duration-300'>
          About{" "}
        </p>
        <p className='text-blue-500 hover:text-orange-300 cursor-pointer transition-colors duration-300'>
          Privacy Policy
        </p>
        <p className='text-blue-500 hover:text-orange-300 cursor-pointer transition-colors duration-300'>
          Terms Of Use
        </p>
        <p className='text-blue-500 hover:text-orange-300 cursor-pointer transition-colors duration-300'>
          Stay in Touch
        </p>
      </div>
      <p className='text-center'>
        © Simple · by{" "}
        <span className='text-blue-500 hover:text-orange-300 cursor-pointer transition-colors duration-300'>
          Sukkoth
        </span>{" "}
      </p>
    </div>
  );
}
