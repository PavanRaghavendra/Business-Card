
import { useState } from 'react'
import './App.css'
import { BusinessCard } from './components/BusinessCard'
function App() {
  const cardData = {
    name: "pavan",
    description: "This is pavan",
    interest: ["pavan", "raghava", "pavan"],
    linkedin: "LINKEDIN",
    twitter: "TWITTER",
};
  return (
    <div>
      <BusinessCard cardData={cardData}/>
    </div>
  )
  }

export default App
