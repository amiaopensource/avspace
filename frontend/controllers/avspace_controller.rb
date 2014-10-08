class AvspaceController < ApplicationController

  skip_before_filter :unauthorised_access

  def index

  end
end
