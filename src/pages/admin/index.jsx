import {StudioLayout, StudioProvider, defineConfig} from "sanity"
import {deskTool} from "sanity/desk"
import {visionTool} from "@sanity/vision"
import schema from "./schema"

const config = defineConfig({
  name: "default",
  title: "Sharemedia",
  basePath: "/admin",

  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,

  plugins: [deskTool(), visionTool()],

  schema,
})

export function AdminPage() {
  return (
    <div style={{height: "100vh"}}>
      <StudioProvider config={config}>
        <StudioLayout />
      </StudioProvider>
    </div>
  )
}
