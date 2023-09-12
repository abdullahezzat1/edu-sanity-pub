import {useEffect, useState} from 'react'
import client from '../Client'
import {getImageUrlBuilder} from '../util/util'

async function getCategories() {
  const result = await client.fetch(`*[_type == "category"]`)

  return result
}

async function getProducts() {
  const result = await client.fetch(`*[ _type == "product" ]{
    _id,
    name,
    image,
    "imageMetadata": image.asset->metadata,
    "videoUrl": video.asset->url
  }`)

  return result
}

function renderCategory(category) {
  if (!category?.image) {
    return null
  }

  return (
    <tr key={category._id}>
      <td>{category.name}</td>
      <td>
        <img src={getImageUrlBuilder(category.image).width(600).url()} alt={category.name} />
      </td>
    </tr>
  )
}

function renderProductImage(imageSource) {
  if (!imageSource) {
    return null
  }

  return <img src={
    getImageUrlBuilder(imageSource)
      .width(300)
      // .flipVertical()
      // .blur(20)
      // .sharpen(100)
      // .rect(10, 10, 200, 100)
      .orientation(90)
      .pad(30)
      .saturation(-100)
      .quality(100)
      .url()
  }
    alt=""
  />
}

function renderProductVideo(videoUrl) {
  if (!videoUrl) {
    return null
  }

  return <video src={videoUrl} width="500" controls muted autoPlay></video>
}

function renderProduct(product) {
  return (
    <tr key={product._id}>
      <td>{product.name}</td>
      <td>{renderProductImage(product?.image)}</td>
      <td>{renderProductVideo(product?.videoUrl)}</td>
    </tr>
  )
}

export function Task4() {
  let [categories, setCategories] = useState(null)
  let [products, setProducts] = useState(null)

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data)
    })

    getProducts().then((data) => {
      console.log(data)
      setProducts(data)
    })
  }, [])

  return (
    <>
      <table>
        <th> Category </th>
        <th className="Table-head">Image</th>
        {categories && categories.map(renderCategory)}
      </table>
      <table>
        <tr>
          <th className="Table-head">Product</th>
          <th className="Table-head">Image</th>
          <th className="Table-head">Video</th>
        </tr>
        {products && products.map(renderProduct)}
      </table>
    </>
  )
}

export default Task4
