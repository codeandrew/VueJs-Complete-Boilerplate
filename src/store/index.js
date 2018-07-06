import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);

let baseData = {
  dependencies : [
    'BootstrapVue',
    'VueRouter',
    'Vuex',
    'Sass/Scss',
    'Axios',
    'Firebase'
  ]
 }

export const store = new Vuex.Store({
    state : {
      dependencies : { ...baseData.dependencies } 
    },
    //This is where you define the data structure of your application.
    //You can also set default or initial state here.

    actions : {
        getCalculatedTotalCashout: ({ commit, state}, payload) => {
            console.log(payload);
            commit('setCalculatedTotalCashout', payload);
        },

        loadCarList: ( { commit } ) => {
            axios.get('api/data').then(response => {
                commit('setCarList', { list: response.data })
            });
        },

    },
    //Actions are where you define the calls that will commit
    //changes to your store. A common example of this would be a
    //call to an api to retrieve data, once it completes you call store.commit()
    //to invoke a mutation to actually update the data in the store.
    //Actions are called in your components via dispatch call.

    mutations : {
        setCalculatedTotalCashout: (state, list) => {
            console.log(list);
            state.summary.totalCashout = list;
        },
        setCarList : ( state, { list }) => {
            state.carList = list.filter((item) => {
                return item.brand !== '18' && item.brand !== '23' && item.brand !== '2018'
            });
            const brand = Object.keys( state.carList );
            state.brandList = Object.keys( groupBy(state.carList, 'brand' ) );
        }

    },
    //The mutations calls are the only place that the store can be updated.

    getters : {
    },
    //Getters are a way to grab computed data from the store. For example,
    // if you have a project list, one component might only want to show projects
    //that are completed:

    modules: {

    }

});