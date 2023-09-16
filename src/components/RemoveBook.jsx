"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const RemoveBook = (book) => {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleDelete = async (bookID) => {
    setIsMutating(true);
    // setIsLoading(true);
    await fetch(`https://devscale-mockapi.fly.dev/api/collections/books/records/${bookID}`, {
      method: "DELETE",
    });
    setIsMutating(false);
    // setIsLoading(false);
    router.refresh();
    setModal(false);
    // setIsOpen(false);
  };

  const handleModalDelete = () => {
    // setIsOpen(!isOpen)
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={handleModalDelete} className="btn btn-secondary btn-sm">
        Remove
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleModalDelete}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete {book.name}?
          </h3>
          <div className="modal-action">
            <button type="button" className="btn" onClick={handleModalDelete}>
              Close
            </button>
            {!isMutating ? (
              <button
                type="button"
                onClick={() => handleDelete(book.id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            ) : (
              <button type="button" className="btn loading">
                Deleting...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
