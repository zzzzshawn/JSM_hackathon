import { PrismaClient } from "@prisma/client"



export const fetchBlog = async () => {
    try {
        const prisma = new PrismaClient();

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