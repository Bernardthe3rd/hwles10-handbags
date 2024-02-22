import './App.css'
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import story from './assets/our_story.png'

import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";

function App() {

  return (
      <>
          <header>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button type={'button'} text={'to the collection'} invisable={false}>to the collection</Button>
                <Button type={'button'} text={'shop all bags'} invisable={false}>shop all bags</Button>
                <Button type={'button'} text={'pre-orders'} invisable={true}>pre-orders</Button>
            </nav>
          </header>
          <main>
              <Product textLabel={'Best seller'} imageSrc={bag1} imageAlt={'pink bag'} nameBag={'The handy bag'} price={'€400,-'}/>
              <Product textLabel={'Best seller'} imageSrc={bag2} imageAlt={'brown bag'} nameBag={'The stylish bag'} price={'€250,-'}/>
              <Product textLabel={'New collection'} imageSrc={bag3} imageAlt={'green bag'} nameBag={'The simple bag'} price={'€300,-'}/>
              <Product textLabel={'New collection'} imageSrc={bag4} imageAlt={'yellow bag'} nameBag={'The trendy bag'} price={'€150,-'}/>
          </main>
          <footer>
              <Tile imageSrc={'#'} imagdeAlt={'#'}>
                  <h2>The Brand</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi, ea excepturi incidunt ipsum minima modi nulla officia quo saepe sed similique tempora tempore voluptatum.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolore fuga magni nemo odio quasi tempora temporibus. Aut corporis dolor in incidunt ipsum laborum totam!</p>
              </Tile>
              <Tile imageSrc={brand} imageAlt={'logo'}/>
              <Tile imageSrc={story} imageAlt={'story'}/>
              <Tile imageSrc={'#'} imagdeAlt={'#'}>
                  <h2>Our Story</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi, ea excepturi incidunt ipsum minima modi nulla officia quo saepe sed similique tempora tempore voluptatum.</p>
              </Tile>
          </footer>

      </>
  )
}

export default App
