<template>
  <div>
    <div class="container mt-3">
   <div class="row">
    <div class="col">
      <p class="h3 text-sucess fw-bold">Add Contact</p>
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, delectus laborum, ipsa aliquid quisquam cumque inventore cupiditate maxime ratione vel sequi molestias amet, repellat dolor temporibus corporis voluptatem natus corrupti.</p>
    </div>
   </div>
   <div class="container mt-3">
    <div class="row">
       <div class="col-md-4">
         <form >
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Name">

          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Photo url">

          </div>
          <div class="mb-2">
            <input type="email" class="form-control" placeholder="Email">

          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Mobile">

          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Company">

          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Title">

          </div>
          <div class="mb-2">
              <select name="" id="" class="form-control">
                <option value="">Select group</option>
              </select>

          </div>
          <div class="mb-2">
            <input type="submit" class=" btn btn-success" value="Update">

          </div>
         </form>
       </div>

       <div class="col-md-4">
        <img src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png" alt="" class="contact-img">
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

<style >
.contact-img{
  width: 150px;
  border-radius: 50%;
}
</style>