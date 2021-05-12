defmodule PlutoWeb.SchemaTest do
  use PlutoWeb.ConnCase

  describe "listPosts query" do
    @query """
    {
      listPosts{
        content
        insertedAt
      }
    }
    """
    test "returns list of post", %{conn: conn} do
      conn =
        post(conn, "/api", %{
          "query" => @query
        })

      assert json_response(conn, 200) == %{
               "data" => %{"listPosts" => []}
             }
    end
  end
end
