interface MapProps {
  user: {
    name: string;
    username: string;
    profile_image: { small: string };
  };
  blur_hash: string;
  description: string;
  urls: { regular: string; small: string };
  likes: string;
}

export type { MapProps };
