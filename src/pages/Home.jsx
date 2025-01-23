import Pizza from './Pizza.jsx'
function Home() {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>
        Welcome to our Pizza Shop!
        </h2>
      {/* <List item={Fruits} category='Fruits' />
      <br />
      <List item={vegies} category='Vegies' /> */}

      <Pizza name="Pepperoni" description="A classic tomato and cheese pizza."  image={'/public/pizzas/pepperoni.webp'} />
      <Pizza name="Hawaiian" description="A classic Pepproni pizza." image={'public/pizzas/hawaiian.webp'} />
      <Pizza name="Americano" description="The ultimate godfather of all pizzas." image={'/public/pizzas/brie_carre.webp'} />
    </div>
  )
}

export default Home
