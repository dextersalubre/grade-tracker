import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './components/Header.jsx'
import StudentRow from './components/StudentRow.jsx'
import './App.css'

function App() {
   return (
     <div className="min-h-screen bg-stone-100 text-stone-800">
       <main className="mx-auto max-w-xl px-6 py-10">
        <Header />
        <ul className="overflow-hidden rounded-xl bg-white shadow">
          <StudentRow />
          <StudentRow />
        </ul>
       </main>
     </div>
   )
 }
  
 export default App



