import {sanity, feedQuery, searchQuery} from "configs"
import {useState, useEffect, useParams} from "libs"
import {Spinner, MasonryLayout} from "components"

export const Feed = () => {
  const [loading, setLoading] = useState(false)
  const [ideaName, setIdeaName] = useState()
  const [pins, setPins] = useState()
  const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true)
    const query = categoryId ? searchQuery(categoryId) : feedQuery
    sanity.fetch(query).then((data) => {
      setPins(data)
    })
    setIdeaName(() => categoryId || "new")
    setLoading(false)
  }, [categoryId])

  return (
    <>
      {loading ? (
        <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
      ) : (
        pins && <MasonryLayout pins={pins} />
      )}
    </>
  )
}
