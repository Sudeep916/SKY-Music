import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export default function SearchBox() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="relative w-full max-w-sm">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-800 dark:text-gray-200 pointer-events-none" />
        <Input
          type="search"
          placeholder="Search..."
          className="pl-8 text-gray-800 dark:text-gray-200 bg-sky-100 dark:bg-gray-800 border-sky-300 dark:border-gray-700 focus:border-sky-500 dark:focus:border-sky-400 focus:ring-sky-500 dark:focus:ring-sky-400 placeholder-gray-500 dark:placeholder-gray-400"
        />
      </form>
  )
}

