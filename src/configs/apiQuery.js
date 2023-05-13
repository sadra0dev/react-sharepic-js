export const categories = [
  {
    name: "cars",
    image: "/assets/cars.jpg",
  },
  {
    name: "fitness",
    image: "/assets/fitness.jpg",
  },
  {
    name: "wallpaper",
    image: "/assets/wallpaper.jpg",
  },
  {
    name: "websites",
    image: "/assets/websites.jpg",
  },
  {
    name: "photo",
    image: "/assets/photo.jpg",
  },
  {
    name: "food",
    image: "/assets/food.jpg",
  },
  {
    name: "nature",
    image: "/assets/nature.jpg",
  },
  {
    name: "art",
    image: "/assets/art.jpg",
  },
  {
    name: "travel",
    image: "/assets/travel.jpg",
  },
  {
    name: "quotes",
    image: "/assets/quotes.jpg",
  },
  {
    name: "cats",
    image: "/assets/cats.jpg",
  },
  {
    name: "dogs",
    image: "/assets/dogs.jpg",
  },
  {
    name: "others",
    image: "/assets/others.jpg",
  },
]

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  _id,"image":image.asset->url,destination,
  postedBy->{
    _id,
    userName,
    image
  },
  save[]{
    _key,
    postedBy->{
      _id,
      userName,
      image
    },
  },
}`

export const pinDetailQuery = (pinId) => `*[_type == "pin" && _id == '${pinId}']{
  image{
    asset->{
      url
    }
  },
  _id,
  title, 
  about,
  category,
  destination,
  postedBy->{
    _id,
    userName,
    image
  },
 save[]{
    postedBy->{
      _id,
      userName,
      image
    },
  },
  comments[]{
    comment,
    _key,
    postedBy->{
      _id,
      userName,
      image
    },
  }
}[0]`

export const pinDetailMorePinQuery = (
  pin
) => `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
  image{
    asset->{
      url
    }
  },
  _id,
  destination,
  postedBy->{
    _id,
    userName,
    image
  },
  save[]{
    _key,
    postedBy->{
      _id,
      userName,
      image
    },
  },
}[0]`

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            destination,
            postedBy->{
              _id,
              userName,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                image
              },
            },
          }`
  return query
}

export const userQuery = (userId) => `*[_type == "user" && _id == '${userId}']{
  _id,userName,image
}[0]`

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`
  return query
}

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`
  return query
}
