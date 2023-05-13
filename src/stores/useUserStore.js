import {zustandCreate, zustandDevtools, zustandPersist} from "libs"

export const useUserStore = zustandCreate()(
  zustandDevtools(
    zustandPersist(
      (set, get) => ({
        user: null,
        setUser: (user) => {
          set((state) => ({...state, user}))
        },
      }),
      {
        name: "user-storage",
      }
    )
  )
)
