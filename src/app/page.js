import { AddBook } from "@/components/AddBook";
// import { BookEditor } from "@/components/BookEditor";
import { RemoveBook } from "@/components/RemoveBook";
import { UpdateBook } from "@/components/UpdateBook";

async function getBooks() {
  const res = await fetch(`http://localhost:5000/books`, {
    cache: "no-cache",
  });
  const data = await res.json();
  // console.log(data)
  return data;
}

export default async function Home() {
  const books = await getBooks();
  // console.log(books)
  return (
    <div className="mb-2 text-center">
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
            <tr key={ book.id }>
              <td>{ index + 1 }</td>
              <td>{ book.name }</td>
              <td>{ book.price }</td>
              <td>{ book.author }</td>
              <td>{ book.year }</td>
              <td>{ book.genre }</td>
              <td>{ book.publisher }</td>
              <td><UpdateBook {...book}/></td>
              <td><RemoveBook {...book}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

{
  /* <BookEditor bookData={allData} /> */
}
