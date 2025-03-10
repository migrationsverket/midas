import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{T as b,a as x,C as h,$ as T,R as C,b as R,s as v}from"./Table-CrT-y9h9.js";import{e as m,u as H}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-Cm6N-U3G.js";import"./useFocusable-kTDKG0-I.js";import"./clsx-B-dksMZM.js";import"./Hidden-BtGjzlYc.js";import"./index-cpIEhwLo.js";import"./RSPContexts-CeCCo7XS.js";import"./Collection-yU42VZsj.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./SelectionManager-C4ptO5S1.js";import"./useEvent-CUPsne6n.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-DFXDyZr7.js";import"./context-_OjZNubd.js";import"./useDescription-Wc3eT9Hr.js";import"./useControlledState-DGyHFLi9.js";import"./VisuallyHidden-D13_LDvY.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useHighlightSelectionDescription-CAMReREE.js";import"./useLocalizedStringFormatter-DFEaIMYS.js";import"./useUpdateEffect-DShQiA8p.js";import"./useCollator-CU9Q0tF2.js";import"./useHasTabbableChild-Dbawi6wQ.js";import"./Checkbox-DRYZmQfy.js";import"./Form-CeDqcAbX.js";import"./Text-B6PEOduq.js";import"./useFormValidation-DR3ZhvQ-.js";import"./Label-CQG0hq8b.js";import"./useField-BCfbuq15.js";import"./useLabels-CfvNSRSq.js";import"./createLucideIcon-8wDOqnHv.js";const me={component:b,title:"Components/Table",tags:["autodocs"],args:{"aria-label":"Files"}},i=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],g=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}],o={render:({...r})=>a.jsxs(b,{selectionMode:"multiple",...r,children:[a.jsx(x,{columns:i,children:e=>a.jsx(h,{isRowHeader:e.isRowHeader,children:e.name})}),a.jsx(T,{items:g,children:e=>a.jsx(C,{columns:i,children:s=>a.jsx(R,{children:e[s.id]})})})]})},t={...o,args:{striped:!0,className:"my-class"},play:async({canvas:r,step:e,args:s})=>{const w=r.getByLabelText(s["aria-label"]);await e("Class names should be appended",async()=>{m(w).toHaveClass(v.table,"my-class")}),await e("The rows should change background color on hover",async()=>{const n=r.getByText(g[2].name);await H.hover(n),m(n).toHaveStyle({backgroundColor:"rgb(204, 204, 204)"})})}};var l,d,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const ie=["Primary","Striped"];export{o as Primary,t as Striped,ie as __namedExportsOrder,me as default};
