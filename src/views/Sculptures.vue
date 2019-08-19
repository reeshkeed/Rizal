<template>
  <div class="sculptures">
    <div class="jumbotron v-centered slant-left bg-sculptures">
      <div class="jumbotron-overlay"></div>
      <div class="container">
        <h1 class="display-4 text-center">Sculptures</h1>
      </div>
    </div>

    <div class="container">
      <div class="wrapper text-center">
        <h3>Some of Rizal's Sculptures</h3>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6" v-for="sculpture in sculptures">
          <div class="card">
            <img v-bind:src="require(`../../static/img/sculptures/thumbnails/${sculpture.modalId}.png`)" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ sculpture.name }}</h5>
              <p>
                {{ sculpture.material }}<br>
                {{ sculpture.remarks }}
              </p>
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-outline-info btn-block mt-auto" data-toggle="modal" v-bind:data-target="sculpture.buttonId">
                View Image
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" v-for="sculpture in sculptures" v-bind:id="sculpture.modalId" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <img v-bind:src="require(`../../static/img/sculptures/${sculpture.modalId}.jpg`)" class="card-img-top" alt="...">
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
import sculptures from '../../static/json/sculptures.json'

export default {
  data: () => ({
    sculptures
  })
}
</script>
