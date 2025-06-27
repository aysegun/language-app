require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get pages_home_url
    assert_response :success
  end

  test "should get lesson" do
    get pages_lesson_url
    assert_response :success
  end
end
