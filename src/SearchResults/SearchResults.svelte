<script>
    import './SearchResults.css';

    export let tracks;
</script>

<div class="SearchResults">
    {#each tracks as track}
        <div key={track.id}>
            <h3>{track.name}</h3> 
            <p>{track.artist}  ||  {track.album}</p>
        </div>
    {/each}
</div>