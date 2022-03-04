import { Model, ObjectID, Unique } from "@tsed/mongoose";
import { Groups, Default, Required } from "@tsed/schema";

@Model()
export class User {
    @Groups("!creation")
    @ObjectID("id")
    _id: string;

    @Required()
    name: string;




}
