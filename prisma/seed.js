import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const blogs = [
    {
      title: 'Mastering TypeScript for Scalable Applications',
      content: `
        TypeScript is a superset of JavaScript that brings static typing to the dynamic world of JavaScript. It allows developers to catch errors during development, making code more robust and scalable. One of the key features of TypeScript is its type inference, which can infer the type of a variable without explicitly defining it. TypeScript also supports interfaces and type aliases, allowing for better code organization and readability.
        
        Another significant benefit is its compatibility with existing JavaScript code. Developers can gradually adopt TypeScript in a project by renaming '.js' files to '.ts'. TypeScript also works seamlessly with modern frameworks like React, Angular, and Vue. This makes it an ideal choice for building scalable web applications.
        
        Moreover, TypeScript enhances developer productivity through improved autocompletion and documentation in IDEs like Visual Studio Code. With its ability to prevent runtime errors, TypeScript reduces debugging time and ensures a smoother development process. It is no surprise that TypeScript has become the go-to language for many enterprise-level applications.
      `,
      description: 'An in-depth look at using TypeScript to build scalable and error-free applications.',
      createdAt: new Date(),
    },
    {
      title: 'Building RESTful APIs with Node.js',
      content: `
        RESTful APIs have become the backbone of modern web development, providing a way to interact with data seamlessly across platforms. Node.js, with its non-blocking I/O and event-driven architecture, is an excellent choice for building APIs. Express.js, a lightweight framework for Node.js, makes it easy to define routes and handle HTTP requests.
        
        To get started, you first initialize a new Node.js project and install Express. You can then define endpoints for CRUD operations using HTTP methods such as GET, POST, PUT, and DELETE. Middleware functions in Express can be used to handle tasks like authentication, logging, and data validation. Additionally, tools like Postman make it easy to test your APIs during development.
        
        For data storage, you can connect your API to a database like MongoDB or PostgreSQL. By integrating an ORM like Prisma or Mongoose, you can simplify database interactions and focus on building business logic. Finally, deploying your API on cloud platforms like AWS or Vercel ensures it is scalable and available to users worldwide.
      `,
      description: 'A guide to creating efficient RESTful APIs using Node.js and Express.js.',
      createdAt: new Date(),
    },
    {
      title: 'Understanding CSS Grid and Flexbox for Modern Layouts',
      content: `
        CSS Grid and Flexbox are powerful layout systems that simplify the creation of responsive designs. CSS Grid is a two-dimensional layout system, making it ideal for complex designs involving rows and columns. You can define grid templates, set row and column gaps, and position elements precisely within the grid.
        
        Flexbox, on the other hand, is a one-dimensional layout system optimized for arranging items in a row or column. It excels in distributing space and aligning items flexibly. The 'justify-content' and 'align-items' properties are particularly useful for centering content or creating evenly spaced layouts.
        
        While both systems have their strengths, using them together can unlock new possibilities. For example, you might use Grid for the overall page structure and Flexbox for individual components like navigation bars or buttons. Understanding when to use Grid versus Flexbox is key to mastering modern CSS and creating intuitive user interfaces that adapt gracefully to different screen sizes.
      `,
      description: 'Explore CSS Grid and Flexbox for building modern, responsive web layouts.',
      createdAt: new Date(),
    },
    {
      title: 'Next.js: The Future of React Development',
      content: `
        Next.js has revolutionized React development by offering built-in features like server-side rendering (SSR) and static site generation (SSG). These capabilities improve performance and SEO by pre-rendering pages on the server. With Next.js, developers can also use API routes to create backend functionality within the same project.
        
        One standout feature of Next.js is its support for dynamic routing. You can define routes based on file names in the 'pages' directory, simplifying navigation within your app. Additionally, Next.js supports Incremental Static Regeneration (ISR), enabling you to update static content without rebuilding the entire site.
        
        Another advantage of Next.js is its seamless integration with CSS and JavaScript libraries. You can style your components using CSS Modules, Tailwind CSS, or styled-components. Next.js also supports image optimization out of the box, which reduces load times and improves user experience.
        
        Whether you're building a personal blog or a full-fledged e-commerce platform, Next.js provides the tools to deliver fast and modern web applications.
      `,
      description: 'An overview of Next.js features that make it a game-changer for React developers.',
      createdAt: new Date(),
    },
    {
      title: 'Database Optimization Techniques for Developers',
      content: `
        Databases are at the heart of most applications, and optimizing them is critical for performance. Indexing is one of the most effective ways to speed up database queries. By creating indexes on frequently queried columns, you can reduce the time it takes to retrieve data significantly.
        
        Another essential technique is denormalization, where redundant data is stored to avoid expensive joins. While normalization ensures data consistency, denormalization can improve read performance in specific scenarios. Caching is also vital for optimizing database interactions. Tools like Redis or Memcached can store frequently accessed data, reducing the load on the database.
        
        Additionally, you should monitor database performance using tools like pgAdmin for PostgreSQL or MongoDB Compass for MongoDB. These tools provide insights into query execution times and resource usage. Finally, consider scaling your database horizontally or vertically as your application grows.
      `,
      description: 'Learn how to optimize databases for faster query execution and better performance.',
      createdAt: new Date(),
    },
    // Add more blogs here if needed
  ];

  // Insert seed data into the database
  for (const blog of blogs) {
    await prisma.blog.create({
      data: blog,
    });
  }

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
