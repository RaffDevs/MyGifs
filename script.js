new Vue({
    el: '#app',
    data: {
        searchTerm: '',
        gifs: []
    },
    methods: {
        async searchGifs() {
            const apiKey = 'VstziXvOX2zgOu33Yvlhq5HJ6QoZ2tQs';
            const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${this.searchTerm}&limit=12`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data.meta.status === 200) {
                    this.gifs = data.data;
                } else {
                    console.error('Failed to fetch GIFs');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        },
        copyLink(url) {
            navigator.clipboard.writeText(url).then(() => {
                alert('GIF link copied to clipboard!');
            }, (err) => {
                console.error('Failed to copy: ', err);
            });
        }
    }
});
