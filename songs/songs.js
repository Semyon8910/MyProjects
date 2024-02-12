const lyricsUrl = "https://api.lyrics.ovh/v1/";
const artistUrl = "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg" ;

async function getData () {
    let niceLyrics = "";
    let artistsName = document.getElementById("artist").value;
    let songsName = document.getElementById("song").value;
    let getLyrics = new Promise((resolve, reject) => {
        try {
            let getLyricsData = fetch(lyricsUrl+artistsName+"/"+songsName);
            resolve(getLyricsData);
        } catch (error) {
            reject(error);
        }
    });
    // let getArtist = new Promise((resolve, reject) => {
    //     try {
    //         let getArtistData = fetch(artistUrl+artistsName);
    //         resolve(getArtistData);
    //     } catch (error) {
    //         reject(error);
    //     }
    // });

    let lyrics = await getLyrics;
    let songLyrics = await lyrics.json();
    let stringLyrics = JSON.stringify(songLyrics);
    let arrayLyrics = stringLyrics.split(`\\n`);
    console.log(arrayLyrics);
    for (let index=0; index < arrayLyrics.length; index++) {
        niceLyrics+= `${arrayLyrics[index]}<br/>`;
    }
    document.getElementById("lyrics").innerHTML = niceLyrics;
    // let artist = await getArtist;
    // console.log(await artist.json());
}

