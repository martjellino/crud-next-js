"use client"

import { BookCard } from "./BookCard"
import { Input } from "./Input"

export const BookEditor = ({ bookData }) => {
  return (
    <div>
        <Input />
        <div>
            {bookData?.map(({ id, name, price, author, year, genre, publisher }) => {
                return (
                    <BookCard key={id} id={id} name={name} price={price} author={author} year={year} genre={genre} publisher={publisher} />
                )
            })}
        </div>
    </div>
  )
}
