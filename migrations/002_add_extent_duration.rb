Sequel.migration do


  up do

    enum_id = self[:enumeration].filter(:name => 'extent_extent_type').select(:id)
  
    id = self[:enumeration_value].insert(:enumeration_id => enum_id, :value => "duration", :readonly => 0)

    alter_table(:extent) do
      add_column(:hours, String, :null => true)
      add_column(:minutes, String, :null => true)
      add_column(:seconds, String, :null => true)

      set_column_allow_null :number
    end

  end
end

