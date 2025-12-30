import './App.css'
import Navbar from "./Component/Navbar-Component/Navbar.jsx"
import Heading from "./Component/Heading-Component/Heading.jsx"
import ProductCard from './Component/Products-Box/Product-Card.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Heading />
      <div className="PARENTOP">
        <ProductCard img="https://i.pinimg.com/originals/44/fa/a6/44faa65bc57e20d1c8e4abb3e72c0429.jpg"/>
        <ProductCard img="https://64.media.tumblr.com/fd3e1d35b81213f038c653d35d504689/6350ec158e715afb-6c/s640x960/f993888b1aa6955196993302482478a77a99af40.pnj"/>
        <ProductCard img="https://froheyo.com/cdn/shop/files/ANI05_L-DeathNote.jpg?v=1732360353"/>
        <ProductCard img="https://i.pinimg.com/originals/e5/b1/c7/e5b1c762f752a92c003ecd84b47628e4.jpg"/>
      </div>
    </>
  )
}

export default App
