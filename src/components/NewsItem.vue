<template>
  <div class="news-list">
    <div class="news-item">
      <img v-if="news.image" :src="news.image" alt="News Image">
      <p class="news-date">
        <span class="day">{{ formattedDay }}</span>
        <span class="month">{{ formattedMonth }}</span>
        <span class="year">{{ formattedYear }}</span>
      </p>
      <div class="news-container">
        <a :href="news.link">{{ news.name }}</a>
        <p>{{ news.previewText }}</p>
      </div>
      <span class="news-type">{{ news.type.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedDate() {
      const date = new Date(this.news.date * 1000);
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();

      return `${day} ${monthNames[monthIndex]} ${year}`;
    },
    formattedDay() {
      return this.formattedDate.split(' ')[0];
    },
    formattedMonth() {
      return this.formattedDate.split(' ')[1];
    },
    formattedYear() {
      return this.formattedDate.split(' ')[2];
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variables/colors.scss';

.news-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.news-item {
  margin-bottom: 20px;
  border: 1px solid $blue;
  border-radius: 10px;
  display: block;
  width: 550px;
  height: 570px;
  position: relative;

  & .news-type {
    position: absolute;
    top: 500px;
    left: 25px;
    display: inline-block;
    max-width: 105px;
    font-size: 14px;
    font-weight: 400;
    padding: 10px;
    border-radius: 25px;
    background-color: $white-warm;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 500px;

    & .news-type {
      top: auto;
      bottom: 15px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 500px;
    margin-bottom: 10px;

    & .news-type {
      top: auto;
      bottom: 10px;
    }
  }
}

.news-item img {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 1024px) {
    max-height: 300px;
  }

  @media (max-width: 768px) {
    max-height: 350px;
  }
}

.news-item a {
  color: $blue;
  font-weight: 400;
  font-size: 22px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
}

.news-item p {
  color: $dark-grey;
  text-decoration: none;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
}

.news-date {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 110px;
  max-height: 36px;
  color: #A1A7B5;
  font-weight: 400;
  text-align: left;
  margin-left: 20px;

  .day {
    font-size: 36px;
    color: $light-grey;
    position: absolute;
    left: -7px;

    @media (max-width: 1024px) {
      font-size: 30px;
    }

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  .month, .year {
    font-size: 15px;
    font-weight: 700;
    color: $light-grey;
    margin-left: 40px;

    @media (max-width: 1024px) {
      font-size: 13px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
}

.news-container {
  display: block;
  padding: 15px;
  text-align: left;
}
</style>


