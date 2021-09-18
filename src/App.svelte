<script>
    import { onMount } from "svelte";
	import SearchBar from "./SearchBar/SearchBar.svelte";
    import SearchResults from "./SearchResults/SearchResults.svelte";
    import Spotify from "./utils/Spotify";

    function search(term) {
        Spotify.search(term).then(track => tracks = track);
    }

    onMount(async() => {
        Spotify.getAccessToken()
    })

    export let tracks;
</script>

<div class="App">
    <header class="App-header">
        <h1>Sveltify!</h1>
        <SearchBar onSearch={search}/>
        <SearchResults results={tracks}/>
    </header> 
</div>
