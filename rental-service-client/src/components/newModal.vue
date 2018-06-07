<template>
  <div class="modall">
    <h1>Bérlés felvétel</h1>
      <div class="form">
        <div>
          <input v-model="name" type="text" name="title" placeholder="Név">
        </div>
        <div>
          <input v-model="phone" type="text" name="title" placeholder="Telefonszám">
        </div>
        <div>
          <!--<textarea rows="15" cols="15" placeholder="DESCRIPTION"></textarea>-->
        </div>
        <div class="start">
          Bérlés kezdete:<br>
          <div>
            <date-picker class="startDate" v-model="startDate" :config="configs.start" placeholder="Dátum" name="start_date" ref="startDate"></date-picker>
          </div>
          <div>
            <date-picker class="startTime" v-model="startTime" :config="configs.timePicker" :wrap="true" placeholder="Idő" name="start_time" ref="endDate"></date-picker>
          </div>
        </div>
        <div class="end">
          Bérlés Vége:<br>
          <div>
            <date-picker class="startDate" v-model="endDate" :config="configs.end" placeholder="Dátum" name="end_date" ref="endDate"></date-picker>
          </div>
          <div>
            <date-picker class="endTime" v-model="endTime" :config="configs.timePicker" :wrap="true" placeholder="Idő" name="end_time" ref="endDate"></date-picker>
          </div>
        </div>

        <label>Tétel hozzáadás</label>
        <div class="row item" v-for="item in items">
          <div class="form-element">
            <div>
              <multiselect v-model="item.type" :options="productOptions" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Termék típus"></multiselect>
            </div>
            <div>
              <multiselect v-show="item.type == 'Fényformáló'" v-model="item.product" :options="lightshapers" :close-on-select="true" :clear-on-select="false" :hide-selected="true" :preserve-search="true" placeholder="Válassz fényformálót" label="name" track-by="name" :preselect-first="false">
                <template slot="tag" slot-scope="props"><span class="custom__tag"><span>{{ props.option.value }}</span><span class="custom__remove" @click="props.remove(props.option)">❌</span></span></template>
              </multiselect>
              <multiselect v-show="item.type == 'Termék'" v-model="item.product" :options="products" :close-on-select="true" :clear-on-select="false" :hide-selected="true" :preserve-search="true" placeholder="Válassz Terméket" label="name" track-by="name" :preselect-first="false">
                <template slot="tag" slot-scope="props"><span class="custom__tag"><span>{{ props.option.value }}</span><span class="custom__remove" @click="props.remove(props.option)">❌</span></span></template>
              </multiselect>
              <div>
                <input class="pieces" v-model="item.quantity" type="text" name="title" placeholder="Darab">
              </div>
            </div>
          </div>
        </div>
        <button class="add-row" @click="addItemsRow">+</button>
        <button class="submitButton" @click="submitForm()" type="submit" name="button">Elküld</button>
      </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { store } from '../store/store'

export default {
  data () {
    return {
      name: '',
      phone: '',
      startDate: null,
      endDate: null,
      startTime: null,
      endTime: null,
      items: [],
      lightshapers: [],
      products: [],
      productOptions: ['Termék', 'Szett', 'Fényformáló'],
      configs: {
        basic: {
          format: 'YYYY-MM-DD'
        },
        timePicker: {
          format: 'LT',
          useCurrent: false
        },
        start: {
          format: 'YYYY-MM-DD',
          useCurrent: false,
          showClear: true,
          showClose: true,
          maxDate: false
        },
        end: {
          format: 'YYYY-MM-DD',
          useCurrent: false,
          showClear: true,
          showClose: true
        }
      }
    }
  },
  computed: {
    lightShapersWatch () {
      return store.getters.getLightShapersList
    },
    productsWatch () {
      return store.getters.getProductList
    }
  },
  watch: {
    lightShapersWatch (newShapers, oldShapers) {
      this.lightshapers = store.getters.getLightShapersList
    },
    productsWatch (newP, oldP) {
      this.products = store.getters.getProductList
    }
  },
  mounted () {
    this.items = store.getters.getItems
  },
  methods: {
    addItemsRow () {
      store.commit('addItemsRow')
    },
    submitForm () {
      console.log(this.name)
      console.log(this.phone)
      console.log(this.startDate)
      console.log(this.endDate)
      console.log(this.items)
    }
  },
  components: {
    Multiselect
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style type="text/css">

.modall {
  border-radius: 3px;
  padding: 20px;
  position: absolute;
  z-index: 3000;
  background: #fff;
  margin-left: 20px;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
}

.row.item {
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: 5px;
  background: rgba(0,0,0,0.02);
  -webkit-box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.12);
  -moz-box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.12);
  box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.12);
}

.multiselect__tags {
  border: none !important;
  background: none;
}
.multiselect__single {
  background: none;
}
.pieces {
  background: none;
  border: none;
  border: none !important;
  font-size: 15px !important;
  padding-left: 14px !important;
}
.custom__tag {
  padding: 5px;
  background: rgba(0,0,0,0.12);
  border-radius: 5px;
  margin: 2px;
}
.custom__remove {
  cursor: pointer;
  font-size: 10px;
  padding-left: 4px;
}
.add-row {
  cursor: pointer;
  background: rgba(0,0,0,0.12);
  border-radius: 4px;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  font-size: 18px;
}
.add-row:hover {
  background: rgba(0,0,0,0.20);
}
.form input, .form textarea {
  width: 400px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 5px 0;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
.submitButton {
  cursor: pointer;
  color: #000;
  display: block;
  margin-top: 8px;
  padding: 4px 10px;
  background: rgba(0,0,0,0.12);
  border: none;
  border-radius: 4px;
}
.submitButton:hover {
  background: rgba(0,0,0,0.20)
}

</style>
