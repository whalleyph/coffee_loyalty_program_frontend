import axios from "axios";
import React from "react";

function App() {
    const [movieData, setMovieData] = React.useState([]);
    React.useEffect(() => {
        axios.get("http://localhost:4000/api/coffeeData/").then(({ data }) => {
            setMovieData(data);
        });
    }, [movieData]);

    const memberList = movieData.map((memberObj) => {
        return (
            <div className="member" key={memberObj.id}>
                <p>
                    {memberObj.name} - {memberObj.stamps} stamp(s),{" "}
                    {memberObj.freeCoffees} free coffee(s) available
                </p>
                <button onClick={() => addStamp(memberObj.id)}>add stamp</button>
                <button onClick={() => redeemFreeCoffee(memberObj.id)}>redeem free coffee</button>
            </div>
        );
    });

    function addStamp(id) {
        axios.put(`http://localhost:4000/api/coffeeData/addStamp/${id}`)
    }

    function redeemFreeCoffee(id) {
        axios.put(`http://localhost:4000/api/coffeeData/redeemFreeCoffee/${id}`)
    }

    return (
        <div>
            <h1>Coffee Members</h1>
            {memberList}
        </div>
    );
}

export default App;
