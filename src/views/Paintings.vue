<template>
  <div class="paintings">
    <div class="jumbotron v-centered slant-left bg-paintings">
      <div class="jumbotron-overlay"></div>
      <div class="container">
        <h1 class="display-4 text-center">Paintings</h1>
      </div>
    </div>

    <div class="container">
      <div class="wrapper text-center">
        <h3>Some of Rizal's Paintings</h3>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6" v-for="painting in paintings">
          <div class="card">
            <img v-bind:src="require(`../../static/img/paintings/thumbnails/${painting.id}.png`)" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ painting.name }}</h5>
              <p>
                {{ painting.material }}<br>
                {{ painting.remarks }}
              </p>
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-outline-info btn-block mt-auto" data-toggle="modal" v-bind:data-target="`#${painting.id}`">
                View Image
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" v-for="painting in paintings" v-bind:id="painting.id" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <img v-bind:src="require(`../../static/img/paintings/${painting.id}.jpg`)" class="card-img-top" alt="...">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="sass">
.card
  height: 95%
</style>

<script>
import paintings from '../../static/json/paintings.json'

export default {
  data: () => ({
    paintings
  })
}
</script>
