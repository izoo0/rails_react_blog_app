class RegistrationController < ApplicationController
     skip_before_action :authorized, only: [:create]
     # REGISTER
  def create
     @user = User.create(user_params)
     if @user.valid?
       token = encode_token({user_id: @user.id})
       render json: {user: @user, token: token}
     else
       render json: {error: "Invalid username or password"}
     end
   end

   private
 
   def user_params
     params.permit(:email, :password, :age)
   end
end
