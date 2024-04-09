<template>
  <!-- <q-intersection
        once
        transition="scale"
        class="example-item"
      > -->
  <q-card class="row q-pa-lg text-center" flat>
      <q-card-section class="text-center">
        <div class="text-h6">Don gabriel</div>
        <div class="text-subtitle2">Don gabriel</div>
      </q-card-section>
      <q-card-section class="text-center">
        <div class="text-h6">Don gabriel</div>
        <div class="text-subtitle2">Don gabriel</div>
      </q-card-section>
      <q-card-section class="text-center">
        <div class="text-h6">Don gabriel</div>
        <div class="text-subtitle2">Don gabriel</div>
      </q-card-section>
      <q-card-section class="text-center">
        <div class="text-h6">Don gabriel</div>
        <div class="text-subtitle2">Don gabriel</div>
      </q-card-section>

  </q-card>
  <q-card class="my-card" flat >
      <q-card-section horizontal>
        <q-card-section>
          <q-item-section>
          <q-item-label class="text-h6 q-pa-md">Don gabriel</q-item-label>
          <q-item-label caption>Don gabriel</q-item-label>
        </q-item-section>
        <div class="row q-gutter-md text-center" style="max-width: 300px">
        <q-item class="text-center">
          <q-item-section>
            <q-item-label class="text-h6 q-pa-md">Don gabriel</q-item-label>
            <q-item-label caption>Don gabriel</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h6 q-pa-md">Don gabriel</q-item-label>
            <q-item-label caption>Don gabriel</q-item-label>
          </q-item-section>
        </q-item>
      </div>
        </q-card-section>

        <div>
      <div class="q-pa-md row items-end q-gutter-md">
        <q-card class="card" flat>
          <q-image class="row justify-center items-center ">
            <q-img src="/images/LOGO.png" width="4.5rem" />
          </q-image>
        </q-card>
        <q-card class="card" flat>
          <q-image class="row justify-center items-center ">
            <q-img src="/images/LOGO.png" width="4.5rem" />
          </q-image>
        </q-card>
      </div>
      <div class="q-pa-md row items-end q-gutter-md">
        <q-card class="card" flat>
          <q-image class="row justify-center items-center ">
            <q-img src="/images/LOGO.png" width="4.5rem" />
          </q-image>
        </q-card>
        <q-card class="card" flat>
          <q-image class="row justify-center items-center">
            <q-img src="/images/LOGO.png" width="4.5rem" />
          </q-image>
        </q-card>
      </div>
    </div>
      </q-card-section>
    </q-card>
    <q-card flat>
    <q-card-section class="text-center">
      <div class="text-h6">Don gabriel</div>
      <div class="text-subtitle2">Don gabriel</div>
    </q-card-section>
  </q-card>

  <div class="q-pa-md row items-end q-gutter-md">
  <q-card >
    <q-card-section class="text-center">
      <div class="text-h6">Don gabriel</div>
      <div class="text-subtitle2">Don gabriel</div>
    </q-card-section>
  </q-card>
  <q-card >
    <q-card-section class="text-center">
      <div class="text-h6">Don gabriel</div>
      <div class="text-subtitle2">Don gabriel</div>
    </q-card-section>
  </q-card>
  <q-card >
    <q-card-section class="text-center">
      <div class="text-h6">Don gabriel</div>
      <div class="text-subtitle2">Don gabriel</div>
    </q-card-section>
  </q-card>
    </div>
    <q-card flat>
    <q-card-section class="text-center">
      <div class="text-h6">Don gabriel</div>
      <div class="text-subtitle2">Don gabriel</div>
    </q-card-section>
  </q-card>
  <q-carrosel>
    <div class="carousel">
  <div class="slide">Slide 1</div>
  <div class="slide">Slide 2</div>
  <div class="slide">Slide 3</div>
</div>
  </q-carrosel>



<!-- </q-intersection> -->
</template>
<script>
</script>
<style lang="scss" scoped>
.example-item{
   height: 290px;
  width: 290px
}
.carousel {
  display: flex;
  overflow: hidden;
  width: 100%;
}

.slide {
  flex: 0 0 33.33%; /* Para tener 3 slides visibles */
  transition: transform 0.5s;
}

/* Estilos adicionales para los slides, como tamaño, color, etc. */
</style>
