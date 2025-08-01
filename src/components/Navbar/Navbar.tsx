
export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>Md Tanbir Hossen</div>

      <div>
        <ul className=" gap-4 hidden md:flex">
            <li>Home</li>
            <li>About me</li> 
            <li>contact</li>
            <li>Resume</li>
        </ul>
        
      </div>

    </div>
  )
}
