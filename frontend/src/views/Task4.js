import {useEffect, useState} from 'react'
import {getImageUrlBuilder} from '../util/util'
import {getCategories} from './Task3'

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

export function Task4() {
  let [categories, setCategories] = useState(null)

  useEffect(() => {
    getCategories().then((data) => {
      console.log(data)
      console.log()
      setCategories(data)
    })
  }, [])

  return (
    <>
      <table>
        <th>
          Category
        </th>
        <th className='Category-image-head'>Image</th>
        {categories && categories.map(renderCategory)}
      </table>
    </>
  )
}

export default Task4
