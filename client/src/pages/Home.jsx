import Layout from '../Layouts/Layout'
import Products from '../components/Products'

export const Home = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold text-center py-6">Our Products</h1>
      <Products />
    </Layout>
  );
}

export default Home;