const options = {
    headers: {
        'accept': 'application/json',
        'apikey': 'ftlmCHIrWRvayIj867aXpbi5q6D5q5hR',
        // 'Content-Encoding': 'gzip'
    },

}
const url = 'https://api.tequila.kiwi.com/v2/search?fly_from=FRA&fly_to=PRG&date_from=18%2F11%2F2022&date_to=25%2F11%2F2022&nights_in_dst_from=2&nights_in_dst_to=3&max_fly_duration=20&flight_type=round&one_for_city=0&one_per_date=0&adults=2&children=2&selected_cabins=C&mix_with_cabins=M&adult_hold_bag=1%2C0&adult_hand_bag=1%2C1&child_hold_bag=2%2C1&child_hand_bag=1%2C1&only_working_days=false&only_weekends=false&partner_market=us&max_stopovers=2&max_sector_stopovers=2&vehicle_type=aircraft&limit=500'
fetch(url, options)
    .then(response => response.json())
    .then(response => console.log('PPO', response))
    .catch(err => a = err)

const url1 = 'https://api.tequila.kiwi.com/locations/query?term=PRG&locale=en-US&location_types=airport&limit=10&active_only=true'
fetch(url1, options)
    .then(response => response.json())
    .then(response => console.log('API местоположений', response))
    .catch(err => a = err)

fetch("http://api.travelpayouts.com/v1/flight_search", {
    body: {
        "signature": "deb5b02159898a6ab6f120624fa2f72c",
        "marker": "376519",
        "host": "https://avia-c6aa9.web.app/",
        "user_ip": "168.0.54.12",
        "locale": "ru",
        "trip_class": "Y",
        "passengers": {
            "adults": 1,
            "children": 0,
            "infants": 0
        },
        "segments": [
            {
                "origin": "NYC",
                "destination": "LAX",
                "date": "2022-11-25"
            },
            {
                "origin": "LAX",
                "destination": "NYC",
                "date": "2022-12-18"
            }],

    },

    headers: {
        "Content-Type": "application/json"
    },
    method: "POST"
}).then(response => response.json())
    .then(response => console.log('qpqppqqppq', response))
    .catch(err => a = err)
