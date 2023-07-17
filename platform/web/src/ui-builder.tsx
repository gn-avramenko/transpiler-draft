import { SimpleFormBuilder } from './simple-form-builder';
import { WebEditor } from './base';

// eslint-disable-next-line import/prefer-default-export
export class UiBuilder {
  private editor: WebEditor<any>|null = null;

  // eslint-disable-next-line no-unused-vars
  simpleForm(configurator:(builder: SimpleFormBuilder) => void) {
    const b = new SimpleFormBuilder();
    configurator(b);
    this.editor = b.build();
  }

  build() {
    return this.editor!!;
  }
}
