require 'test_helper'

class UserControllerTest < ActionDispatch::IntegrationTest
  test "should get username:string" do
    get user_username:string_url
    assert_response :success
  end

  test "should get email:string" do
    get user_email:string_url
    assert_response :success
  end

  test "should get password_digest:integer" do
    get user_password_digest:integer_url
    assert_response :success
  end

  test "should get admin:boolean" do
    get user_admin:boolean_url
    assert_response :success
  end

end
