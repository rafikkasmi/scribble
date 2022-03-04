import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";
import { PathParams } from "@tsed/platform-params";
@Controller("/hello-world")
export class HelloWorldController {
  @Get("/:name")
  get(@PathParams("name") name: String) {
    return `hello ${name}`;
  }
}
