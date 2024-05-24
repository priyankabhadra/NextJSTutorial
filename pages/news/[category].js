export default function ListByCategory({articles, category}) {
    return (<>
    <h1>Showing news for category <i>{category}</i></h1>
    {articles.map(article => {
        return (<div key={article.id}>
            <h2>
                {article.id} {article.title}
            </h2>
            <p>{article.description}</p>
            <hr />
        </div>)
    })}
    </>)
}

export async function getServerSideProps(context) {
    const { params} = context;
    const { category } = params;
    // console.log('query', query, req, res);
    // console.log(req.headers.cookie);
    // res.setHeader('Set-cookie', ['name=pb'])
    const response = await fetch(`http://localhost:3001/news?category=${category}`);
    console.log('response', response)
    const data = await response.json();


    return {
        props: {
            articles: data,
            category
        }
    }
}