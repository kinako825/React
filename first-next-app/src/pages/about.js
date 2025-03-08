import Link from "next/link";
import Layout from "../components/Layout";


export default function Home() {
    return (
        // <>
        //     <h1>About</h1>
        //     <Link href="./">
        //         Home
        //     </Link>
        // </>
        <Layout pageTitle="About">
            <Link href="./">
                Home
            </Link>
        </Layout>
    )
}

