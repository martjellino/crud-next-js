import { AddBook } from "@/components/AddBook";
import { RemoveBook } from "@/components/RemoveBook";
import { UpdateBook } from "@/components/UpdateBook";

async function getBooks() {
  const res = await fetch(
    `https://devscale-mockapi.fly.dev/api/collections/books/records`,
    {
      cache: "no-cache",
    }
  );
  const { items } = await res.json();
  return items;
}

export default async function Home() {
  const books = await getBooks();

  return (
    <div className="mb-2 text-center">
      <div className="mb-16">
        <h1 class="mb-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:text-5xl lg:text-6xl">
          Books
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {" "}
            Wishlist
          </span>{" "}
        </h1>
        <p class="text-2xl font-bold text-gray-700 lg:text-xl dark:text-gray-300">
          Write your favorite book and go hunting for it in the bookstore after payday!
        </p>
      </div>
      <div className="mb-10">
        <AddBook />
      </div>
      <table className="table table-pin-rows w-full">
        <thead className="text-base">
          <tr>
            <th>#</th>
            <th>Book Name</th>
            <th>Book Price</th>
            <th>Book Author</th>
            <th>Book Year</th>
            <th>Book Genre</th>
            <th>Book Publisher</th>
            <th>Edit Book</th>
            <th>Remove Book</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td>{book.name}</td>
              <td>{book.price}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>{book.genre}</td>
              <td>{book.publisher}</td>
              <td>
                <UpdateBook {...book} />
              </td>
              <td>
                <RemoveBook {...book} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
