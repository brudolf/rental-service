<template>
  <div id="app">
    <new-modal class="modall" v-bind:class="{ active: isModalOpen }"></new-modal>
    <span @click="openAddForm()" class="addNew"><span>+</span></span>
    <full-calendar :firstDay="1" :events="fcEvents" locale="hu" @eventClick="eventClick"></full-calendar>
    <event-modal :details="eventDetails" v-show="showMore" @close="showMore = false"></event-modal>
  </div>
</template>

<script>
  import eventModal from './components/eventModal'
  import newModal from './components/newModal'
  // import RentalService from './services/RentalService'
  import { store } from './store/store'
  export default {
    name: 'app',
    data () {
      return {
        isModalOpen: false,
        rentals: [],
        fcEvents: [],
        showMore: false,
        eventDetails: []
      }
    },
    computed: {
      eventsWatch () {
        return store.getters.getEvents
      }
    },
    watch: {
      eventsWatch (newEvents, oldEvents) {
        this.fcEvents = store.getters.getEvents
      }
    },
    methods: {
      eventClick (event, jsEvent, pos) {
        this.showMore = true
        this.eventDetails = event
        console.log(this.eventDetails)
      },
      openAddForm () {
        this.isModalOpen = !this.isModalOpen
      }
    },
    components: {
      eventModal: eventModal,
      newModal: newModal
    }
  }
</script>

<style lang="scss">

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  height: 100%;
}

body {
  font-family: sans-serif;
  background-color: #533557;
}

a,
a:hover {
  text-decoration: none;
  color: #fff;
}

.addNew {
  position: absolute;
  left: 100px;
  cursor: pointer;
  display: block;
  width: 50px;
  height: 50px;
  padding: 30px;
  font-size: 30px;
  border-radius: 100px;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
}

.comp-full-calendar {
  margin-top: 50px;
  border-radius: 3px;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
}

.modall {
  transition-timing-function: ease-in;
  transition: 0.2s;
  transform: translateY(-300%);
}
.active {
  transition-timing-function: ease-out;
  transition: 0.25s;
  transform: translateY(0);
}

.article {
  border: 1px solid #333;
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  text-align: center;
}
.more-events {
  background: red;
  width: 40px;
  height: 40px;
}
</style>
