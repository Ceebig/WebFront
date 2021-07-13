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
				<div class="row justify-content-center w-100">
					<div class="col-xl-7 h-100">
						<div class="start-form d-flex flex-wrap align-items-center">
							<form action="" class="w-100">
								<div class="form-group">
									<label for="" class="form-label">Name</label>
									<input type="text" class="form-control" placeholder="Example@mail.com">
									<span class="error-label"></span>
								</div>
								<div class="form-group">
									<label for="" class="form-label">Email</label>
									<input type="text" class="form-control" placeholder="Example@mail.com">
									<span class="error-label"></span>
								</div>
								<div class="form-group">
									<label for="" class="form-label">Phone</label>
									<div class="input-group-prepend">
										<select name="" id="" class="form-control">
											<option value="">+91</option>
											<option value="">+63</option>
										</select>
										<input type="text" class="form-control" placeholder="Example@mail.com">
									</div>
									<span class="error-label"></span>
								</div>
								<div class="form-group">
									<label for="" class="form-label">Password</label>
									<div class="icon_wrap">
										<input type="text" class="form-control" placeholder="Enter Password">
										<i data-feather="eye"></i>
									</div>
									<span class="error-label"></span>
								</div>
								<div class="form-group">
									<label for="" class="form-label">Confirm Password</label>
									<div class="icon_wrap">
										<input type="text" class="form-control" placeholder="Enter Password">
										<i data-feather="eye"></i>
									</div>
									<span class="error-label"></span>
								</div>
								<div class="form-forget">
									<a href="">Forget Password?</a>
								</div>
								<div class="form-action">
									<button class="btn btn-primary">Login</button>
								</div>
								<div class="direction-link">
									<p>Already have an account? <a href="">Login</a></p>
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
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
	name: "Login",
   // components: {
   //   HelloWorld,
   // },
};
</script>
