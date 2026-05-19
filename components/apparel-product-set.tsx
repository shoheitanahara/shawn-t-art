import Image from "next/image";

export type ApparelProduct = {
  id: string;
  title: string;
  subtitle?: string;
  teeSrc: string;
  teeWidth: number;
  teeHeight: number;
  designSrc: string;
  designWidth: number;
  designHeight: number;
  priceLabel?: string;
};

type ApparelProductSetProps = {
  product: ApparelProduct;
};

export function ApparelProductSet({ product }: ApparelProductSetProps) {
  const priceLabel = product.priceLabel ?? "NOT FOR SALE";

  return (
    <article className="w-full max-w-4xl">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        <div className="bg-white p-4 sm:p-6">
          <Image
            src={product.teeSrc}
            alt={`${product.title} — full view`}
            width={product.teeWidth}
            height={product.teeHeight}
            className="mx-auto h-auto w-full max-w-md object-contain"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="bg-black p-4 sm:p-6">
          <Image
            src={product.designSrc}
            alt={`${product.title} — print detail`}
            width={product.designWidth}
            height={product.designHeight}
            className="mx-auto h-auto w-full object-contain"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </div>
      <h3 className="mt-5 text-lg font-bold text-foreground">{product.title}</h3>
      {product.subtitle ? (
        <p className="mt-1 text-sm text-foreground/80">{product.subtitle}</p>
      ) : null}
      <p className="mt-2 text-sm text-foreground/70">price: {priceLabel}</p>
    </article>
  );
}
