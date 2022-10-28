<template>
  <div>
    <NavbarComponent />
        <main>

    <div class="hero py-5 bg-light">
      <div class="container">
          <router-link to="/create-form" class="btn btn-primary">Create Form</router-link>
      </div>
    </div>

    <div class="list-form py-5">
      <div class="container">
          <h6 class="mb-3">List Form</h6>

          <a href="detail-form.html" class="card card-default mb-3">
            <div class="card-body">
                <h5 class="mb-1">Biodata - Web Tech Members</h5>
                <small class="text-muted">@biodata (limit for 1 response)</small>
            </div>
          </a>

          <a href="detail-form.html" class="card card-default my-3">
            <div class="card-body">
                <h5 class="mb-1">HTML Fundamental - Quiz</h5>
                <small class="text-muted">@html-fundamental-quiz</small>
            </div>
          </a>

      </div>
    </div>

    </main>

  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';


export default {
    name: "HomeView",
    components: { NavbarComponent },
    mounted(){
      const token = localStorage.getItem('token')

      if (token == null) {
          this.$router.push('/login')
      }
    }
}
</script>
