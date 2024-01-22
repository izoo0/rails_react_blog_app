class User < ApplicationRecord
     has_secure_password
     # validate_presence_of  :email
     # validate_uniqueness_of :email
end
