import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{T as b,a as x,C as h,$ as T,R as C,b as R,s as v}from"./Table-BkP1TnZL.js";import{e as m,u as H}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DWcm3eun.js";import"./useFocusRing-CzvYi63w.js";import"./clsx-B-dksMZM.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Hidden-Cwv2mliU.js";import"./index-cpIEhwLo.js";import"./useFocusable-BFetNXOg.js";import"./RSPContexts-CeCCo7XS.js";import"./Collection-X5x-dm2B.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./SelectionManager-DjWgx8kx.js";import"./useEvent-obUhTg3D.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-CaULHkOc.js";import"./context-DhWQxiCQ.js";import"./useDescription-DLAKITkC.js";import"./useControlledState-DGyHFLi9.js";import"./VisuallyHidden-Gg3j86pG.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useHighlightSelectionDescription-DIIL1iW4.js";import"./useLocalizedStringFormatter-BPmhGMia.js";import"./useUpdateEffect-DShQiA8p.js";import"./useCollator-CZkj3LZa.js";import"./useHasTabbableChild-DxaYTyzB.js";import"./getScrollParent-CrrBdd7g.js";import"./Checkbox-CsZ9V2mP.js";import"./Form-CtPEz-EL.js";import"./Text-Bs3wmQ_r.js";import"./useFormValidation-COh_aIUh.js";import"./Label-D5LZnuba.js";import"./useField-CeWVpZ88.js";import"./useLabels-C6xreehw.js";import"./createLucideIcon-8wDOqnHv.js";const pe={component:b,title:"Components/Table",tags:["autodocs"],args:{"aria-label":"Files"}},i=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],g=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}],o={render:({...r})=>a.jsxs(b,{selectionMode:"multiple",...r,children:[a.jsx(x,{columns:i,children:e=>a.jsx(h,{isRowHeader:e.isRowHeader,children:e.name})}),a.jsx(T,{items:g,children:e=>a.jsx(C,{columns:i,children:s=>a.jsx(R,{children:e[s.id]})})})]})},t={...o,args:{striped:!0,className:"my-class"},play:async({canvas:r,step:e,args:s})=>{const w=r.getByLabelText(s["aria-label"]);await e("Class names should be appended",async()=>{m(w).toHaveClass(v.table,"my-class")}),await e("The rows should change background color on hover",async()=>{const n=r.getByText(g[2].name);await H.hover(n),m(n).toHaveStyle({backgroundColor:"rgb(204, 204, 204)"})})}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,u,y;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const de=["Primary","Striped"];export{o as Primary,t as Striped,de as __namedExportsOrder,pe as default};
