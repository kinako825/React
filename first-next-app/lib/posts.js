import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// process.cwd()でnode実行時のワーキングディレクトリのパスを取得、postsと結合している
const postsDirPath = path.join(process.cwd(), 'posts')


export function getPosts() {
    const postNames = fs.readdirSync(postsDirPath)

    return postNames.map(postName => {
        const postPath = path.join(postsDirPath, postName)
        const result = matter(fs.readFileSync(postPath, 'utf8'))

        const id = postName.replace(/\.md$/, '')

        return {
            id,
            ...result.data
        }
    })
}


export function getIds() {
    const postNames = fs.readdirSync(postsDirPath)

    return postNames.map(postName => {
        return {
            params: {
                id: postName.replace(/\.md$/, '')
            }
        }
    })
}


export function getPostById(id) {
    const postPath = path.join(postsDirPath, `${id}.md`)

    const result = matter(fs.readFileSync(postPath, 'utf8'))

    return {
        id,
        ...result.data,
        content: result.content
    }
}