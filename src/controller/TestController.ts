import { JsonController, Get } from 'routing-controllers';

@JsonController('/test')
export class TestController {
  @Get()
  test() {
    return 'Hello world';
  }
}
