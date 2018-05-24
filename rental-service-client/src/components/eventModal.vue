<template>
  <transition name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          {{ details.title }}
        </div>
        <div class="modal-body">

          <!--
          <ul>
              <li>Bérlő neve: {{ details.title }}</li>
              <li>Bérlő telefonszáma: {{ details.data.user_phone }}</li>
              <li>Bérlés kezdete:  {{ details.start }}</li>
              <li>Bérlés vége:  {{ details.end }}</li>
              <li>Bérlés adatai:</li>
              <ul v-for="item in details.data.items">
                <li>{{ item.rentel_item_type }}</li>
                <ul class="dropdown" v-show="item.rental_item_lightshaper.length > 0" v-for="val in item.rental_item_lightshaper">
                  ksdjf
                  <span>{{ val }}</span>
                </ul>
                <ul class="dropdown" v-show="item.rental_item_product.length > 0" v-for="val in item.rental_item_product">
                  <li>Termék Adatok:</li>
                  <ul v-for="val in item.rental_item_product">
                    <li>{{ val.product_name }}</li>
                    <li>{{ val.product_type }}</li>
                    <li>{{ val.product_price }} Ft</li>
                    <li>{{ val.product_quantity }} db</li>
                  </ul>
                </ul>
                <ul class="dropdown" v-show="item.rental_item_bundle.length > 0" v-for="val in item.rental_item_bundle">
                  <li>Szett Adatok:</li>
                  <li>{{ val.bundle_title }}</li>
                  <li>{{ val.bundle_body }}</li>
                  <li>{{ val.bundle_price }} Ft</li>
                  <li>tartalma:</li>
                  <ul v-for="p in val.bundle_product">
                    <li>{{ p.product_name }}</li>
                    <li>{{ p.product_price }}</li>
                    <li>{{ p.product_quantity }} db</li>
                    <li>{{ p.product_type }}</li>
                  </ul>
                </ul>
              </ul>
            </ul>
            -->
            <table class="c">
              <tr>
                <td>Bérlő neve</td>
                <td>{{ details.title }}</td>
              </tr>
              <tr>
                <td>Bérlő telefonszáma</td>
                <!--<td>{{ details.data.user_phone }}</td>-->
              </tr>
              <tr>
                <td>Bérlés kezdete</td>
                <td>{{ details.start }}</td>
              </tr>
              <tr>
                <td>Bérlés vége</td>
                <td>{{ details.end }}</td>
              </tr>
              <tr>
                <td>Bérlés adatok</td>
                <td>{{ details.start }}</td>
              </tr>
            </table>
            <!--
            <ul v-for="item in details.data.items">
              <li>{{ item.rentel_item_type }}</li>
            </ul>
          -->


        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button class="modal-default-button" @click="$emit('close')">
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>
<script>
    export default {
      props: ['details'],
      data () {
        return {
          items: []
        }
      },
      mounted () {
      }
    }
</script>
<style media="screen">
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 500px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #EEEEEE; /*rgba(0,0,0,.12);/*#fff;*/
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    /*font-family: Helvetica, Arial, sans-serif;*/
    font-family: 'Roboto', sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }
  .modal-footer {
    margin: 10px;
  }
  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }


  table.c {
    /*border-collapse: collapse;*/
    table-layout: auto;
    width: 100%;
  }
  table tr {
    background: #fff;
    padding: 4px;
  }
  table tr:hover {
    background: #EEEEEE;
  }
  table td {
    padding: 4px;
    //border: 1px solid rgba(0,0,0,.12);
  }


  ul {
    display: block;
    margin: 0;
  }
  ul li {
    list-style-type: none;
    padding: 3px;
    background: rgba(0,0,0,0.3);
    display: block;
  }
  ul.dropdown li {
    display: none;
  }
</style>
