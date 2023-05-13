import pin from "./pin"
import user from "./user"
import comment from "./comment"
import postedBy from "./postedBy"
import save from "./save"

const schema = {
  types: [pin, user, postedBy, comment, save],
}
export default schema
