import NavbarItem from "./navbar-item";

export default function Navbar() {
  return (
    <div className=" dark:bg-gray-600 flex justify-center bg-amber-100 lg:text-lg p-4">
      <NavbarItem title="Trending" param="fetchTrending"/>
      <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
