<template>
  <div>
    <ul>
      <ListItem v-for="(movie, index) in marvelMovies" :key="index" :movie="movie" />
    </ul>
  </div>
</template>

<script>
  import ListItem from './ListItem';

  export default {
    components: {
      ListItem,
    },

    data() {
      return {
        marvelMovies: ['Iron Man', 'Avengers', 'Infitinity War'],
      };
    },
  };
</script>

<style scoped></style>
