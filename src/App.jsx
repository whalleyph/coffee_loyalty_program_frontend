import axios from "axios";
import React from "react";

function App() {
    const [movieData, setMovieData] = React.useState([]);
    React.useEffect(() => {
        axios.get("http://localhost:4000/api/coffeeData/").then(({ data }) => {
            setMovieData(data);
        });
    }, []);

    const memberList = movieData.map((memberObj) => {
        return (
            <div className="member" key={memberObj.id}>
                <p>
                    {memberObj.name} - {memberObj.stamps} stamp(s),{" "}
                    {memberObj.freeCoffees} free coffee(s) available
                </p>
                <button>add stamp</button>
                <button>redeem free coffee</button>
            </div>
        );
    });

    return (
        <div>
            <h1>Coffee Members</h1>
            {memberList}
        </div>
    );
}

export default App;
