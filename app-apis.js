const YoutubeMusicAPI = require('youtube-music-api')
const yt_api = new YoutubeMusicAPI()


//mostly as an example; not useful to have all the components at once
//start and end are the indices of the results to return, search is the search text. Returns a Promise for the data.
function spotifySearch(search, start, end){
    return fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(search)}&type=album,track,artist`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: '',//todo add client secret get and use here
            //https://github.com/FormidableLabs/react-native-app-auth/blob/main/docs/config-examples/spotify.md
        },
        body: {

        },
    }).then(response => response.json());
}

function ytSearch(search){
    yt_api.initialize().then(
        info => yt_api.search(search)
    )
}

const firebaseVersion = 'v1'

/*returns a Promise for the database. Use its function then() to run things based on the result. 
fields is of the following format:
{
    fieldPaths:[
        path1
        path2
        path3
    ]
}

*/
function firebaseGet(projectId, databaseId, documentPath, fields){
    return fetch(`https://firestore.googleapis.com/${firebaseVersion}/projects/${projectId}/databases/${databaseId}/documents/${documentPath}?mask=${fields}`,
    {
        method: 'GET',
        headers: {
            Authorization: '', //TODO handle authorization
            'Content-Type': 'application/json',
        },
        body: {
            
        },
    }).then(response => response.json())
    .then(doc => doc.fields)
}
