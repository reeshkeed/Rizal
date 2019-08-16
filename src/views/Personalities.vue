<template>
  <div class="personalities">
    <div class="jumbotron v-centered slant-left bg-persona">
      <div class="jumbotron-overlay"></div>
      <div class="container">
        <h1 class="display-4 text-center">Personalities</h1>
      </div>
    </div>

    <div class="container">
      <div class="wrapper text-center">
        <h3>Different Characters of Rizal</h3>
      </div>

      <div class="wrapper">
        <p>
          Filipinos and foreigners alike have paid tribute to Jose Rizal claiming that his place of honor in history is secure.
          It was his Austrian bosom friend, Professor Ferdinand Blumentritt, rector of the Imperial Atheneum of Leitmeritz,
          who said "Rizal was the greatest product of the Philippines and his coming to the world was like the appearance of a rare comet,
          whose rare brilliance appears only every other century." Another German friend, Dr. Adolf B. Meyer, director of the Dresden
          Museum who admired his all around knowledge and ability, remarked "Rizal’s many-sidedness was stupendous." Our own Dr.
          Camilo Osias pointed to him as the "versatile genius."
        </p>
        <p>
          His precocity since early boyhood turned into versatility in later years. Being curious and inquisitive,
          he developed a rare facility of mastering varied subjects and occupations.
        </p>
      </div>

      <div class="wrapper" v-for="item in characters">
        <h6>{{ item.character }}</h6>
        <p>{{ item.description }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import characters from '../../static/json/personalities.json'

export default {
  data: () => ({
    characters
  })
}
</script>
