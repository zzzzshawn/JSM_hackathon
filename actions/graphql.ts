export const graphQL = async ({query, variables}: {
    query: string;
    variables: Record<string, any>;
}) => {
    try {
        const response = await fetch('https://api.github.com/graphql', {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN!}`,
                Accept: 'application/vnd.github+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query, variables})
        });

        if(!response.ok){
            throw new Error(`req failed ${response.status}`)
        }

        const data = await response.json();
        console.log(data.data)
        return data.data;
    } catch (error) {
        console.log(error)
    }
}

