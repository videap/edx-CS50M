import axios from "axios";

export async function get_request(url, headers, params, onError) {
    const response = await axios.get(url, {headers: headers, params: params} )
    .then(function (response) {
        // console.log(response)

        let results = response.data.results

        results = results.filter(result => result.primaryImage != null && result.primaryImage.url != null)


        return results
    })
    .catch(function (error) {
        onError()
        console.error(error);
    })

    return response
}