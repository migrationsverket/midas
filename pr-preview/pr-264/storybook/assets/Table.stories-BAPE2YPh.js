import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{T as b,a as h,C as x,$ as T,R as v,b as C,s as R}from"./Table-C6pesME_.js";import{w as f,e as i,u as H}from"./index-frOfh_zr.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DkIm9Uc-.js";import"./useFocusable-eIx-4jzq.js";import"./clsx-B-dksMZM.js";import"./Hidden-CwoxZtLc.js";import"./index-cpIEhwLo.js";import"./RSPContexts-CeCCo7XS.js";import"./Collection-BJ6W1INE.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./SelectionManager-D7rUZ8v5.js";import"./useEvent-erCw9IEk.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-BYskV0RP.js";import"./context-D3jO5C6_.js";import"./useDescription-DZSnqKNm.js";import"./useControlledState-DGyHFLi9.js";import"./VisuallyHidden-QTU03Ux4.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useHighlightSelectionDescription-BMcCx3P0.js";import"./useLocalizedStringFormatter-Bwxw7HuM.js";import"./useUpdateEffect-DShQiA8p.js";import"./useCollator-ACgtK5l-.js";import"./useHasTabbableChild-CuttWNNg.js";import"./Checkbox-Cb7uTXHN.js";import"./Form-Cs3Z1rQr.js";import"./Text-dcTKqkfp.js";import"./useFormValidation-ZJlCcIxf.js";import"./useField-BGtVIC3b.js";import"./useLabels-D7v7jGQi.js";import"./createLucideIcon-8wDOqnHv.js";const me={component:b,title:"Components/Table",tags:["autodocs"]},m=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],w=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}],j="Files",o={args:{},render:({...s})=>a.jsxs(b,{"aria-label":j,selectionMode:"multiple",...s,children:[a.jsx(h,{columns:m,children:e=>a.jsx(x,{isRowHeader:e.isRowHeader,children:e.name})}),a.jsx(T,{items:w,children:e=>a.jsx(v,{columns:m,children:t=>a.jsx(C,{children:e[t.id]})})})]})},r={...o,args:{striped:!0,className:"my-class"},play:async({canvasElement:s,step:e})=>{const t=f(s),g=await t.findByLabelText("Files");await e("Class names should be appended",async()=>{i(g).toHaveClass(R.table,"my-class")}),await e("The rows should change background color on hover",async()=>{const n=await t.findByText(w[2].name);await H.hover(n),i(n).toHaveStyle({backgroundColor:"rgb(204, 204, 204)"})})}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...args
  }) => {
    return <Table aria-label={label} selectionMode='multiple' {...args}>
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
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Primary,
  args: {
    striped: true,
    className: 'my-class'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const table = await canvas.findByLabelText('Files');
    await step('Class names should be appended', async () => {
      expect(table).toHaveClass(styles.table, 'my-class');
    });
    await step('The rows should change background color on hover', async () => {
      const anOddRow = await canvas.findByText(rows[2].name);
      await userEvent.hover(anOddRow);
      expect(anOddRow).toHaveStyle({
        backgroundColor: 'rgb(204, 204, 204)'
      });
    });
  }
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const le=["Primary","Striped"];export{o as Primary,r as Striped,le as __namedExportsOrder,me as default};
