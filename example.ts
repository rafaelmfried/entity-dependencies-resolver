import { Column } from "./column";
import { Entity } from "./entity";

const six = new Entity(
  "6",
  "Reaction",
  "Reaction",
  "1.0",
  [
    new Column("1", "id", "string", false, [], true, true, false, "Reaction"),
    new Column(
      "2",
      "postId",
      "string",
      false,
      [],
      false,
      false,
      false,
      "Reaction"
    ),
    new Column(
      "3",
      "userId",
      "string",
      false,
      [],
      false,
      false,
      false,
      "Reaction"
    ),
  ],
  []
);

const seven = new Entity(
  "7",
  "Share",
  "Share",
  "1.0",
  [
    new Column("1", "id", "string", false, [], true, true, false, "Share"),
    new Column(
      "2",
      "postId",
      "string",
      false,
      [],
      false,
      false,
      false,
      "Share"
    ),
    new Column(
      "3",
      "userId",
      "string",
      false,
      [],
      false,
      false,
      false,
      "Share"
    ),
  ],
  []
);

const five = new Entity(
  "5",
  "Share",
  "Share",
  "1.0",
  [
    new Column("1", "id", "string", false, [], true, true, false, "Share"),
    new Column(
      "2",
      "postId",
      "string",
      false,
      [],
      false,
      false,
      false,
      "Share"
    ),
    new Column(
      "3",
      "userId",
      "string",
      false,
      [],
      false,
      false,
      false,
      "Share"
    ),
  ],
  [six, seven]
);

const one = new Entity(
  "1",
  "User",
  "User",
  "1.0",
  [
    new Column("1", "id", "string", false, [], true, true, false, "User"),
    new Column("2", "name", "string", false, [], false, false, false, "User"),
  ],
  [five]
);

const two = new Entity(
  "2",
  "Post",
  "Post",
  "1.0",
  [
    new Column("1", "id", "string", false, [], true, true, false, "Post"),
    new Column("2", "title", "string", false, [], false, false, false, "Post"),
    new Column("3", "content", "text", false, [], false, false, false, "Post"),
  ],
  []
);

const three = new Entity(
  "3",
  "Comment",
  "Comment",
  "1.0",
  [
    new Column("1", "id", "string", false, [], true, true, false, "Comment"),
    new Column(
      "2",
      "postId",
      "string",
      false,
      [],
      false,
      false,
      false,
      "Comment"
    ),
    new Column(
      "3",
      "content",
      "text",
      false,
      [],
      false,
      false,
      false,
      "Comment"
    ),
  ],
  [two]
);

const four = new Entity(
  "4",
  "Like",
  "Like",
  "1.0",
  [
    new Column("1", "id", "string", false, [], true, true, false, "Like"),
    new Column("2", "postId", "string", false, [], false, false, false, "Like"),
    new Column("3", "userId", "string", false, [], false, false, false, "Like"),
  ],
  [five]
);

export const entities: Entity[] = [one, two, three, four, five, six, seven];
