<template>
<div>
    <h1>Create Silver</h1>
    <form v-on:submit.prevent = "createUser">
        <p>Source : <input type="text" v-model="user.source "></p>
        <p>Benefit: <input type="text" v-model="user.benefit"></p>
        <p>Reaction: <input type="text" v-model="user.reaction"></p>
        <p>type: <input type="text" v-model="user.type"></p>
        <p><button type="submit">Create Silver</button></p>
    </form>
    <hr>
    <div>
        <p>Source: {{user.source}}</p>
        <p>Benefit: {{user.benefit}}</p>
        <p>Reaction: {{user.reaction}}</p>
        <p>type: {{user.type}}</p>
    </div>
</div>
</template>
<script>
import UsersService from '@/services/UsersService'

export default {
    data(){
        return{
            user:{
                source: '',
                benefit: '',
                email: '',
                reaction: '',
                type:''
            }
        }
    },
    methods:{
        async createUser(){
            try{
                await UsersService.post(this.user)
                this.$router.push({
                    name: 'users'
                })
            }catch(error){
                console.log(error)
            }
        }
    }    
}
</script>
<style scoped>


</style>