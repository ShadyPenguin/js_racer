############# GET #################

get '/' do
  erb :index
end


get '/results/finished' do 
  @game = Game.last
  p @game
  erb :results
end

get '/game/again' do 
  @players = []
  @players << Game.last.players.first
  @players << Game.last.players.last
  erb :_game
end

############# POST ################

post '/game' do
  if request.xhr?
    @players = []
    @players << Player.find_or_create_by(name: params[:pup_1])
    @players << Player.find_or_create_by(name: params[:pup_2])
    erb :_game, layout: false
  else
    if params[:player_1].downcase == params[:player_2].downcase
      @message = "You can't race against yourself!"
      erb :index
    else
      @players = []
      @players << Player.find_or_create_by(name: params[:player_1])
      @players << Player.find_or_create_by(name: params[:player_2])
      erb :_game
    end
  end
end

post '/results' do
  game = Game.create(winner: params[:winner],
    loser: params[:loser])
  Player.find_by_name(params[:winner]).games << game
  Player.find_by_name(params[:loser]).games << game
  redirect to ('/results/finished')
end
