
//Fetch request for live values from USGS. Requires component to carry state for values as written

export function grabLiveValues() {
        let theSpot = this.selectedSpot()[0]
    
        if (theSpot === undefined) { return null}
        if (theSpot.gauge_url.includes("usgs"))

        fetch(`https://waterservices.usgs.gov/nwis/iv/?site=${theSpot.gauge_num}&parameterCd=00060,00065&format=json,1.1`, {
            method: "GET",
            headers: {
                accept: "application/json",
                "content-type": "application-json"
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                // spotTemp: data.value.timeSeries[0].values[0].value[0].value,
                spotCfs: data.value.timeSeries[0].values[0].value[0].value,
                spotHeight: data.value.timeSeries[1].values[0].value[0].value
            })
            console.log(data)
        })
    }