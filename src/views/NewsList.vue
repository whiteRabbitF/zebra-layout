<template>
  <Header />
  <Title />
  <main>
    <div class="news-grid">
      <div v-for="item in news" :key="item.code" class="news-row">
        <NewsItem :news="item" />
      </div>
    </div>
    <button v-if="canLoadMore" @click="loadMore">Загрузить еще</button>
    <div v-if="loading" class="loader"></div>
  </main>
  <Footer />
</template>


<script>
import { ref, onMounted } from 'vue';
import { useNewsStore } from '@/store/store.js';
import NewsItem from '@/components/NewsItem.vue';
import Header from "@/components/Header.vue";
import Title from "@/components/Title.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer,
    Title,
    Header,
    NewsItem,
  },
  setup() {
    const newsStore = useNewsStore();
    const canLoadMore = ref(false);
    const loading = ref(false);

    const loadMore = async () => {
      try {
        loading.value = true;
        await newsStore.fetchNews(newsStore.currentPage + 1);
        canLoadMore.value = newsStore.currentPage < newsStore.totalPages;
      } catch (error) {
        console.error("Failed to load more news:", error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(async () => {
      try {
        loading.value = true;
        await new Promise(resolve => setTimeout(resolve, 1000))
        await newsStore.fetchNews();
        canLoadMore.value = newsStore.currentPage < newsStore.totalPages;
      } catch (error) {
        console.error("Ошибка загрузки. Статус ошибки:", error);
      } finally {
        loading.value = false;
      }
    });

    return {
      news: newsStore.news,
      loadMore,
      canLoadMore,
      loading
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../variables/colors.scss';

button {
  margin: 20px 0;
  padding: 20px 30px;
  cursor: pointer;
  background: transparent;
  border: 1px solid $blue;
  font-weight: 500;
  font-size: 18px;
  border-radius: 15px;
  color: $blue;
  width: 200px;
  height: 56px;

  &:hover {
    background: $white-warm;
    border: none;
  }
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  width: 100%;
  max-width: 1710px;
  margin: 0 auto;
  gap: 25px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

.loader {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-top: 3px solid $light-blue;
  animation: spin 1s linear infinite;
  color: $black;
  font-size: 50px;
  margin: 200px auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>


