<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold  ">
            Contact Manger
            <router-link to="/add" class="btn btn-success btn-sm "> <i class="fa fa-plus"></i>New</router-link>
          </p>
          <p class="italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quis eius tempore incidunt eligendi, dolores ipsa sunt deleniti. Maiores, quibusdam temporibus nesciunt pariatur quasi repudiandae sunt nihil eos doloribus obcaecati.</p>
          <form>
            <div class="row">
              <div class="col">
                <input type="text" class="form-control" placeholder="Search for contact">
              </div>
              <div class="col">
                <input type="submit" class="btn btn-outline-dark">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <div class="card my-2 list-group-item-success">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <img src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png" alt="" class="contact-img">
                </div>
                <div class="col-sm-7">
                     <ul class="list-group">
                      <li class="list-group-item">Name : <span class="fw-bold">Name</span></li>
                       <li class="list-group-item">Email : <span class="fw-bold">Email</span></li>
                        <li class="list-group-item">Mobile : <span class="fw-bold">Mobile</span></li>
                     </ul>
                </div>
                 <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                  <router-link to="/view/:id" class="btn btn-warning my-1"><i class="fa fa-eye"></i></router-link>
                   <router-link to="/edit/:id" class="btn btn-primary my-1"><i class="fa fa-pen"></i></router-link>
                    <button class="btn btn-danger my-1"><i class="fa fa-trash "></i></button>
                 </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.contact-img{
width: 150px;
border-radius: 50%;
}
</style>