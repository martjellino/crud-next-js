"use client";

import { useRouter } from "next/navigation";
import { useState, SyntheticEvent } from "react";

export const UpdateBook = ({ id, name, price, author, year, genre, publisher }) => {
  const router = useRouter();
  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);
  const [newAuthor, setNewAuthor] = useState(author);
  const [newYear, setNewYear] = useState(year);
  const [newGenre, setNewGenre] = useState(genre);
  const [newPublisher, setNewPublisher] = useState(publisher);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch(`https://devscale-mockapi.fly.dev/api/collections/books/records/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        price: newPrice,
        author: newAuthor,
        year: newYear,
        genre: newGenre,
        publisher: newPublisher,
      }),
    });
    setIsLoading(false)
    router.refresh()
    setIsOpen(false)
  };

  const handleModalUpdate = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
        <button onClick={handleModalUpdate} className="btn btn-primary btn-sm">Edit</button>
        <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update {name}</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control w-full">
              <label className="label font-bold">Book Name</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="input input-bordered"
                placeholder="Book Name"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Book Price</label>
              <input
                type="number"
                min="0"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                className="input input-bordered"
                placeholder="Book Price"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Book Author</label>
              <input
                type="text"
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                className="input input-bordered"
                placeholder="Book Author"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Book Year</label>
              <input
                type="number"
                min="0"
                max="2023"
                value={newYear}
                onChange={(e) => setNewYear(e.target.value)}
                className="input input-bordered"
                placeholder="Book Year"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Book Genre</label>
              <input
                type="text"
                value={newGenre}
                onChange={(e) => setNewGenre(e.target.value)}
                className="input input-bordered"
                placeholder="Book Genre"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Book Publisher</label>
              <input
                type="text"
                value={newPublisher}
                onChange={(e) => setNewPublisher(e.target.value)}
                className="input input-bordered"
                placeholder="Book Publisher"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModalUpdate}>
                Close
              </button>
              {!isLoading ? (
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Updating...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};
