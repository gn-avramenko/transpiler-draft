// eslint-disable-next-line no-use-before-define,no-unused-vars,max-classes-per-file
import { webFacade } from './src/web-facade';
import { MainFrame, MainFrameConfigurator } from './src/main-frame';
import { Router, RoutesBuilder } from './src/router';
import { Div } from './src/div';
import { EntityList, EntityListBuilder } from './src/entity-list';
import { UiBuilder } from './src/ui-builder';
import { BaseEntityEditor } from './src/base-entity-editor';
import { SimpleFormBuilder } from './src/simple-form-builder';
// import { BaseEntityEditor } from './src/base-entity-editor';
// import { UiBuilder } from './src/ui-builder';

(window as any).webFacade = webFacade;

(window as any).MainFrameConfigurator = MainFrameConfigurator;

(window as any).MainFrame = MainFrame;

(window as any).Router = Router;

(window as any).RoutesBuilder = RoutesBuilder;

(window as any).Div = Div;

(window as any).EntityListBuilder = EntityListBuilder;

(window as any).EntityList = EntityList;

(window as any).UiBuilder = UiBuilder;

(window as any).BaseEntityEditor = BaseEntityEditor;

(window as any).SimpleFormBuilder = SimpleFormBuilder;

// class Div3 extends Div {
//   getText(): string {
//     return 'hello 3';
//   }
// }
// class MyUserEditor extends BaseEntityEditor<any> {
//   constructor() {
//     super('/api/users/load');
//   }
//
//   configure(builder: UiBuilder) {
//     builder.simpleForm((fb) => {
//       fb.addTextField('login', 'Login');
//       fb.addTextField('name', 'Name');
//       fb.addTextField('email', 'Email');
//       fb.addTextField('phone', 'Phone');
//       fb.addTextField('workPlace', 'Work place');
//     });
//   }
// }
// class MyUserList extends EntityList {
//   configure(rb: EntityListBuilder) {
//     rb.setSearchMethodUrl('/api/users');
//     rb.setEntityId('user');
//     rb.column('login', 'Login', 'STRING', true);
//     rb.column('name', 'Name', 'STRING', true);
//     rb.column('email', 'Email', 'STRING', true);
//     rb.column('phone', 'Phone', 'STRING', true);
//     rb.column('workPlace', 'Work place', 'STRING', true);
//   }
// }
// class MyMainFrame extends MainFrame {
//   configure(configurator: MainFrameConfigurator) {
//     configurator.setTitle('MyDemo App');
//     configurator.addMapping('/item1', new MyUserList());
//     configurator.addMapping('/item2/item3', new Div3());
//     configurator.addEntityEditorMapping('user', new MyUserEditor());
//   }
// }
//
// const mainFrame = new MyMainFrame();
// class CustomRouter extends Router {
//   configure(rb: RoutesBuilder) {
//     rb.route('/', mainFrame);
//   }
// }
// const router = new CustomRouter();
// if (false) {
//   webFacade.renderWindow(router);
// }
// mainFrame.setLoading(true);
// setTimeout(() => {
//   mainFrame.setMenu([
//     {
//       title: 'Item 1',
//       id: 'item1',
//       icon: 'ChromeFilled',
//     },
//     {
//       title: 'Item 2',
//       id: 'item2',
//       icon: 'ChromeFilled',
//       children: [
//         {
//           title: 'Item 3',
//           id: 'item3',
//           icon: 'SmileFilled',
//         },
//       ],
//     },
//   ]);
//   mainFrame.setLoading(false);
// }, 1000);
