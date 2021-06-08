defmodule PlutoWeb.Schema.RepliesTest do
  use PlutoWeb.ConnCase

  import Pluto.Factory

  alias Absinthe.Relay.Node

  describe "listReplies query" do
    @query """
    query($id: ID!) {
      post(id: $id) {
        comments {
          id
        }
      }
    }
    """

    test "get all comments", %{conn: conn} do
      %{id: id} = insert(:post)
      node_id = Node.to_global_id("Post", id)

      conn =
        post(conn, "/api", %{
          "query" => @query,
          "variables" => %{id: node_id}
        })

      assert %{
               "data" => %{"post" => %{"comments" => []}}
             } = json_response(conn, 200)
    end
  end
end
