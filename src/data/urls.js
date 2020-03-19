export default function urls(data){
    let result = [
        {
            icon: "/assets/img/allmusic_icon.svg",
            url: data.urlAllmusic,
            name: "All music",
        },
        {
            icon: "/assets/img/musicbrainz_icon.svg",
            url: data.urlMusicBrainz,
            name: "Music Brainz",
        },
        {
            icon: "/assets/img/myspace_icon.svg",
            url: data.urlMySpace,
            name: "My Space",
        },
        {
            icon: "/assets/img/purevolume_icon.svg",
            url: data.urlPureVolume,
            name: "Pure Volume",
        },
        {
            icon: "/assets/img/rateyourmusic_icon.svg",
            url: data.urlRateYourMusic,
            name: "Rate Your Music",
        },
        {
            icon: "/assets/img/soundcloud_icon.svg",
            url: data.urlSoundCloud,
            name: "SoundCloud",
        },
        {
            icon: "/assets/img/amazon_icon.svg",
            url: data.urlAmazon,
            name: "Amazon",
        },
        {
            icon: "/assets/img/discogs_icon.svg",
            url: data.urlDiscogs,
            name: "Discogs",
        },
        {
            icon: "/assets/img/facebook_icon.svg",
            url: data.urlFacebook,
            name: "Facebook",
        },
        {
            icon: "/assets/img/itunes_icon.svg",
            url: data.urlITunes,
            name: "ITunes",
        },
        {
            icon: "/assets/img/lastfm_icon.svg",
            url: data.urlLastFm,
            name: "Last FM",
        },
        {
            icon: "/assets/img/lyricswikia_icon.svg",
            url: data.urlWikia,
            name: "Wikia",
        },
        {
            icon: "/assets/img/spotify_icon.svg",
            url: data.urlSpotify,
            name: "Spotify",
        },
        {
            icon: "/assets/img/website_icon.svg",
            url: data.urlOfficialWebsite,
            name: "Official Website",
        },
        {
            icon: "/assets/img/wikipedia_icon.svg",
            url: data.urlWikipedia,
            name: "Wikipedia",
        },
        {
            icon: "/assets/img/wikidatawiki.png",
            url: data.urlWikidata,
            name: "Wikidata",
        },
        {
            icon: "/assets/img/youtube_icon.svg",
            url: data.urlYouTube ? `https://www.youtube.com/watch?v=${data.urlYouTube}` : undefined,
            name: "YouTube",
        }
    ];

    return result.filter(res => res.icon && res.url);
}
