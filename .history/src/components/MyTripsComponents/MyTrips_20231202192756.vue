<template>
  <div class="flex items-center w-86 m-auto justify-between h-[68px]">
    <the-logo></the-logo>
    <navbar-links></navbar-links>
    <navbar-user></navbar-user>
  </div>

  <section class="bg-[#F4F4F4]">
    <div class="w-86 m-auto">
      <h2 class="text-[32px] font-semibold">My trips</h2>
    </div>



    <li
            
            class="border rounded-[5px] mt-10 p-5"
          >
            <div class="flex items-center h-full">
              <figure class="mr-6">
                <img
                  src="data.property.photoUrls"
                  alt="hotel picture"
                  width="285"
                  height="200"
                  class="h-[200px]"
                />
              </figure>
              <div class="content flex flex-col h-[220px] justify-around">
      
                <div class="rating flex items-center">
                  <div class="flex">
 
                  </div>

             
                </div>
         

                <button
                  type="button"
                  class="text-white bg-[var(--mainBlue)] w-[150px] py-2.5 px-[18px] rounded-md"
           
                >
                  See Availability
                </button>
              </div>
              <div class="ms-auto text-end">


   

          </li>
  </section>

  <footer class="bg-[#f4f4f4]">
    <covid-warning class="mt-0"></covid-warning>
    <the-footer></the-footer>
  </footer>
</template>

<script setup>
import TheLogo from "../TheNavbar/TheLogo.vue";
import NavbarLinks from "../TheNavbar/NavbarLinks.vue";
import NavbarUser from "../TheNavbar/NavbarUser.vue";
import CovidWarning from "../HomeComponents/CovidWarning/CovidWarning";
import TheFooter from "../TheFooter/TheFooter.vue";
import FooterCopyright from "../TheFooter/footer-copyright";
</script>

<style scoped></style>
