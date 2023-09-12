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

export async function getData() {
  const categoriesData = await getCategories();
  const productsData = await getFilteredProductsPage();

  return { categoriesData, productsData };
}



export function Task3() {
  let [categories, setCategories] = useState(null);
  let [products, setProducts] = useState(null);

  useEffect(() => {
    getData().then(({categoriesData, productsData}) => {
      setCategories(JSON.stringify(categoriesData, undefined, ' '));
      setProducts(JSON.stringify(productsData, undefined, ' '));
    })
  }, []);

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

        // products query

        const result = await client.fetch(\`
          *[
            _type == "product"
            && price > 300
            && price <= 1000
            \${lastId === null ? '' : '&& _id > $lastId'}
          ] | order(_id desc) [0...100] {
            _id, enabled, name, sku, imageUrl, color, slug, category->
          }
          \`, { lastId });

        // result

        ${products}
        `}
        </pre>
      </code>
    </>
  );
}

export default Task3;
