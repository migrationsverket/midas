import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{T as b,a as x,C as h,$ as T,R as C,b as R,s as v}from"./Table-Bbb2oYD7.js";import{e as m,u as H}from"./index-Bn1z2x26.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DlxIrWB_.js";import"./useFocusable-DTLHoeQe.js";import"./clsx-B-dksMZM.js";import"./Hidden-D9yAbrAR.js";import"./index-cpIEhwLo.js";import"./RSPContexts-CeCCo7XS.js";import"./Collection-B65vjQb4.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./SelectionManager-Z9gqeiha.js";import"./useEvent-B_cSPOEW.js";import"./FocusScope-DWsZ07QH.js";import"./context-DVpahnpO.js";import"./useDescription-B0GcPv_I.js";import"./useControlledState-DGyHFLi9.js";import"./VisuallyHidden-3bHjY8GZ.js";import"./ListKeyboardDelegate-dzYvetd0.js";import"./useHighlightSelectionDescription-lgUWLCWs.js";import"./useLocalizedStringFormatter-BfPjM0Dg.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-BwFIKLcQ.js";import"./useGridSelectionCheckbox-B2KP2yde.js";import"./Checkbox-CR7tPop8.js";import"./Form-Cq4QZx_r.js";import"./Text-BorP-jFP.js";import"./useFormValidation-D_zB_ZT8.js";import"./Label-B23VYN9V.js";import"./useField-lqkOjd2l.js";import"./useLabels-Dt0KIlgT.js";import"./createLucideIcon-8wDOqnHv.js";const ne={component:b,title:"Components/Table",tags:["autodocs"],args:{"aria-label":"Files"}},i=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],g=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}],o={render:({...r})=>a.jsxs(b,{selectionMode:"multiple",...r,children:[a.jsx(x,{columns:i,children:e=>a.jsx(h,{isRowHeader:e.isRowHeader,children:e.name})}),a.jsx(T,{items:g,children:e=>a.jsx(C,{columns:i,children:s=>a.jsx(R,{children:e[s.id]})})})]})},t={...o,args:{striped:!0,className:"my-class"},play:async({canvas:r,step:e,args:s})=>{const w=r.getByLabelText(s["aria-label"]);await e("Class names should be appended",async()=>{m(w).toHaveClass(v.table,"my-class")}),await e("The rows should change background color on hover",async()=>{const n=r.getByText(g[2].name);await H.hover(n),m(n).toHaveStyle({backgroundColor:"rgb(204, 204, 204)"})})}};var l,d,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    return <Table selectionMode='multiple' {...args}>
        <TableHeader columns={columns}>
          {column => <Column isRowHeader={column.isRowHeader}>{column.name}</Column>}
        </TableHeader>
        <TableBody items={rows}>
          {item => <Row columns={columns}>
              {column => <Cell>{item[column.id]}</Cell>}
            </Row>}
        </TableBody>
      </Table>;
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,u,y;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Primary,
  args: {
    striped: true,
    className: 'my-class'
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    const table = canvas.getByLabelText(args['aria-label'] as string);
    await step('Class names should be appended', async () => {
      expect(table).toHaveClass(styles.table, 'my-class');
    });
    await step('The rows should change background color on hover', async () => {
      const anOddRow = canvas.getByText(rows[2].name);
      await userEvent.hover(anOddRow);
      expect(anOddRow).toHaveStyle({
        backgroundColor: 'rgb(204, 204, 204)'
      });
    });
  }
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const me=["Primary","Striped"];export{o as Primary,t as Striped,me as __namedExportsOrder,ne as default};
