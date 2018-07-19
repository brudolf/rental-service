<template>
  <transition name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          {{ details.title }}
        </div>
        <div class="modal-body">
            <h5 class="title">Bérlés Adatai</h5>
            <table class="c">
              <tr>
                <td>Bérlő neve</td>
                <td>{{ details.title }}</td>
              </tr>
              <tr>
                <td>Bérlő telefonszáma</td>
                <td>{{ details.data.user_phone }}</td>
              </tr>
              <tr>
                <td>Bérlés kezdete</td>
                <td>{{ details.start }}</td>
              </tr>
              <tr>
                <td>Bérlés vége</td>
                <td>{{ details.end }}</td>
              </tr>
            </table>
            <h5 class="title">Bérlés tartalma</h5>
            <table class="c">
              <tr>
                <!--<td>id</td>-->
                <th>Név</th>
                <th>Ár</th>
                <th>Mennyiség</th>
                <th>tartalma</th>
              </tr>
              <tr v-for="i in details.data.items">
                <td v-if="i.bundle">{{ i.bundle.name }}</td>
                <td v-if="i.bundle">{{ i.bundle.price }}</td>
                <td v-if="i.bundle">{{ i.quantity }}</td>
                <td v-if="i.bundle">
                  <table class="list">
                    <tr v-for="r in i.bundle.items">
                      <td>{{ r.name }}</td>
                      <td>{{ r.quantity }}</td>
                    </tr>
                    <tr v-if="i.bundle.lightshaper1">
                      <td>{{ i.bundle.lightshaper1.name }}</td>
                      <td>{{ i.bundle.lightshaper1.quantity }}</td>
                    </tr>
                    <tr v-if="i.bundle.lightshaper2">
                      <td>{{ i.bundle.lightshaper2.name }}</td>
                      <td>{{ i.bundle.lightshaper2.quantity }}</td>
                    </tr>
                  </table>
                </td>
                <td v-if="i.product">{{ i.product.name }}</td>
                <td v-if="i.product">{{ i.product.price }}</td>
                <td v-if="i.product">{{ i.product.quantity }}</td>
              </tr>
            </table>
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
        // console.log(this.details)
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
    max-width: 800px;
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
    font-size: 23px;
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    /* margin: 10px 0; */
  }
  .list td,
  .list tr {
    border: none;
  }
  .modal-default-button {
    float: right;
    background: none;
    padding: 3px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  .modal-default-button:hover {
    background: #533557;
    color: #fff;
  }
  .modal-footer {
    margin: 10px;
    padding: 0 !important;
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

  .title {
    margin-top: 9px;
    margin-bottom: 9px;
  }

  table.c {
    /*border-collapse: collapse;*/
    table-layout: auto;
    width: 100%;
  }
  table tr,
  table td,
  table th {
    border: 1px solid rgba(0,0,0,.12);
    padding: 8px;
  }
  table tr {
    padding: 5px;
  }
  table th {
    text-align: center;
  }
  table tr:hover {
    background: #EEEEEE;
  }
  table td {
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
