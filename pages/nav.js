import Link from 'next/Link';


const NavBar = () => (
  <div>
    <ul>
      <li>
        <Link href="/"><a>Home Page</a></Link>
        <Link href="/TestSSR"><a>Test Page SSR</a></Link>
      </li>
    </ul>
  </div>
);

export default NavBar;