import Link from 'next/Link';


const NavBar = () => (
  <div>
    <ul>
      <li>
        <Link href="/" ><a style={{marginLeft: "5rem"}}>Home Page</a></Link>
        <Link href="/TestSSR" ><a style={{marginLeft: "5rem"}}>Test Page SSR</a></Link>
        <Link href="/tiktok" ><a style={{marginLeft: "5rem"}}>Test Page Tiktok</a></Link>
      
      </li>
    </ul>
  </div>
);

export default NavBar;