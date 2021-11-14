import Link from "next/link";

const NavUlComponent = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLUListElement> &
    React.HTMLAttributes<HTMLUListElement>
) => {
  return (
    <ul {...props}>
      <li>
        <Link href={"/explore"}>Explore</Link>
      </li>
      <li>
        <Link href={"/collection"}>Collection</Link>
      </li>
      <li>
        <Link href={"/community"}>Community</Link>
      </li>
    </ul>
  );
};

export default NavUlComponent;
