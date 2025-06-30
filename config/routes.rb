Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root  to: 'pages#home'
  get 'lesson', to: 'pages#lesson'
  get 'colors', to: 'pages#colors'
  get 'animals', to: 'pages#animals'
end
