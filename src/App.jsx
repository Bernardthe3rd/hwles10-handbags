import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";

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
          <header>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button type={'button'} onClicked={logClickTextCollect} invisable={false}>to the collection</Button>
                <Button type={'button'} onClicked={logClickTextBags} invisable={false}>shop all bags</Button>
                <Button type={'button'} onClicked={logClickTextOrders} invisable={true}>pre-orders</Button>
            </nav>
          </header>
          <main>
              <Product textLabel={'Best seller'} imageSrc={'src/assets/bag_1.png'} imageAlt={'pink bag'} nameBag={'The handy bag'} price={'€400,-'}/>
              <Product textLabel={'Best seller'} imageSrc={'src/assets/bag_2.png'} imageAlt={'brown bag'} nameBag={'The stylish bag'} price={'€250,-'}/>
              <Product textLabel={'New collection'} imageSrc={'src/assets/bag_3.png'} imageAlt={'green bag'} nameBag={'The simple bag'} price={'€300,-'}/>
              <Product textLabel={'New collection'} imageSrc={'src/assets/bag_4.png'} imageAlt={'yellow bag'} nameBag={'The trendy bag'} price={'€150,-'}/>
          </main>
          <footer>
              <Tile imageSrc={'#'} imagdeAlt={'#'}>
                  <h2>The Brand</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi, ea excepturi incidunt ipsum minima modi nulla officia quo saepe sed similique tempora tempore voluptatum.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolore fuga magni nemo odio quasi tempora temporibus. Aut corporis dolor in incidunt ipsum laborum totam!</p>
              </Tile>
              <Tile imageSrc={'src/assets/brand.png'} imageAlt={'logo'}/>
              <Tile imageSrc={'src/assets/our_story.png'} imageAlt={'story'}/>
              <Tile imageSrc={'#'} imagdeAlt={'#'}>
                  <h2>Our Story</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi, ea excepturi incidunt ipsum minima modi nulla officia quo saepe sed similique tempora tempore voluptatum.</p>
              </Tile>
          </footer>

      </>
  )
}

export default App
