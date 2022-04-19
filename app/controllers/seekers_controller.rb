class SeekersController < ApplicationController
    
    def create
        byebug
        seeker = Seeker.create!(params.permit(:name, :email, :frontier))
        session[:seeker_id] ||= seeker.id
        render json: seeker, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
    end

    def show
        seeker_id = session[:seeker_id]
        if seeker_id
            seeker = Seeker.find(seeker_id)
            render json: seeker, status: :created
        else
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end


end
