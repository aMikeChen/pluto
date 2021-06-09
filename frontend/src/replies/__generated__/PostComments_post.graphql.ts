/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostComments_post = {
    readonly comments: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"PostCommentContent_comment">;
    }>;
    readonly " $refType": "PostComments_post";
};
export type PostComments_post$data = PostComments_post;
export type PostComments_post$key = {
    readonly " $data"?: PostComments_post$data;
    readonly " $fragmentRefs": FragmentRefs<"PostComments_post">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostComments_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Post",
      "kind": "LinkedField",
      "name": "comments",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PostCommentContent_comment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};
(node as any).hash = 'aa1b11f3a3c2a1dbd1b0803046b421d9';
export default node;
