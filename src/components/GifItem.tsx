import PropTypes from "prop-types";
import { Images } from "../interfaces/images";

export const GifItem = ({id, title, url}:Images) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="object-cover h-48 w-full" alt={title} src={url}></img>
        <p className="italic text-center font-semibold" key={id}>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
