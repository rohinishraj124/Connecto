export default async function Page({ params }) {
    const slug = (await params).slug
    return (
        <div>
            <h1>Forum: {slug}</h1>
        </div>
    );
}   