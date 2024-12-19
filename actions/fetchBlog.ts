import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


export const fetchBlog = async () => {
    try {

        const blogs = await prisma.blog.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                createdAt:true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        return blogs;
    } catch (error) {
        console.log(error)
        return;
    }
}


export const fetchBlogById = async (id: number) => {
    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: id
            }
        })

        
        return blog
    } catch (error) {
        console.log(error)
    }
}