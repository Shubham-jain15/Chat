<template>
    <div class="container">
        <div class="card login">
            <div class="card body">
                <h2 class="card-title text-center">Login</h2>
                <form @submit.prevent="login" class="text-center">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your name" name="name" v-model="name" >
                        <p v-if="errorText" class="text-danger">{{ errorText }}</p>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit chat</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Login',
    data(){
            return{
                name:"",
                errorText:null
            }
          },
    methods:{
      login(){
          if(this.name){
              this.$router.push({name:'Chat',params:{name:this.name}})
          }else{
              this.errorText="Please enter the name first"
          }
      }
    }
}
</script>

<style scoped>
.login
{
    max-width: 450px;
    margin-top: 50px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    
}

.body
{
   background-color:aquamarine;
}

</style>