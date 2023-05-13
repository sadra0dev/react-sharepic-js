import {zustandCreate, zustandDevtools, zustandPersist} from "libs"

export const userSearchStore = zustandCreate()(
  zustandDevtools(
    zustandPersist(
      (set, get) => ({
        search: "",
        setSearch: (search) => {
          set((state) => ({search}))
        },
      }),
      {
        name: "search-storage",
      }
    )
  )
)
