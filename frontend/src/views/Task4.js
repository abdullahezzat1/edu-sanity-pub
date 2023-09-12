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
    "videoUrl": video.asset->url
  }`);

  return result
}

function renderCategory(category) {
  return (
    <tr key={category._id}>
      <td>{category.name}</td>
      <td>
        <img src={getImageUrlBuilder(category.image).width(600).url()} alt={category.name} />
      </td>
    </tr>
  )
}

function renderVideo(product) {
  return (
    <tr key={product._id}>
      <td>{product.name}</td>
      <td>
        <video src={product.videoUrl} width="600" controls muted autoPlay></video>
      </td>
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
        <th className="Category-image-head">Image</th>
        {categories && categories.map(renderCategory)}
      </table>
      <table>
        <th> Product </th>
        <th className="Category-image-head">Video</th>
        {products && products.map(renderVideo)}
      </table>
    </>
  )
}

export default Task4
