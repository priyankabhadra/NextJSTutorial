import { useRouter } from "next/router";

export default function ProductId() {
    const router = useRouter();
    const productId = router.query.productId; // Corrected to 'productId'
    console.log({productId});
    return (
     <>
     <p>Product Details {productId}</p>
     </>
    );
}
