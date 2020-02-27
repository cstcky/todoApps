<template>
  <div id='mainContainer'>
    <form @click.prevent>
      <input v-model='text' type='text'>
      <input v-on:click='add()' type='submit' value='Submit'>
    </form>
    <ul>
      <li v-for='(todo, index) in todos'>
        <input v-model='todo.completed' type='checkbox'>{{todo}}
      </li>
    </ul>
    <input v-on:click='removeCompleted()' type='button' value='Remove Completed'>
  </div>
</template>

<script>
export default {
  data (){
    return { 
      todos: [],
      text: '',
      completedTodos: []
    }
  },
  methods: {
    add() {
      let index = this.todos.length   
      this.todos.push({text: this.text, completed: false, id: index}) 
      this.text = ''
    },
    removeCompleted() {
      let i = this.todos.length
      while(i--){
        if(this.todos[i].completed === true){
          this.todos.splice(i, 1)	
	} 
      }
    }
  }
}

</script>

<style>
  div {
    text-align: center; 
    margin-top: 15%; 
  }
  ul {
    list-style: none;  
  }
</style>
