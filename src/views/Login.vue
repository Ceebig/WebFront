<template>
	<div class="login">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-4 p-0">
					<div class="bg-blue screen-view d-flex flex-wrap space">
						<div class="heading w-100">
							<h1>Welcome to <span>Ceebig</span></h1>
							<h3>Please Login to your account and start shopping your favourite items on special discounts!</h3>
						</div>
						<div class="shopping-img d-flex align-items-end justify-content-center w-100">
							<img src="../assets/images/login-img.png" alt="">
						</div>
					</div>
				</div>
				<div class="col-xl-8 h-100">
					<div class="form-wrap screen-view space">
						<div class="logo-header">
							<a href="">
								<img src="../assets/images/logo/site-logo.png" alt="CeeBig Logo">
							</a>
						</div>
						<div class="row justify-content-center h-100">
							<div class="col-xl-7 h-100">
								<div class="start-form d-flex flex-wrap align-items-center">
									<form action="" class="w-100">
										<div class="form-group">
											<label for="" class="form-label">Email</label>
											<input type="text" class="form-control" placeholder="Example@mail.com">
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
										<div class="form-forget">
											<a href="">Forget Password?</a>
										</div>
										<div class="form-action">
											<button class="btn btn-primary">Login</button>
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
		</div>
	</div>
</template>
<script>
// @ is an alias to /src
//import GuestHeader from "@/components/GuestHeader.vue";

export default {
  name: "Login",
  // components: {
  //   GuestHeader,
  // },
};
</script>