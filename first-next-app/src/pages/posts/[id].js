import Layout from '../../components/Layout'
import { getIds } from '../../../lib/posts'
import { getPostById } from '../../../lib/posts'

export const getStaticProps = async ({ params }) => {
    return {
        props: {
            post: getPostById(params.id)
        }
    }
}

export const getStaticPaths = async () => {

    const ids = getIds();
    const paths = ids.map(({ params }) => ({
        params: { id: params.id }
    }));

    return {
        paths: getIds(),
        fallback: false
    }
}

export default function post({ post }) {
    const formattedDate = new Date(post.date).toLocaleDateString('ja-JP')
    return (
        <Layout>
            <h2>{post.title}</h2>
            <p>{formattedDate}</p>
            <p>{post.content}</p>
        </Layout>
    )

}