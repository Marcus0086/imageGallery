import Image from "next/image";
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className='bg-loading w-full bg-cover bg-center bg-no-repeat h-96 bg-bm'>

      </div>
      <br />
      <h3 className="text-lg font-bold text-gray-500">
        Loading some awesome images....
      </h3>
    </div>
  );
};

export default Loading;
