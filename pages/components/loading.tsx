import Image from "next/image";
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/lottie.gif"
          alt='loading'
        />
      </div>
      <h3 className="text-lg font-bold text-gray-500">
        Loading some awesome images....
      </h3>
    </div>
  );
};

export default Loading;
