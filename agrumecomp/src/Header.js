import React from 'react';
import { AiFillFrown } from "react-icons/ai";

export default function Header() {
  return (
    <>
    <header className="App-header">
        <h1 className='header_logo'>Hello World</h1>
        <div className='header_login'><AiFillFrown/></div>
    </header>
    <main>
    </main>
    </>
  )
}
