const SPOT_API = "http://localhost:3000/api/v1/spots/"
const EVENT_API = "http://localhost:3000/api/v1/events/"
const USER_EVENTS_API = "http://localhost:3000/api/v1/user_events/"

//Spot fetching 
export function getSpots() {
  return fetch(SPOT_API).then(res => res.json())
};

//Spot posting
export function createSpot(spotInput) {
  return fetch(SPOT_API, {
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

//Event fetching
export function getEvents() {
    return fetch(EVENT_API).then(res => res.json())
  };
 
//Event Posting
export function createEvent(eventInput) {
    return fetch(EVENT_API, {
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