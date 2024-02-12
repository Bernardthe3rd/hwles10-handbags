import './App.css'
import Button from "./components/Button.jsx";

function App() {
   function logClickTextCollect() {
    console.log('to the collection')
   }
  function logClickTextBags() {
    console.log('shop all bags')
  }
  function logClickTextOrders() {
    console.log('pre-orders')
  }

  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button type={'button'} onClicked={()=>{logClickTextCollect()}} invisable={false}>to the collection</Button>
          <Button type={'button'} onClicked={()=>{logClickTextBags()}} invisable={false}>shop all bags</Button>
          <Button type={'button'} onClicked={()=>{logClickTextOrders()}} invisable={true}>pre-orders</Button>
        </nav>
      </>
  )
}

export default App
