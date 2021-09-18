<script>
	import SearchBar from "./SearchBar/SearchBar.svelte";
    import SearchResults from "./SearchResults/SearchResults.svelte";

    export let tracks;
</script>

<div class="App">
    <header class="App-header">
        <h1>Sveltify!</h1>
        <SearchBar />
        <SearchResults tracks={tracks}/>
    </header> 
</div>
