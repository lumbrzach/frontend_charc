const SPOTS_API = "https://charc-backend.herokuapp.com/api/v1/spots/"
const EVENTS_API = "https://charc-backend.herokuapp.com/api/v1/events/"
const USER_EVENTS_API = "https://charc-backend.herokuapp.com/api/v1/user_events/"
// const SPOT_DATA_API = `https://waterservices.usgs.gov/nwis/iv/?site=${spotGaugeNum}&parameterCd=00060,00065,00011`
const JOURNALS_API = "https://charc-backend.herokuapp.com/api/v1/journals/"
const PHOTOS_API = "https://charc-backend.herokuapp.com/api/v1/photos/"

//////////////////SPOTS/////////////////////////////////

//Spot fetching 
export function getSpots() {
  return fetch(SPOTS_API).then(res => res.json())
};

//Spot posting
export function createSpot(spotInput) {
  return fetch(SPOTS_API, {
    method: 'POST',
    headers: {
        "content-type": "application/json",
        accept: "application/json"
    },
    body: JSON.stringify({
        spot: spotInput
    })
  }).then(res => res.json())
};

//Spot instantaneous data fetching
// export function getSpotData() {
//   return fetch(SPOT_DATA_API).then(res => res.json())
// }

////////////////////EVENTS///////////////////////////////////////

//Event fetching
export function getEvents() {
    return fetch(EVENTS_API).then(res => res.json())
  };
 
//Event Posting
export function createEvent(eventInput) {
    return fetch(EVENTS_API, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            accept: "application/json"
        },
        body: JSON.stringify({
            event: eventInput
        })
    }).then(res => res.json())
};

//Event Joining
export function joinEvent(eventID) {
  return fetch(USER_EVENTS_API, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      authorization: `Bearer ${localStorage.jwt}`
    },
    body: JSON.stringify({
      user_event: {
        event_id: eventID
      }
    })
  }).then(res => res.json()).then(console.log)
}

////////////////////////////JOURNALS////////////////////////////////////

//Journal fetching 
export function getJournals() {
  return fetch(JOURNALS_API).then(res => res.json())
};



///////////////////////////PHOTOS/////////////////////////////////////////

//Photo fetching
export function getPhotos() {
  return fetch(PHOTOS_API).then(res => res.json())
}