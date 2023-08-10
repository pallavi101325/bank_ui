import React from "react";

CustomerDetails = () => {
    const [data, setData ] = useState([]);

    useEffect (() => {
      fetch_data();
    }, []);


    const fetch_data = async () => {
       const response = await fetch ("");
        setData(await response.json);

        
    }
    return (
        <div>
            
        </div>
    )
}
