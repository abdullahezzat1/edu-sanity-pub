import client from "../Client";

let lastId = null;

export async function getFilteredProductsPage() {
  const result = await client.fetch(`
  *[
    _type == "product"
    && skuArray in [example-1, example-2, example-3]
    && price > 300
    && price <= 1000
    ${lastId === null ? '' : '&& _id > $lastId'}
  ] | order(_id desc) [0...100] {
    _id, title, description, imageUrl, category->
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
  const result = await client.fetch(`*[_type == "category"]`);

  return result;
}


