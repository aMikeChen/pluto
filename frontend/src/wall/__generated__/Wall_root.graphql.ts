/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Wall_root = {
    readonly listPosts: ReadonlyArray<{
        readonly id: string;
        readonly content: string;
        readonly insertedAt: unknown | null;
    }>;
    readonly " $refType": "Wall_root";
};
export type Wall_root$data = Wall_root;
export type Wall_root$key = {
    readonly " $data"?: Wall_root$data;
    readonly " $fragmentRefs": FragmentRefs<"Wall_root">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Wall_root",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Post",
      "kind": "LinkedField",
      "name": "listPosts",
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "content",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "insertedAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RootQueryType",
  "abstractKey": null
};
(node as any).hash = '72897d4926967fc1ed08f7e64744d11c';
export default node;
