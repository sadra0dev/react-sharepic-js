import {Sidebar, Navbar, AiFillCloseCircle, HiMenu, Logo} from "components"
import {useState, Link, Navigate, Outlet, useParams} from "libs"

export const HomePage = ({user}) => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const {userId} = useParams()

  return !user ? (
    <Navigate to="/" />
  ) : (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar user={user} />
      </div>
      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
          <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)} />
          <Logo />
          <Link to={`user/profile/${user?._id}`}>
            <img src={user?.image} alt="user-pic" className="w-9 h-9 rounded-full " />
          </Link>
        </div>
        {toggleSidebar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer"
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar closeToggle={setToggleSidebar} user={user} />
          </div>
        )}
      </div>
      <div className="pb-2 flex-1 h-screen overflow-y-scroll">
        <div className="px-2 md:px-5">
          {userId === undefined || userId === null ? (
            <div className="bg-gray-50">
              <Navbar user={user} />
            </div>
          ) : (
            ""
          )}

          <div className="h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
