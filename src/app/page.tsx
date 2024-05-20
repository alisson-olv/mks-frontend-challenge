import getProducts from "@/actions/get-products";
import CardProduct from "@/components/CardProduct";

export default async function Home() {
  const result = await getProducts();

  // Check if result exists and has data
  if (!result || !result.data) {
    console.error("Failed to fetch products");
    return (
      <main style={{ backgroundColor: '#f9f9f9' }}>
        <p>Failed to load products.</p>
      </main>
    );
  }

  const { data } = result;

  return (
    <main className="home">
      {data?.products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </main>
  );
}
