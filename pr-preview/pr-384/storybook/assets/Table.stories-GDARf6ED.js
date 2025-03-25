import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{T as b,a as x,C as h,$ as T,R as C,b as R,s as v}from"./Table-CQ3utSci.js";import{e as m,u as H}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-B2aR51FI.js";import"./utils-BYZtxgnE.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-Ce7Ytruc.js";import"./Label-B20XR-5d.js";import"./Hidden-DizQ9ce0.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D0L8qOPf.js";import"./context-DlPnyEqv.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-DcG3_cox.js";import"./useFocusRing-BVR65GV4.js";import"./focusSafely-CCsE9NOP.js";import"./index-cpIEhwLo.js";import"./useFocusable-ByeJrHLx.js";import"./RSPContexts-CeCCo7XS.js";import"./Collection-B3BuMPYM.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./SelectionManager-BjEm6zKp.js";import"./useEvent-CYKx4DfG.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-Cto1rr90.js";import"./useDescription-BK8-bxoY.js";import"./useControlledState-DGyHFLi9.js";import"./VisuallyHidden-CQ87MyWU.js";import"./ListKeyboardDelegate-CMNZAwbS.js";import"./useHighlightSelectionDescription-D7Z_gmS2.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-CYf1eOAG.js";import"./useCollator-CdnSoI7T.js";import"./useHasTabbableChild-CsFoJaFG.js";import"./getScrollParent-CrrBdd7g.js";import"./Checkbox-LRLmUseG.js";import"./Form-B__7jCkU.js";import"./Text-DGqKDvoY.js";import"./useFormValidation-CzFHg574.js";import"./useField-BP5oohdv.js";import"./createLucideIcon-8wDOqnHv.js";const we={component:b,title:"Components/Table",tags:["autodocs"],args:{"aria-label":"Files"}},i=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],w=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}],o={render:({...r})=>a.jsxs(b,{selectionMode:"multiple",...r,children:[a.jsx(x,{columns:i,children:e=>a.jsx(h,{isRowHeader:e.isRowHeader,children:e.name})}),a.jsx(T,{items:w,children:e=>a.jsx(C,{columns:i,children:s=>a.jsx(R,{children:e[s.id]})})})]})},t={...o,args:{striped:!0,className:"my-class"},play:async({canvas:r,step:e,args:s})=>{const g=r.getByLabelText(s["aria-label"]);await e("Class names should be appended",async()=>{m(g).toHaveClass(v.table,"my-class")}),await e("The rows should change background color on hover",async()=>{const n=await r.findByText(w[2].name);await H.hover(n),m(n).toHaveStyle({backgroundColor:"rgb(230, 230, 230)"})})}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      const anOddRow = await canvas.findByText(rows[2].name);
      await userEvent.hover(anOddRow);
      expect(anOddRow).toHaveStyle({
        backgroundColor: 'rgb(230, 230, 230)'
      });
    });
  }
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const ge=["Primary","Striped"];export{o as Primary,t as Striped,ge as __namedExportsOrder,we as default};
