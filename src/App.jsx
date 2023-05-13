import {UserProfile, Feed, PinDetail, CreatePin, Search} from "components"
import {BrowserRouter, Routes, Route, gapi} from "libs"
import {HomePage, LoginPage, NoPage, AdminPage} from "pages"
import {useUserStore} from "stores"

export default function App() {
  const user = useUserStore((state) => state.user)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage user={user} />} />
        <Route path="user/*" element={<HomePage user={user} />}>
          <Route index element={<Feed />} />
          <Route path="category/:categoryId" element={<Feed />} />
          <Route path="pin-detail/:pinId" element={<PinDetail user={user} />} />
          <Route path="create-pin" element={<CreatePin user={user} />} />
          <Route path="search" element={<Search />} />
          <Route path="profile/:userId" element={<UserProfile user={user} />} />
        </Route>
        <Route path="*" element={<NoPage />} />
        <Route path="admin/*" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}
