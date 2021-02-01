class V1::TestController < ApplicationController
  def index
    render json: { :things =>[
      {
        :name => 'some-thing',
        :guid => '0415674d-a0e8-4748-af68-a5f53a05c453'
      },
      {
        :name => 'some-thing-else',
        :guid => '0415674d-a0e8-4748-af68-a5f53a05c4533'
      },
      {
        :name => 'some-thing-else',
        :guid => '0415674d-a0e8-4748-af68-a5f53a05c4533'
      }
    ]}.to_json
  end

  def new
    render json: { :things =>[
      {
        :name => User.first.name,
        :guid => User.first.email
      }

    ]}.to_json
    
  end
end
