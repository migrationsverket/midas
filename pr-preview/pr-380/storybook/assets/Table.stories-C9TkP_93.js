import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{T as b,a as x,C as h,$ as T,R as C,b as R,s as v}from"./Table-B3LUJxFM.js";import{e as m,u as H}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-CTiZg4rz.js";import"./utils-fGMpyvF6.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-qio85TVe.js";import"./Label-C7YJVz0K.js";import"./Hidden-lswqw32w.js";import"./useFocusRing-D234eI5d.js";import"./index-cpIEhwLo.js";import"./context-gwlhO1hg.js";import"./LiveAnnouncer-A-XV3aHJ.js";import"./RSPContexts-CeCCo7XS.js";import"./Collection-8zswMZr2.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./SelectionManager-CpQyjLx-.js";import"./useEvent-Ou8lCwV4.js";import"./scrollIntoView-Br2KMoz-.js";import"./FocusScope-BTvUdKNZ.js";import"./useControlledState-DGyHFLi9.js";import"./VisuallyHidden-CIX9y9is.js";import"./ListKeyboardDelegate-Cy2OSJKs.js";import"./useHighlightSelectionDescription-D1mAfCwv.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-D7bE6AYj.js";import"./useCollator-BwOLflG5.js";import"./useHasTabbableChild-CM3Inzdo.js";import"./getScrollParent-DaqmRUg6.js";import"./Checkbox-C7cVOIn7.js";import"./Checkbox-U40LUIMq.js";import"./Form-I0ljaAay.js";import"./Text-CLHHKsvT.js";import"./useFormValidation-BplRM21L.js";import"./useField-DUxalVp6.js";import"./createLucideIcon-8wDOqnHv.js";const pe={component:b,title:"Components/Table",tags:["autodocs"],args:{"aria-label":"Files"}},i=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],w=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}],o={render:({...r})=>a.jsxs(b,{selectionMode:"multiple",...r,children:[a.jsx(x,{columns:i,children:e=>a.jsx(h,{isRowHeader:e.isRowHeader,children:e.name})}),a.jsx(T,{items:w,children:e=>a.jsx(C,{columns:i,children:s=>a.jsx(R,{children:e[s.id]})})})]})},t={...o,args:{striped:!0,className:"my-class"},play:async({canvas:r,step:e,args:s})=>{const g=r.getByLabelText(s["aria-label"]);await e("Class names should be appended",async()=>{m(g).toHaveClass(v.table,"my-class")}),await e("The rows should change background color on hover",async()=>{const n=await r.findByText(w[2].name);await H.hover(n),m(n).toHaveStyle({backgroundColor:"rgb(230, 230, 230)"})})}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const de=["Primary","Striped"];export{o as Primary,t as Striped,de as __namedExportsOrder,pe as default};
