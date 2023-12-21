import Image from "next/image"
import Link from "next/link"
import GenreDropdown from "./GenreDropdown"
import SearchInput from "./SearchInput"
import { ThemeToggle } from "./ThemeToggle"

const Header = () => {
  return (
    <header className="fixed w-full z-20 top-0 flex justify-between items-center p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Disney Logo"
          width={120}
          height={100}
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>

      <div className="flex gap-x-2 ">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggle />
      </div>
    </header>
  )
}
export default Header
