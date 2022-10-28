<template>
    <div>
        <nav class="navbar navbar-expand-lg sticky-top bg-primary navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="manage-forms.html">Formify</a>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-if="token != null">
         <li class="nav-item">
           <a class="nav-link active" href="#">Administrator</a>
         </li> 
         <li class="nav-item">
            <button class="btn bg-white text-primary ms-4" @click="logout()">Logout</button>
         </li>
       </ul> 
      </div>
    </nav>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name: 'NavbarComponent',
        data() {
            return {
                token: localStorage.getItem('token')
            }
        },
        methods: {
            logout(){
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}` //include this in your created function
                axios.post(`http://127.0.0.1:8000/api/v1/auth/logout`, {

                }).then(
                    response => {
                        console.log(response)
                        localStorage.removeItem('token')
                        alert(response.data.message)
                        this.$router.push('/login')
                    }
                    ).catch(
                        error => {
                            console.log(error)
                        }
                    )
                }
        },
    
        
    }
</script>