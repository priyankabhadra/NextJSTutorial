export default function News({articles}) {
    return(<><h1>List of News</h1>
    {articles.map(article => {
        return (<div key={article.id}>
            <h2>
                {article.id} {article.title} | {article.category}
            </h2>
        </div>)
    })}
    </>)
}

export async function getServerSideProps() {
    const response = await fetch("http://localhost:3001/news");
    const data = await response.json();

    return {
        props: {
            articles: data
        }
    }
}

