import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Avatar } from "@mui/material";
import ThumbUpOffAltIcon from "./icons/thumbsupicon";
import { ImageProps } from "./types/imageprops";

const ImageCard = ({
  src,
  name,
  username,
  likes,
  profile,
  description,
  blurhash,
  handleOpen
}: ImageProps) => {
  return (
    <ImageListItem className="rounded-lg overflow-hidden border-gray-100 dark:border-none border-2 m-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${src}`}
        srcSet={`${src}`}
        alt={description}
        loading="lazy"
        onClick={handleOpen}
      />
      <ImageListItemBar
        className="pl-2 py-2 px-2 lg:pl-2 lg:py-4 dark:!bg-grayish !bg-white cursor-pointer"
        actionIcon={<Avatar alt="Remy Sharp" src={profile} />}
        actionPosition="left"
      />
      <br />
      <ImageListItemBar
        className="ml-11 pr-4 lg:py-2"
        title={
          <label className="text-gray-500 dark:text-white font-bold">
            {name}
          </label>
        }
        subtitle={
          <label className="text-gray-400 dark:text-white font-medium italic">
            @{username}
          </label>
        }
        sx={{ backgroundColor: "transparent" }}
        actionIcon={
          <div className="flex items-center justify-center text-gray-500 dark:text-white">
            <ThumbUpOffAltIcon className="cursor-pointer" />
            <label className="text-sm mx-2">{likes}</label>
          </div>
        }
      />
    </ImageListItem>
  );
};

export default ImageCard;
