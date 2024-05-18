import { defineStore } from 'pinia';
import axios from 'axios';

export const useNewsStore = defineStore('news', {
    state: () => ({
        news: [],
        currentPage: 1,
        totalPages: 1,
    }),
    actions: {
        async fetchNews(page = 1) {
            const url = `https://flems.github.io/test/api/news/${page}/`;
            console.log(`Fetching news from: ${url}`);
            try {
                const response = await axios.get(url);
                console.log('News data:', response.data);
                if (response.data.items && response.data.items.length > 0) {
                    this.news.push(...response.data.items);
                    this.currentPage = response.data.nav.current;
                    this.totalPages = response.data.nav.total;
                }
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        },
    },
});




