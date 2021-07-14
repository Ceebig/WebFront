
<template>
	<div class="login">
		<div class="bg-blue screen-view d-flex flex-wrap space">
			<div class="heading w-100">
				<h1>Welcome to <span>Ceebig</span></h1>
				<h3>Please Login to your account and start shopping your favourite items on special discounts!</h3>
			</div>
			<div class="shopping-img d-flex align-items-end justify-content-center w-100">
				<img src="../assets/images/login-img.png" alt="">
			</div>
		</div>
		<div class="logo-header">
			<div class="logo-wrap">
				<a href="">
					<img src="../assets/images/logo/site-logo.png" alt="CeeBig Logo">
				</a>
			</div>
		</div>
		<div class="form-container">
			<div class="form-wrap space d-flex align-items-center justify-content-center">
				<div class="row justify-content-center w-100 h-100">
					<div class="col-xl-7 h-100">
						<div class="start-form d-flex flex-wrap align-items-center">
							<form autocomplete="off" method="POST" @submit.prevent="login" class="w-100">
								<div class="form-group" >
									<label for="" class="form-label">Email</label>
									<input type="text" class="form-control" placeholder="Example@mail.com" name="email" v-model="email">
								
								
								</div>
								<div class="form-group" >
									<label for="" class="form-label">Password</label>
									<div class="icon_wrap">
										<input type="password" class="form-control" placeholder="Enter Password" name="password" v-model="password">
										<i data-feather="eye"></i>
									</div>
								
								</div>
								<div class="form-forget">
									<a href="">Forget Password?</a>
								</div>
								<div class="form-action">
									<button class="btn btn-primary" type="submit">Login <img src="../assets/images/loader.gif" alt="popup_logo" class="sbmt_loader" v-if="loader"></button>
								</div>
								<div class="direction-link">
									<p>New to Ceebig? <a href="">Create an Account</a></p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default {
  	name: "Login",
  	data(){
        return {
            loader: false,
            email:'',
            password:'',
            submitted:'',
            response_errors: '',
        }
    },
  	// setup () {
	// 	return { v$: useVuelidate() }
	// },
	validations () {
		return {
				email: { required,email},
				password: { required}
		}
	},
    methods:{
		login() {
			this.loader= true;
			this.submitted = true;
			//let currentObj = this;
			
			console.log(this.$v);           
			// if (this.$v.$invalid) {
			//     this.loader= false;
			//     return;
			// }
			// else{
				// axios.post('/api/login', {
				// email: this.email,
				// 	password: this.password
				// })
				// .then(()=> {
				// 	currentObj.loader= false;
                // })
				// .catch(function () {
                //     currentObj.loader= false;
				// });
			// }
		},
	}
};
</script>