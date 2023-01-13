import Router from "vue-router";
import ContactManager from "../components/ContactManager";
import AddContact from "../components/AddContact";
import EditContact from "../components/EditContact";
import ViewContact from "../components/ViewContact"

 
const router = new Router({

routes :[

{
    path:'',
    name:'contacts',
    component:ContactManager
},
{
    path:'/add',
    name:'add-contact',
    component:AddContact
},
{
    path:'/edit/:id',
    name:'edit-contact',
    component:EditContact
},
{
    path:'/view/:id',
    name:'view-contact',
    component:ViewContact
}






]


})


export default router ;