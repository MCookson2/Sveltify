<script>
    import './SearchBar.css';

    $: searchString = '';
    let searchTerm;
    export let onSearch;

    function handleSearch() {
        searchTerm = searchString;
        onSearch(searchTerm);
    }

    function handleKeydown(event) {
        let key = event.key;
        if (key !== 'Enter') return
        handleSearch();
    }
</script>

<div class="SearchBar">
    <input bind:value={searchString} type="text" placeholder="Search..." name="search" on:keydown={handleKeydown}>
    <button type="submit" on:click={handleSearch}><i class="fa fa-seach"></i></button>
</div>