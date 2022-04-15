class Seeker < ApplicationRecord
    has_many :applications
    has_many :favorites

    has_many :jobs, through: :applications
    has_many :jobs, through: :favorites
    
    has_many :companies, through: :jobs
end
