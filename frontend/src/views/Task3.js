import { useEffect, useState } from "react";
import client from "../Client";

let lastId = null;

export async function getFilteredProductsPage() {
  const result = await client.fetch(`
  *[
    _type == "product"
    && price > 300
    && price <= 1000
    ${lastId === null ? '' : '&& _id > $lastId'}
  ] | order(_id desc) [0...100] {
    _id, enabled, name, sku, imageUrl, color, slug, category->
  }
  `, { lastId });

  if (result.length) {
    lastId = result[result.length - 1]._id;
  } else {
    lastId = null;
  }

  return result;
}

export async function getCategories() {
  const result = await client.fetch(`*[_type == "category"]{
    ...,
    "products": *[ _type == "product" && _id in ^.products[]._ref ]
  }`);

  return result;
}



export function Task3() {
  let [categories, setCategories] = useState(null);

  useEffect(() => {
    getCategories().then(data => {
      setCategories(JSON.stringify(data, undefined, ' '));
    })
  });

  return (
    <>
      <code>
        <pre>
        {`
        // categories query

        *[_type == "category"]{
          ...,
          "products": *[ _type == "product" && _id in ^.products[]._ref ]
        }

        // result

        ${categories}
        `}
        </pre>
      </code>
    </>
  );
}

export default Task3;
