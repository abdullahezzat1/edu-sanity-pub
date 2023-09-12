import { useEffect, useState } from 'react'
import sanityClient from '../Client'

function renderPetListItem(pet) {
  const { name } = pet;
  return (
    <li>{name}</li>
  );
}

function Task1() {
  const [pets, setPets] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "pet"]{
            name,
            title,
            fields{
              name,
              type,
              title
            }
          }`,
      )
      .then((data) => setPets(data))
      .catch(console.error)
  }, []);

  return (
    <>
      <h1>Most common types of Pets</h1>
      <ul> {pets && pets.map(renderPetListItem)} </ul>
    </>
  )
}

export default Task1
