import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../Components/Header";
import ProductFeed from "../components/ProductFeed";
import { productState } from "../state/state";
import { useRecoilState } from "recoil";

export default function Home({ data }) {
  const [products, setProducts] = useRecoilState(productState);
  setProducts(data);
  console.log("products", products);
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="mx-auto max-w-screen-2xl">
        <Banner />
        <ProductFeed />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json());

  return {
    props: {
      data: products,
    },
  };
};
