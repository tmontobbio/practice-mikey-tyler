Rails.application.routes.draw do
  get "/shifts", to: "application#index" #, only: [:index]
end
