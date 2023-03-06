import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onChange} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = imageDetails
  let url = thumbnailUrl
  let text = thumbnailAltText
  const changeImage = () => {
    url = imageUrl
    text = imageAltText
    onChange(imageUrl, imageAltText)
  }

  return (
    <li className="item-container">
      <button onClick={changeImage} type="button" className="button">
        <img src={url} alt={text} className="image" onClick={changeImage} />
      </button>
    </li>
  )
}

export default ThumbnailItem
