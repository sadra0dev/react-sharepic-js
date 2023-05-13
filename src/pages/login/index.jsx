import {FcGoogle, VideoLogin} from "components"
import {Navigate, GoogleLogin} from "libs"
import {useUserStore} from "stores"
import {sanity} from "configs"

export const LoginPage = ({user}) => {
  const {setUser} = useUserStore((state) => ({
    setUser: state.setUser,
  }))

  const responseGoogle = (response) => {
    const {name: userName, googleId: _id, imageUrl: image} = response.profileObj

    sanity
      .createIfNotExists({_id, _type: "user", userName, image})
      .then((res) => setUser({_id, userName, image}))
      .catch((err) => {
        setUser({_id, userName, image})
      })
  }

  return user ? (
    <Navigate to="/user" replace={true} />
  ) : (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <VideoLogin />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src="/assets/logowhite.png" width="130px" alt="" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
              render={(renderProps) => {
                return (
                  <button
                    type="button"
                    className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <FcGoogle className="mr-4" /> Sign in with google
                  </button>
                )
              }}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
