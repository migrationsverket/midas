import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{T as b,a as h,C as x,$ as T,R as v,b as C,s as R}from"./Table-Dutj1ylD.js";import{w as f,e as i,u as H}from"./index-frOfh_zr.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-QmryGY2x.js";import"./useFocusable-DvoOiisW.js";import"./clsx-B-dksMZM.js";import"./Hidden-C-pamdWU.js";import"./index-cpIEhwLo.js";import"./RSPContexts-CeCCo7XS.js";import"./Collection-DXjGeaiG.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./SelectionManager-CrjNvHpx.js";import"./useEvent-CA0YFu_S.js";import"./FocusScope-BEpvNgc1.js";import"./context-DFhOKXSg.js";import"./useDescription-Ct3UQeSC.js";import"./useControlledState-DGyHFLi9.js";import"./VisuallyHidden-DXoeczHE.js";import"./ListKeyboardDelegate-Qpuh_B0q.js";import"./useHighlightSelectionDescription-BaTc4cjH.js";import"./useLocalizedStringFormatter-m925tTwS.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-CFpHdRS1.js";import"./useGridSelectionCheckbox-RGIB2vH1.js";import"./Checkbox-D64Evlmh.js";import"./Form-Co3XUpyT.js";import"./Text-EJwwmz-7.js";import"./useField-RzOmeqWZ.js";import"./useLabels-CtxEn0bM.js";import"./createLucideIcon-8wDOqnHv.js";const re={component:b,title:"Components/Table",tags:["autodocs"]},m=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],w=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}],j="Files",o={args:{},render:({...n})=>a.jsxs(b,{"aria-label":j,selectionMode:"multiple",...n,children:[a.jsx(h,{columns:m,children:e=>a.jsx(x,{isRowHeader:e.isRowHeader,children:e.name})}),a.jsx(T,{items:w,children:e=>a.jsx(v,{columns:m,children:t=>a.jsx(C,{children:e[t.id]})})})]})},s={...o,args:{striped:!0,className:"my-class"},play:async({canvasElement:n,step:e})=>{const t=f(n),g=await t.findByLabelText("Files");await e("Class names should be appended",async()=>{i(g).toHaveClass(R.table,"my-class")}),await e("The rows should change background color on hover",async()=>{const r=await t.findByText(w[2].name);await H.hover(r),i(r).toHaveStyle({backgroundColor:"rgb(204, 204, 204)"})})}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const ie=["Primary","Striped"];export{o as Primary,s as Striped,ie as __namedExportsOrder,re as default};
