<template>
    <div>
        <NavbarComponent />
        <main>
        <section class="login">
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-lg-5 col-md-6">
                    <h1 class="text-center mb-4">Formify</h1>
                    <div class="card card-default">
                        <div class="card-body">
                            <h3 class="mb-3">Login</h3>
                            
                            <form @submit.prevent="login()" method="post"> 
                            <!-- s: input -->
                            <div class="form-group my-3">
                                <label for="email" class="mb-1 text-muted">Email Address</label>
                                <input type="email" id="email" name="email" v-model="email" class="form-control" autofocus />
                            </div> 

                            <!-- s: input -->
                            <div class="form-group my-3">
                                <label for="password" class="mb-1 text-muted">Password</label>
                                <input type="password" id="password" v-model="password" name="password"  class="form-control" />
                            </div>
                            
                            <div class="mt-4">
                                <button type="submit" class="btn btn-primary">Login</button>
                            </div>
                            </form>

                        </div>
                    </div> 
                </div>
                </div>
            </div>
        </section>
    </main>
    </div>
</template>

<script>
import axios from 'axios'
import NavbarComponent from '@/components/NavbarComponent.vue';

    export default {
    name: "LoginView",
    data(){
        return {
            email: null,
            password: null
        }
    },
    components: { NavbarComponent },
    methods: {
        login(){
            axios.post('http://127.0.0.1:8000/api/v1/auth/login', {
                email: this.email,
                password: this.password
            }).then(
                response => {
                    console.log(response)
                    localStorage.setItem('token', response.data.accessToken)
                    this.$router.push('/')
                }
            ).catch(
                error => {
                    console.log(error)
                    alert(error.response.data.message)
                }
            )
        }
    },
    mounted(){
        const token = localStorage.getItem('token')

        if (token != null) {
            this.$router.push('/')
        }
     }
}
</script>