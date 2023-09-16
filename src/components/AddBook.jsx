"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const AddBook = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [publisher, setPublisher] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    setIsMutating(true)
    await fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: price,
        author: author,
        year: year,
        genre: genre,
        publisher: publisher,
      }),
    });
    // const data = await res.json();
    // console.log(data);
    // Number(price);
    // Number(year);
    // setIsLoading(false);
    setIsMutating(false)
    setName("");
    setPrice("");
    setAuthor("");
    setYear("");
    setGenre("");
    setPublisher("");
    router.refresh();
    setModal(false)
    // setIsOpen(false);
  };

  const handleModalAdd = () => {
    // setIsOpen(!isOpen);
    setModal(!modal)
  };

  const handleCheckboxChange = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={handleModalAdd} className="btn btn-accent">
        Add New Book
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleCheckboxChange}
        className="modal-toggle"
      />
      <div className={modal ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Book</h3>
          <form onSubmit={handleSubmit}>
          <div className="form-control w-full">
              <label className="label font-bold">Book Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered"
                placeholder="Book Name"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Book Price</label>
              <input
                type="number"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="input input-bordered"
                placeholder=" Book Price"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Book Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
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
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="input input-bordered"
                placeholder="Book Year"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Book Genre</label>
              <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="input input-bordered"
                placeholder=" Book Genre"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Book Publisher</label>
              <input
                type="text"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
                className="input input-bordered"
                placeholder="Book Publisher"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModalAdd}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Saving...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      {/* <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Book</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label font-bold">Book Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered"
                placeholder="Book Name"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Book Price</label>
              <input
                type="number"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="input input-bordered"
                placeholder=" Book Price"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Book Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
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
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="input input-bordered"
                placeholder="Book Year"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Book Genre</label>
              <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="input input-bordered"
                placeholder=" Book Genre"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Book Publisher</label>
              <input
                type="text"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
                className="input input-bordered"
                placeholder="Book Publisher"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModalAdd}>
                Close
              </button>
              {!isLoading ? (
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Saving...
                </button>
              )}
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
};
