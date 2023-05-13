import {sanity, feedQuery, searchQuery} from "configs"
import {Spinner, MasonryLayout} from "components"
import {useEffect, useState} from "libs"
import {userSearchStore} from "stores"

export const Search = () => {
  const {search} = userSearchStore((state) => ({
    search: state.search,
  }))
  const [pins, setPins] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (search !== "") {
      setLoading(true)
      const query = searchQuery(search?.toLowerCase())
      sanity.fetch(query).then((data) => {
        setPins(data)
        setLoading(false)
      })
    } else {
      sanity.fetch(feedQuery).then((data) => {
        setPins(data)
        setLoading(false)
      })
    }
  }, [search])

  return (
    <div>
      {loading && <Spinner message="Searching pins" />}
      {pins?.length !== 0 && <MasonryLayout pins={pins} />}
      {pins?.length === 0 && search !== "" && !loading && (
        <div className="mt-10 text-center text-xl ">No Pins Found!</div>
      )}
    </div>
  )
}
