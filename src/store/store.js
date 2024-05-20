import { defineStore } from 'pinia';
import axios from 'axios';

const host = import.meta.env.VITE_API_HOST;

export const useNewsStore = defineStore('news', {
    state: () => ({
        news: [],
        currentPage: 1,
        totalPages: 1,
    }),
    actions: {
        async fetchNews(page = 1) {
            const url = `${host}/news/${page}/`;
            console.log(`Загрцжены новости с: ${url}`);
            try {
                const response = await axios.get(url);
                console.log('News data:', response.data);
                if (response.data.items && response.data.items.length > 0) {
                    this.news.push(...response.data.items);
                    this.currentPage = response.data.nav.current;
                    this.totalPages = response.data.nav.total;
                }
            } catch (error) {
                console.error('Ошибка при запросе:', error);
            }
        },
    },
});
