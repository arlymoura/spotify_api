class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :display_name
      t.string :spotify_id
      t.string :spotify_url
      t.string :genere
      t.integer :followers_count
      t.string :img_big_url
      t.string :img_mid_url
      t.string :img_small_url
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
