import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import PromoBanner from "./components/promo-banner";
import SectionTitle from "./components/section-title";

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
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <main className="flex flex-col gap-8 py-8">
      <PromoBanner
        src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full px-5 lg:hidden"
        sizes="100vw"
        alt="Até 55% de desconto esse mês!"
        priority={false}
      />
      <PromoBanner 
            src="/banner-home-desktop-01.png"
            height={0}
            width={0}
            className=" h-[31.25rem] w-full hidden  lg:flex"
            sizes="100vw"
            alt="Até 55% de desconto esse mês!"
          />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8 lg:p-10">
      <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        height={0}
        width={0}
        className="h-auto w-full px-5 lg:hidden"
        sizes="100vw"
        alt="Até 55% de desconto em mouses!"
      />
      <div className="hidden gap-9 justify-center  lg:flex p-10">
      <PromoBanner
        src="/banner-home-02.png"
        height={0}
        width={0}
        className=" w-6/12 h-60  md:p-4"
        sizes="100vw"
        alt="Até 55% de desconto em mouses!"
      />
      <PromoBanner
        src="/banner-home-03.png"
        height={0}
        width={0}
        className=" w-6/12 h-60  md:p-4"
        sizes="100vw"
        alt="Até 55% de desconto em mouses!"
      />
      </div>

      <div className=" mt-8 lg:p-10 ">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <div className=" flex justify-center p-10">
        <PromoBanner
          src="/banner-fretegrátis.png"
          alt="Frete grátis!"
          className=" w-full hidden lg:flex"
        />
      </div>
          
      <div>
      <PromoBanner
          src="/banner-home-03.png"
          height={0}
          width={0}
          className="h-auto w-full px-5 lg:hidden"
          sizes="100vw"
          alt="Até 55% de desconto em mouses!"
        />
      </div>
      

      <div className=" mt-8 p-10">
        <SectionTitle >Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </main>
  );
}