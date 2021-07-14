
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
								<div class="form-group">
									<label for="" class="form-label">Email</label>
									<input type="text" class="form-control" placeholder="Example@mail.com" name="email">
									<!-- div v-if="submitted && $v.email.$error" class="invalid-feedback">
										<span v-if="!$v.email.required" class="error-label">Email is required</span>
										<span v-if="!$v.email.email" class="error-label">Email is invalid</span>
									</div -->
								</div>
								<div class="form-group">
									<label for="" class="form-label">Password</label>
									<div class="icon_wrap">
										<input type="password" class="form-control" placeholder="Enter Password" name="password">
										<i data-feather="eye"></i>
									</div>
									<!-- div v-if="submitted && $v.password.$error" class="invalid-feedback">
										<span v-if="!$v.password.required" class="error-label">password is required</span>
										<span v-if="!$v.password.minLength" class="error-label">password length should be equal or greater than 8</span>
									</div -->
								</div>
								<div class="form-forget">
									<a href="">Forget Password?</a>
								</div>
								<div class="form-action">
									<button class="btn btn-primary" type="submit">Login <img src="../assets/images/loader.gif" alt="popup_logo" class="sbmt_loader"></button>
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
// import { required,email, minLength } from 'vuelidate/lib/validators';
export default {
  	name: "Login",
  	// data(){
    //     return {
    //         loader: false,
    //         'email':null,
    //         'password':null,
    //         'submitted':false,
    //         response_errors: null,
    //     }
    // },
  	// validations: {
	// 	email: {
	// 		required,
	// 		email
	// 	},
	// 	password: {
	// 		required,
	// 		minLength: minLength(8)
	// 	}
    // },
    methods:{
		login() {
			// this.loader= true;
			// this.submitted = true;
		    // let currentObj = this;
			// this.$v.$touch();           
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