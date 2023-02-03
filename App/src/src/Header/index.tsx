const Header = () => {
  return (
    <div className="flex justify-between pt-[20px] px-[100px]">
      <span className="text-[30px]">Ask Rank</span>
      <div className="space-x-[30px]">
        <span className="text-[20px] cursor-pointer">Home</span>
        <span className="text-[20px] cursor-pointer">About</span>
        <span className="text-[20px] cursor-pointer">Contacts</span>
        <span className="text-[20px] cursor-pointer">Language</span>
      </div>
    </div>
  )
}

export default Header