import { useRouter } from "next/router"

export default function Review() {
    const router = useRouter();
    const { productId, reviewid } = router.query;
    console.log('router.query', router.query)
    return(<h1>
        Review {reviewid} for product {productId}
    </h1>)
}