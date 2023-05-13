import {Link} from "libs"
export const NoPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <p className=" text-5xl font-semibold">Not Found!</p>
      <Link to="/" className="mt-10 text-blue-700 underline underline-offset-8 hover:text-blue-500">
        go to home page
      </Link>
    </div>
  )
}
