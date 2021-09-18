import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
        tracks: [{
            name: 'Savior',
            artist: 'Rise Against',
            album: 'album3'
        },  {
            name: 'song 2',
            artist: 'artist 2',
            album: 'album 6'
        }, {
            name: 'song 2',
            artist: 'artist 2',
            album: 'album 6'
        }]
	}
});

export default app;