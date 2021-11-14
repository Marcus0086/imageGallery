import { useTheme } from "next-themes";
const Toggle = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex items-center justify-center">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            onClick={changeTheme}
          />
          <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
