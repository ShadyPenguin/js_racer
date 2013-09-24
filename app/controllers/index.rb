############# GET #################

get '/' do
  erb :index
end

get '/game' do
  erb :game
end

get '/results' do 

end

get '/results/:id' do
  @game = Game.find_by_id(params[:id])
  erb :results
end

############# POST ################

post '/game' do
  if params[:player_1].downcase == params[:player_2].downcase
    @message = "You can't race against yourself!"
    erb :index
  else

    Player.create(name: params[:player_1])
    Player.create(name: params[:player_2])
    redirect to '/game'
  end
end

post '/results' do

end
