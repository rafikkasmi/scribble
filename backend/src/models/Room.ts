import { Model, ObjectID, Unique } from "@tsed/mongoose";
import { Groups, Default, Required } from "@tsed/schema";

@Model()
export class Room {
  @Groups("!creation")
  @ObjectID("id")
  _id: string;

  @Unique()
  @Required()
  name: string;

  @Default(false)
  @Required()
  busy: boolean;


}
