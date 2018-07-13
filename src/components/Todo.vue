<template lang="html">
  <div class="to-do">
    <h2> To Do </h2>
    <b-container>
      <div class="add-todo">
          <b-form @submit="submit">
            <b-form-group
            label="Action" >
              <b-form-input
              v-model="form.action"
              placeholder="action"
              />
            </b-form-group>

            <b-form-group
            label="Description" >
              <b-form-input
              v-model="form.description"
              placeholder="description"
              />
            </b-form-group>

            <b-form-group
            label="Remarks" >
              <b-form-input
              v-model="form.remarks"
              placeholder="remarks"
              />
            </b-form-group>

            <b-button
            type="submit"
            variant="primary"
             >
              Submit
            </b-button>

          </b-form>
      </div>

      <b-table striped hover :items="todo"></b-table>
    </b-container>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapState, mapActions } from 'vuex'

export default {
  data(){
    return {
      form : { }
    }
  },

  computed : {
    ...mapState([
      'todo'
    ]),

  },

  methods : {
    ...mapActions([
      'getTodo'
    ])
    submit(evt){
      evt.preventDefault()
      console.log('submit', this.form )
    }

  },

  beforeMount() {
    //do something before mounting vue instance
    this.getTodo()
  }

}
</script>

<style lang="scss" scoped>
.to-do{
  h2 {
    text-align: center;
  }

}

</style>
