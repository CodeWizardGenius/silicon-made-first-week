import { Heart, Home, Search, User } from "lucide-react"

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full flex justify-around p-4 border-t bg-white shadow-sm">
      <Home className="cursor-pointer hover:text-blue-500  transition-colors"/>
      <Search className="cursor-pointer hover:text-blue-500  transition-colors" />
      <Heart className="cursor-pointer hover:text-blue-500  transition-colors"/>
      <User className="cursor-pointer hover:text-blue-500  transition-colors"/>
    </div>
  )
}

export default Footer