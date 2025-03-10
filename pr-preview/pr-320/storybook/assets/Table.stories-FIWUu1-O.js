import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{T as b,a as h,C as x,$ as T,R as v,b as C,s as R}from"./Table-2TVbAGYw.js";import{w as f,e as i,u as H}from"./index-frOfh_zr.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BvljoDys.js";import"./useFocusRing-Dvg3g2cU.js";import"./clsx-B-dksMZM.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Hidden-ClhOTPkO.js";import"./index-cpIEhwLo.js";import"./useFocusable-C9L8Uaaf.js";import"./RSPContexts-CeCCo7XS.js";import"./Collection-Cb_ranKc.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./SelectionManager-DgK6Za11.js";import"./useEvent-BYWgjDNQ.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-D7AO3NHB.js";import"./context-CuBBIohG.js";import"./useDescription-CNBqbECa.js";import"./useControlledState-DGyHFLi9.js";import"./VisuallyHidden-D33sH8jm.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useHighlightSelectionDescription-BjkPEEe8.js";import"./useLocalizedStringFormatter-a7gPYq3X.js";import"./useUpdateEffect-DShQiA8p.js";import"./useCollator-Brx0Pzyc.js";import"./useHasTabbableChild-DpCQfc91.js";import"./getScrollParent-CrrBdd7g.js";import"./Checkbox-6QOwqH9W.js";import"./Form-BB8RM6iI.js";import"./Text-DGilHHfL.js";import"./useFormValidation-c4o29Mgv.js";import"./useField-CBiuCiGl.js";import"./useLabels-BjpOYTdf.js";import"./createLucideIcon-8wDOqnHv.js";const de={component:b,title:"Components/Table",tags:["autodocs"]},m=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],w=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}],j="Files",o={args:{},render:({...s})=>a.jsxs(b,{"aria-label":j,selectionMode:"multiple",...s,children:[a.jsx(h,{columns:m,children:e=>a.jsx(x,{isRowHeader:e.isRowHeader,children:e.name})}),a.jsx(T,{items:w,children:e=>a.jsx(v,{columns:m,children:t=>a.jsx(C,{children:e[t.id]})})})]})},r={...o,args:{striped:!0,className:"my-class"},play:async({canvasElement:s,step:e})=>{const t=f(s),g=await t.findByLabelText("Files");await e("Class names should be appended",async()=>{i(g).toHaveClass(R.table,"my-class")}),await e("The rows should change background color on hover",async()=>{const n=await t.findByText(w[2].name);await H.hover(n),i(n).toHaveStyle({backgroundColor:"rgb(204, 204, 204)"})})}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const pe=["Primary","Striped"];export{o as Primary,r as Striped,pe as __namedExportsOrder,de as default};
