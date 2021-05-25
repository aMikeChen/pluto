/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreatePostInput = {
    content: string;
};
export type CreatePostBoxMutationVariables = {
    input: CreatePostInput;
};
export type CreatePostBoxMutationResponse = {
    readonly createPost: {
        readonly result: {
            readonly content: string;
        } | null;
    };
};
export type CreatePostBoxMutation = {
    readonly response: CreatePostBoxMutationResponse;
    readonly variables: CreatePostBoxMutationVariables;
};



/*
mutation CreatePostBoxMutation(
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    result {
      content
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreatePostBoxMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PostPayload",
        "kind": "LinkedField",
        "name": "createPost",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "result",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootMutationType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreatePostBoxMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PostPayload",
        "kind": "LinkedField",
        "name": "createPost",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "result",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "70f9ce961d6260914a6d597aca48e23f",
    "id": null,
    "metadata": {},
    "name": "CreatePostBoxMutation",
    "operationKind": "mutation",
    "text": "mutation CreatePostBoxMutation(\n  $input: CreatePostInput!\n) {\n  createPost(input: $input) {\n    result {\n      content\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '68f05ea24d85900dbfcf3d3aaa526f64';
export default node;
