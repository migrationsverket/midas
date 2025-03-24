import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{T as b,a as x,C as h,$ as T,R as C,b as R,s as v}from"./Table-Bs_Ew-CW.js";import{e as m,u as H}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BAmjpgnq.js";import"./utils-Cd6MiihZ.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-Dh0Vg3qS.js";import"./Label-Bf-bZThx.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ClMtG9eF.js";import"./context-BSqmORe6.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusRing--RQdELqC.js";import"./index-cpIEhwLo.js";import"./useFocusable-5VAxOUE-.js";import"./RSPContexts-CeCCo7XS.js";import"./Collection-CC9oGC21.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./SelectionManager-DeX5238t.js";import"./useEvent-Yxrkvbn7.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-B7ZOkgD-.js";import"./useDescription-CVNFK32G.js";import"./useControlledState-DGyHFLi9.js";import"./VisuallyHidden-DRXW-gYG.js";import"./ListKeyboardDelegate-xVJLa59h.js";import"./useHighlightSelectionDescription-CrqVFzKW.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-CIgGmZTI.js";import"./useCollator-C3PRVItH.js";import"./useHasTabbableChild-CW7EX7UL.js";import"./getScrollParent-CrrBdd7g.js";import"./Checkbox-jaVc-Ppz.js";import"./Form-Cr76Dr7U.js";import"./Text-BkowhAon.js";import"./useFormValidation-BT6lxpQu.js";import"./useField-9Cy_F6CL.js";import"./createLucideIcon-8wDOqnHv.js";const ye={component:b,title:"Components/Table",tags:["autodocs"],args:{"aria-label":"Files"}},i=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],w=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}],o={render:({...r})=>a.jsxs(b,{selectionMode:"multiple",...r,children:[a.jsx(x,{columns:i,children:e=>a.jsx(h,{isRowHeader:e.isRowHeader,children:e.name})}),a.jsx(T,{items:w,children:e=>a.jsx(C,{columns:i,children:s=>a.jsx(R,{children:e[s.id]})})})]})},t={...o,args:{striped:!0,className:"my-class"},play:async({canvas:r,step:e,args:s})=>{const g=r.getByLabelText(s["aria-label"]);await e("Class names should be appended",async()=>{m(g).toHaveClass(v.table,"my-class")}),await e("The rows should change background color on hover",async()=>{const n=await r.findByText(w[2].name);await H.hover(n),m(n).toHaveStyle({backgroundColor:"rgb(230, 230, 230)"})})}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const be=["Primary","Striped"];export{o as Primary,t as Striped,be as __namedExportsOrder,ye as default};
