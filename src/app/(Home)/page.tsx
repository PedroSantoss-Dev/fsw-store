import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div>
      <PromoBanner
        src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Até 55% de desconto esse mês!"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
      <p className="mb-3 pl-5 font-bold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        height={0}
        width={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Até 55% de desconto em mouses!"
      />
            <div className="mt-8">
        <p className="mb-3 pl-5 font-bold uppercase">Teclados</p>
        <ProductList products={keyboards} />
      </div>
    </div>
  );
}