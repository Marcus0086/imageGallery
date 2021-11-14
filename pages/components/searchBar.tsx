import { useState, useContext, useCallback, useRef } from "react";
import SearchIcon from "./icons/searchicon";
import CrossIcon from "./icons/crossicon";
import { createApi } from "unsplash-js";
import { Context } from "../store";
import type { Basic } from "unsplash-js/dist/methods/photos/types";

const SearchBar = () => {
  const unsplash = createApi({
    accessKey: "4h_Cgeob8pyOszhu1e6u72a2m-TG_QKbRFvnk1vNZVA"
  });
  const [tagData, setData] = useState<string[][]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isVisible, setVisible] = useState(false);
  const [, dispatch] = useContext(Context);
  const turnDiv = () => {
    setVisible(true);
  };
  const turnDivOff = () => {
    setVisible(false);
  };
  const clearInput = () => {
    turnDivOff();
    if (inputRef.current) inputRef.current.value = "";
  };
  const searchImages = useCallback(
    (e) => {
      e.preventDefault();
      unsplash.search
        .getPhotos({
          query: e.target.value,
          page: 1,
          perPage: 10
        })
        .then((res) => {
          if (res.type === "success") {
            const tags: [] | string[][] = [
              ...res.response?.results?.map(({ tags }) => {
                return [...tags.map(({ title }: { title: string }) => title)];
              })
            ];
            setData(tags);
          }
        });
    },
    [unsplash.search]
  );

  const upDateData = (title: string, value: string) => {
    const searchQuery = title + " " + value;
    unsplash.search
      .getPhotos({
        query: searchQuery,
        page: 1,
        perPage: 10
      })
      .then((res) => {
        dispatch({
          type: "Update_Data",
          payload: res.response?.results
        });
      });
  };

  const debounce = (
    func: { (e: any): void; apply?: any },
    wait: number | undefined
  ) => {
    let timeout: NodeJS.Timeout | null;
    return (...args: any) => {
      const context = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  };
  const handler = useCallback(debounce(searchImages, 600), []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="flex items-center justify-center flex-col flex-grow">
      <div className="search" onFocus={turnDiv}>
        <SearchIcon aria-label="Search" />
        <input
          type="text"
          ref={inputRef}
          name="search"
          placeholder="Search images here"
          autoComplete="off"
          onChange={handler}
          className="outline-none w-4 flex-grow 
                    bg-transparent px-5 text-base"
        />
        <CrossIcon className={"cursor-pointer"} onClick={clearInput} />
      </div>
      {tagData.length > 0 && (
        <div
          className={
            isVisible ? "search mt-4 absolute top-14 h-auto p-4" : "hidden"
          }
        >
          <ul className="top-14 w-full">
            {tagData.map(([_, title, val], id) => (
              <li
                key={id}
                className="text-md font-medium text-lgrayish dark:text-gray-100 text-start my-2 cursor-pointer"
                onClick={() => upDateData(title, val)}
              >
                {title + " " + val}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
