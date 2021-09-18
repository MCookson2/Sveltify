<script>
    import './SearchResults.css';

    export let results;
</script>

<div class="SearchResults">
    {#each results as track}
        <div class="tracks">
            <h3>{track.name}</h3> 
            <p>{track.artist}</p>
            <p>{track.album}</p>
        </div>
    {/each}
</div>