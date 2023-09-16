"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const Input = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [publisher, setPublisher] = useState("");

  async function handleCreateBook() {
    const res = await fetch("http://localhost:5000/books", {
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
    const data = await res.json();
    Number(price)
    Number(year)
    setName("");
    setPrice("");
    setAuthor("");
    setYear("");
    setGenre("");
    setPublisher("");
    router.refresh();
  }

  return (
    <div class="px-5 py-5 relative">
        <form>
            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                    <label class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Name" required />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <label class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Price</label>
                    <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Price" required />
                </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                    <label class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Author</label>
                    <input value={author} onChange={(e) => setAuthor(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Author" required />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <label class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Year</label>
                    <input value={year} onChange={(e) => setYear(e.target.value)} type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Year" required />
                </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                    <label class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Genre</label>
                    <input value={genre} onChange={(e) => setGenre(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Genre" required />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <label class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Publisher</label>
                    <input value={publisher} onChange={(e) => setPublisher(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Publisher" required />
                </div>
            </div>
            <button type="button" onClick={handleCreateBook} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center cente dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create New Book</button>
        </form>
    </div>
  );
};
