import Suggestion from './Suggestion.jsx';

function Home() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap"
            }}>
            <div style = {{
                display: "flex",
                alignItems: "left",
                marginRight: 50
            }}>
                <h1>hi</h1>
            </div>
            <div style = {{
                display: "flex",
                alignItems: "right",
                marginRight: 50
            }}>
                <h1>hello</h1>
            </div>
        </div>

    )
}

export default Home;