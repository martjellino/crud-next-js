"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const BookCard = ({
  id,
  name,
  price,
  author,
  year,
  genre,
  publisher,
}) => {
  const router = useRouter();
  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);
  const [newAuthor, setNewAuthor] = useState(author);
  const [newYear, setNewYear] = useState(year);
  const [newGenre, setNewGenre] = useState(genre);
  const [newPublisher, setNewPublisher] = useState(publisher);
  const [editMode, setEditMode] = useState(false);

  async function handleUpdateBook() {
    const res = await fetch(`http://localhost:5000/books/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: newName,
            price: newPrice,
            author: newAuthor,
            year: newYear,
            genre: newGenre,
            publisher: newPublisher
        })
    })
    const data = await res.json()
    setEditMode(false)
    router.refresh()
  }

  async function handleRemoveBook() {
    await fetch(`http://localhost:5000/books/${id}`, {
        method: "DELETE",
    })
    router.refresh()
  }

  return (

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Author</th>
                <th>Year</th>
                <th>Genre</th>
                <th>Publisher</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>

    // <div>
    //     {editMode ? (
    //         <div>
    //             <input 
    //                 value={newName || name}
    //                 onChange={(e) => setNewName(e.target.value)}
    //             />
    //             <input 
    //                 value={newPrice || price}
    //                 onChange={(e) => setNewPrice(e.target.value)}
    //             />
    //             <input 
    //                 value={newAuthor || author}
    //                 onChange={(e) => setNewAuthor(e.target.value)}
    //             />
    //             <input 
    //                 value={newYear || year}
    //                 onChange={(e) => setNewYear(e.target.value)}
    //             />
    //             <input 
    //                 value={newGenre || genre}
    //                 onChange={(e) => setNewGenre(e.target.value)}
    //             />
    //             <input 
    //                 value={newPublisher || publisher}
    //                 onChange={(e) => setNewPublisher(e.target.value)}
    //             />
    //         </div>           
    //     ): (
    //         <div>
    //             <div>{name}</div>
    //             <div>{price}</div>
    //             <div>{author}</div>
    //             <div>{year}</div>
    //             <div>{genre}</div>
    //             <div>{publisher}</div>
    //         </div>
    //     )}
    //     <div>
    //         {editMode ? (
    //             <button onClick={handleUpdateBook}>Update</button>
    //         ) : (
    //             <button onClick={() => setEditMode(true)}>Edit</button>
    //         )}
    //         <button onClick={handleRemoveBook}>Delete</button>
    //     </div>
    // </div>
  );
};
