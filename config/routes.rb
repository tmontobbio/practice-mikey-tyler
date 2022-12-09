Rails.application.routes.draw do
  resources :employees
  resources :shifts
  get "/shifts", to: "employee#index"
  get "/shifts/last", to: "employee#show"
end
