import CardMovie from "../components/CardMovie"

function HomePage() {
    return (
        <>
            <h1 className="text-primary">Movies</h1>
            <h2><i>The community of Movies</i></h2>

            <div>
                <div className="row row-cols-3 mt-4">
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />
                    <CardMovie />

                </div>
            </div>
        </>
    )
}

export default HomePage