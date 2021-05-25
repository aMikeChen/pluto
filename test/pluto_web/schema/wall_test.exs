defmodule PlutoWeb.Schema.WallTest do
  use PlutoWeb.ConnCase

  import Pluto.Factory

  describe "listPosts query" do
    @query """
    {
      listPosts(first: 5) {
        edges {
          node {
            content
            insertedAt
          }
        }
      }
    }
    """

    test "returns list of post with pagination", %{conn: conn} do
      %{content: content, inserted_at: inserted_at} = insert(:post)

      conn =
        post(conn, "/api", %{
          "query" => @query
        })

      expected_posts = %{
        "edges" => [
          %{
            "node" => %{
              "content" => content,
              "insertedAt" => NaiveDateTime.to_iso8601(inserted_at)
            }
          }
        ]
      }

      assert json_response(conn, 200) == %{
               "data" => %{"listPosts" => expected_posts}
             }
    end
  end

  describe "create post mutation" do
    @query """
    mutation($input: CreatePostInput!) {
      createPost(input: $input){
        content
      }
    }
    """

    test "create post successfully", %{conn: conn} do
      input = %{input: %{content: "write something"}}

      conn =
        post(conn, "/api", %{
          "query" => @query,
          "variables" => input
        })

      assert json_response(conn, 200) == %{
               "data" => %{"createPost" => %{"content" => "write something"}}
             }
    end
  end
end
