<template>
<div>
    <h1>Edit Silver</h1>
    <form v-on:submit.prevent = "editUser">
        <p>Source : <input type="text" v-model="user.source"></p>
        <p>Benefit : <input type="text" v-model="user.benefit"></p>
        <p>Reaction : <input type="text" v-model="user.reaction"></p>
        <p>type : <input type="text" v-model="user.type"></p>
        <p><button type="submit">edit Silver</button></p>
    </form>
    <hr>
    <div>
        <p>Source: {{user.Source}}</p>
        <p>Benefit: {{user.Benefit}}</p>
        <p>Reaction: {{user.Reaction}}</p>
        <p>type: {{user.type}}</p>
    </div>
</div>
</template>
<script>import UsersService from '@/services/UsersService'

export default {
    data(){
        return{
            user:{
                source: '',
                benefit: '',
                reaction: '',
                type: ''
            }
        }
    },
    methods:{
        async editUser(){
            try{
                await UsersService.put(this.user)
                this.$router.push({
                    name: 'users'
                })

            }catch(error){
                console.log(error)
            }
        }
    }, 
    async created(){
        try{
            let userId = this.$route.params.userId
            this.user = (await UsersService.show(userId)).data
        }catch(error){
            console.log(error)
        }
    }
}
</script>
<style scoped>


</style>