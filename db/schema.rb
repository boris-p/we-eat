# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_18_124802) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cuisines", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_cuisines_on_name"
  end

  create_table "cuisines_restaurants", id: false, force: :cascade do |t|
    t.integer "cuisine_id"
    t.integer "restaurant_id"
    t.index ["cuisine_id", "restaurant_id"], name: "index_cuisines_restaurants_on_cuisine_id_and_restaurant_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.integer "tenbis_id"
    t.string "name"
    t.string "url"
    t.float "rating"
    t.integer "num_of_reviews"
    t.string "address"
    t.float "latitude"
    t.float "longitude"
    t.integer "delivery_time"
    t.string "phone"
    t.string "logo_url"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string "reviewers_name"
    t.integer "rating", null: false
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "restaurant_id"
    t.index ["restaurant_id"], name: "index_reviews_on_restaurant_id"
  end

  add_foreign_key "reviews", "restaurants"
end
