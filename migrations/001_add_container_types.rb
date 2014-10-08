
# http://www.loc.gov/standards/valuelist/rdacarrier.html
values = %w(video_cartridge videocassette videodisc videotape_reel other)


Sequel.migration do

  up do

    enum_id = self[:enumeration].filter(:name => 'container_type').select(:id)

    values.each do |value|
      id = self[:enumeration_value].insert(:enumeration_id => enum_id, :value => value, :readonly => 0)
    end
  end
end
    
