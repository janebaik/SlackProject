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

ActiveRecord::Schema.define(version: 2021_03_15_210956) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channel_members", force: :cascade do |t|
    t.bigint "channel_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_channel_members_on_channel_id"
    t.index ["user_id"], name: "index_channel_members_on_user_id"
  end

  create_table "channels", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "status_public", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "topic"
    t.text "description"
    t.index ["author_id"], name: "index_channels_on_author_id"
    t.index ["name"], name: "index_channels_on_name", unique: true
  end

  create_table "direct_message_members", force: :cascade do |t|
    t.bigint "message_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["message_id"], name: "index_direct_message_members_on_message_id"
    t.index ["user_id"], name: "index_direct_message_members_on_user_id"
  end

  create_table "direct_messages", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username"
  end

  add_foreign_key "channel_members", "channels"
  add_foreign_key "channel_members", "users"
  add_foreign_key "direct_message_members", "direct_messages", column: "message_id"
  add_foreign_key "direct_message_members", "users"
end
