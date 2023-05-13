import {Circles} from "components"

export function Spinner({message}) {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Circles color="#00BFFF" height={50} width={200} className="m-5" />

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  )
}
