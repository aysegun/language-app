Rails.application.routes.draw do
  get 'pages/home'
  get 'pages/lesson'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root  to: 'pages#react_home'
  get 'lesson', to: 'pages#react_lesson'
end
