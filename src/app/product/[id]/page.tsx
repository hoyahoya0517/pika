import ProductPage from "../_components/Product/Product";

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <ProductPage id={id} />
    </>
  );
}
