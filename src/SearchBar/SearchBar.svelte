<script>
    import './SearchBar.css';

    $: searchString = '';
    export let onSearch;

    function handleSearch(event) {
        event.preventDefault();
        console.log(searchString);
        onSearch = searchString;
    }

    
</script>

<div class="SearchBar">
    <input bind:value={searchString} type="text" placeholder="Search..." name="search" >
    <button type="submit" on:click={handleSearch}><i class="fa fa-seach"></i></button>
</div>