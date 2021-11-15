import ImageCard from "./imageCard";
import Loading from "./loading";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store";
import ImagePopUp from "./imagePopup";
import { MapProps } from "./types/mapprops";
import { createApi } from "unsplash-js";
import SearchBar from './searchBar';
const Feed = () => {
  const unsplash = createApi({
    accessKey: "4h_Cgeob8pyOszhu1e6u72a2m-TG_QKbRFvnk1vNZVA"
  });
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

  const upDateData = (title: string) => {
    const searchQuery = title;
    unsplash.search
      .getPhotos({
        query: searchQuery,
        page: 1,
        perPage: 10
      })
      .then((res) => {
        const result = res.response?.results.map((val) => {
          return { ...val, title: searchQuery }
        });
        dispatch({
          type: "Update_Data",
          payload: result
        });
        const titleid = document.getElementById("title");
        if (titleid) {
          titleid.scrollIntoView({
            behavior: 'smooth'
          })
        }
      });
  };

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
        {state.data[0]?.title &&
          <div id='title' className="flex items-center justify-start w-full p-4 mt-12">
            <h1 className="text-3xl tablet:text-4xl font-bold text-gray-600 dark:text-white mx-auto tablet:mx-32">{
              `${state.data[0].title}`.charAt(0).toUpperCase() + `${state.data[0].title}`.slice(1)}
            </h1>
          </div>}
        {state.data[0]?.tags &&
          <ul id='carousel' className='mt-6 flex items-center justify-between w-96 tablet:w-large no-scrollbar 
          desktop:w-elarge p-4 mx-auto overflow-x-auto '>
            {state.data?.map((val: any, id: number) => {
              const rtitle = `${val.tags[0]?.title}`.charAt(0).toUpperCase() + `${val.tags[0]?.title}`.slice(1);
              return <li
                onClick={() => upDateData(rtitle)}
                className='flex items-center justify-center text-center border-2 cursor-pointer
                border-gray-300 hover:border-gray-500 rounded-md px-8 py-4 m-4' key={id}>
                {rtitle}
              </li>
            })}
          </ul>
        }
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
                urls: { regular },
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
