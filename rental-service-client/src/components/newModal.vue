<template>
  <div class="modall">
    <div class="close" @click="$parent.$emit('close')"></div>
    <h1>Bérlés felvétel</h1>
      <div class="form">
          <div>
            <input v-model.trim="form.name" v-bind:class="{ error: !($v.form.name.required&&$v.form.name.minLength) }" type="text" name="title" placeholder="Név">
          </div>
          <div>
            +<input v-model="form.phone" v-bind:class="{ error: !($v.form.phone.required&&$v.form.phone.minLength) }" type="text" name="title" placeholder="Telefonszám">
          </div>
          <div class="start">
            Bérlés kezdete:<br>
            <div>
              <date-picker class="startDate" v-bind:class="{ error: !($v.form.startDate.required&&$v.form.startDate.minValue) }" v-model="form.startDate" :config="configs.start" placeholder="Dátum" name="start_date" ref="startDate"></date-picker>
            </div>
            <div>
              <date-picker class="startTime" v-bind:class="{ error: !$v.form.startTime.required }" v-model="form.startTime" :config="configs.timePicker" :wrap="true" placeholder="Idő" name="start_time" ref="endDate"></date-picker>
            </div>
          </div>
          <div class="end">
            Bérlés Vége:<br>
            <div>
              <date-picker class="startDate" v-bind:class="{ error: !$v.form.endDate.required }" v-model="form.endDate" :config="configs.end" placeholder="Dátum" name="end_date" ref="endDate"></date-picker>
            </div>
            <div>
              <date-picker class="endTime" v-bind:class="{ error: !$v.form.endTime.required }" v-model="form.endTime" :config="configs.timePicker" :wrap="true" placeholder="Idő" name="end_time" ref="endDate"></date-picker>
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
                <multiselect v-show="item.type == 'Szett'" v-model="item.bundle" :options="bundles" :close-on-select="true" :clear-on-select="false" :hide-selected="true" :preserve-search="true" placeholder="Válassz Szettet" label="name" track-by="name" :preselect-first="false">
                  <template slot="tag" slot-scope="props"><span class="custom__tag"><span>{{ props.option.value }}</span><span class="custom__remove" @click="props.remove(props.option)">❌</span></span></template>
                </multiselect>
                <div v-if="item.bundle" v-show="item.type == 'Szett'" class="bundle_wrap">
                  <div style="display: flex;justify-content: center">
                  <table class="bundle_table">
                    <h6 class="bundle_title">Szett tartalma</h6>
                    <tr v-for="m in item.bundle.items" >
                      <td>{{ m.name }}</td>
                      <td>{{ m.quantity }} db</td>
                    </tr>
                  </table>
                  </div>
                  <div v-show="item.type == 'Szett'&&item.bundle.add_light">
                    <h6 class="bundle_title">+ fényformáló</h6>
                    <multiselect
                      v-model="item.bundle.lightshaper1"
                      :options="lightshapers"
                      :close-on-select="true"
                      :clear-on-select="false"
                      :hide-selected="true"
                      :preserve-search="true"
                      placeholder="Fényformáló 1"
                      label="name" track-by="name"
                      :preselect-first="false">
                      <template slot="tag" slot-scope="props"><span class="custom__tag"><span>{{ props.option.value }}</span><span class="custom__remove" @click="props.remove(props.option)">❌</span></span></template>
                    </multiselect>
                  </div>
                  <div v-show="item.type == 'Szett'&&item.bundle.add_light">
                    <h6 class="bundle_title">+ fényformáló</h6>
                    <multiselect
                      v-model="item.bundle.lightshaper2"
                      :options="lightshapers"
                      :close-on-select="true"
                      :clear-on-select="false"
                      :hide-selected="true"
                      :preserve-search="true"
                      placeholder="Fényformáló 2"
                      label="name" track-by="name"
                      :preselect-first="false">
                      <template slot="tag" slot-scope="props"><span class="custom__tag"><span>{{ props.option.value }}</span><span class="custom__remove" @click="props.remove(props.option)">❌</span></span></template>
                    </multiselect>
                  </div>
                </div>
                <div>
                  <input class="pieces" v-model="item.quantity" type="text" name="title" placeholder="Darab">
                </div>
              </div>
            </div>
          </div>
          <button class="add-row" @click="addItemsRow">+</button>
          <button class="submitButton" @click="submitForm()" :disabled="$v.form.$invalid" type="submit" name="button">Elküld</button>
      </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { store } from '../store/store'
import RentalService from '../services/RentalService'
// import { required, minLength, between } from 'vuelidate/lib/validators'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      form: {
        name: '',
        phone: '',
        startDate: null,
        endDate: null,
        startTime: null,
        endTime: null
      },
      items: [],
      lightshapers: [],
      products: [],
      bundles: [],
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
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4)
      },
      phone: {
        required,
        minLength: minLength(11)
      },
      startDate: {
        required,
        minValue: value => value >= new Date().toISOString()
      },
      startTime: {
        required
      },
      endDate: {
        required,
        minValue: value => value >= new Date().toISOString()
      },
      endTime: {
        required
      }
    }
  },
  computed: {
    lightShapersWatch () {
      return store.getters.getLightShapersList
    },
    productsWatch () {
      return store.getters.getProductList
    },
    bundlesWatch () {
      return store.getters.getBundles
    },
    itemsWatch () {
      return store.getters.getItems
    }
  },
  watch: {
    lightShapersWatch (newShapers, oldShapers) {
      this.lightshapers = store.getters.getLightShapersList
    },
    productsWatch (newP, oldP) {
      this.products = store.getters.getProductList
    },
    bundlesWatch (newB, oldB) {
      this.bundles = store.getters.getBundles
    },
    itemsWatch (n, b) {
      this.items = store.getters.getItems
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
      let arr = []
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].bundle) {
          arr.push({
            'bundle_id': this.items[i].bundle.id,
            'type': '3',
            'lightshaper1': { 'id': this.items[i].bundle.lightshaper1 ? this.items[i].bundle.lightshaper1.id : null },
            'lightshaper2': { 'id': this.items[i].bundle.lightshaper2 ? this.items[i].bundle.lightshaper2.id : null },
            'quantity': this.items[i].quantity
          })
        }
        if (this.items[i].product !== '') {
          arr.push({
            'product': { 'id': this.items[i].product.id, 'quantity': this.items[i].quantity }
          })
        }
      }
      // console.log(arr)
      let data = {
        'user_name': this.form.name,
        'rent_start': this.form.startDate,
        'rent_end': this.form.endDate,
        'rent_register': 'Kati',
        'user_phone': this.form.phone,
        'items': arr
      }
      RentalService.addRental(data).then(result => {
        if (result.status === 200) {
          this.form.name = ''
          this.form.phone = ''
          this.form.startDate = ''
          this.form.startTime = ''
          this.form.endDate = ''
          this.form.endTime = ''
          this.$parent.$emit('close')
          store.commit('setBackToDefault')
          store.commit('refresh')
        }
      })
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
  .closeButton {
    color: #FFF;
    float: right;
    cursor: pointer;
  }
  .close {
    position: absolute;
    right: 19px;
    top: 15px;
    width: 26px;
    height: 19px;
    opacity: 0.3;
  }
  .close:hover {
    opacity: 1;
  }
  .close:before, .close:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }
  .multiselect__tags {
    border: none !important;
    background: none;
  }
  .multiselect__single {
    background: none;
  }
  .bundle_wrap {
    /* display: flex;
    justify-content: center; */
    text-align: center;
  }
  .bundle_table {
    width: 80%;
    margin: 0 auto;
    margin: 5px;
  }
  .bundle_table td {
    text-align: left;
  }
  /* .bundle_table tr,
  .bundle_table td {
    border: none;
  } */
  .bundle_title {
    font-weight: bold;
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
    border-radius: 0.25rem;
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
  .error {
    border-color: rgb(234,25,32, 0.2) !important;
  }
</style>
