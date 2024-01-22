class LoginController < ApplicationController
     before_action :authorized, only: [:auto_login]
   # LOGGING IN
  def create
     @user = User.find_by(email: params[:email])
 
     if @user && @user.authenticate(params[:password])
       token = encode_token({user_id: @user.id})
       render json: {user: @user, token: token}
     else
       render json: {error: "Invalid email or password"}
     end
   end
 
 
   def auto_login
     render json: @user
   end
 

   
end
