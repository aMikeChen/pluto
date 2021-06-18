defmodule PlutoWeb.Schema.RepliesTest do
  use PlutoWeb.SchemaCase

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
      comments = insert_list(3, :post)
      %{id: id} = insert(:post, comments: comments)
      node_id = Node.to_global_id("Post", id)

      expected_comments = Enum.map(comments, &%{"id" => Node.to_global_id("Post", &1.id)})

      conn =
        post(conn, "/api", %{
          "query" => @query,
          "variables" => %{id: node_id}
        })

      assert %{
               "data" => %{"post" => %{"comments" => ^expected_comments}}
             } = json_response(conn, 200)
    end
  end

  describe "createComment mutation" do
    @query """
    mutation($input: CreateCommentInput!) {
      createComment(input: $input){
        result {
          content
        }
      }
    }
    """

    test "create comment successfully", %{conn: conn} do
      %{id: id} = insert(:post)

      node_id = Node.to_global_id("Post", id)
      input = %{input: %{content: "write something", reply_id: node_id}}

      conn =
        post(conn, "/api", %{
          "query" => @query,
          "variables" => input
        })

      assert json_response(conn, 200) == %{
               "data" => %{"createComment" => %{"result" => %{"content" => "write something"}}}
             }
    end
  end

  describe "newComment subscription" do
    @query """
      subscription {
        newComment {
          content
          insertedAt
        }
      }
    """

    test "return :ok when subscribe successfully" do
      {:ok, socket} = Phoenix.ChannelTest.connect(PlutoWeb.UserSocket, %{})
      {:ok, socket} = Absinthe.Phoenix.SubscriptionTest.join_absinthe(socket)
      ref = Absinthe.Phoenix.SubscriptionTest.push_doc(socket, @query)
      assert_reply ref, :ok
    end
  end
end
