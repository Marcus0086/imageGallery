import ImageCard from "./imageCard";
import Loading from "./loading";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store";
import ImagePopUp from "./imagePopup";
import { MapProps } from "./types/mapprops";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useContext(Context);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const AccessKey = "4h_Cgeob8pyOszhu1e6u72a2m-TG_QKbRFvnk1vNZVA";
  useEffect(() => {
    const fetchImages = async () => {
      const imagesBuffer = await fetch(
        `https://api.unsplash.com/photos/?client_id=${AccessKey}`
      );
      const imagesData = await imagesBuffer.json();
      return imagesData;
    };
    if (state.data.length === 0) {
      fetchImages().then((imagesData) => {
        setIsLoading(false);
        dispatch({ type: "Add_Data", payload: imagesData });
      });
    }
  }, [AccessKey, dispatch, state.data.length]);

  return (
    <>
      {!isLoading ? <div>
        <div className="min-w-full">
          <div className="flex bg-mountain items-center justify-center flex-col w-full bg-cover bg-center bg-no-repeat h-72 lg:h-96 p-6">
            <p className="text-center text-2xl py-3 font-bold text-white lg:text-4xl">
              Download High Quality Images by creators
            </p>
            <p className="text-center text-xs px-8 py-1 text-gray-400 lg:text-base">
              Over 2.4 million+ stock Images by our talented community
            </p>
          </div>
        </div>
        <div className="masonary">
          {state.data?.map(
            (
              {
                user: {
                  name,
                  username,
                  profile_image: { small: pSmall }
                },
                blur_hash,
                description,
                urls: { regular, small },
                likes
              }: MapProps,
              idx: number
            ) => (
              <ImageCard
                key={idx}
                src={regular}
                name={name}
                username={username}
                likes={likes}
                profile={pSmall}
                description={description}
                blurhash={blur_hash}
                handleOpen={handleOpen}
              />
            )
          )}
        </div>
      </div> : <Loading />}
      <ImagePopUp open={open} handleClose={handleClose} />
    </>
  );
};

export default Feed;
