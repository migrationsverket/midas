import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{T as y,a as h,C as x,$ as T,R as C,b as R,s as f}from"./Table-DQGmXUSQ.js";import{e as i,u as v}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-Co7pWk88.js";import"./utils-Dv9Ux5aE.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-6st-rJzm.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-BAqrTMfP.js";import"./context-eceod8wW.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useButton-DFPcodtW.js";import"./usePress-DljlCKCj.js";import"./useFocusRing-CPQALXIu.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cs9agisI.js";import"./RSPContexts-CeCCo7XS.js";import"./Collection-B2SsLZVR.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./SelectionManager-2oMtjjZz.js";import"./useEvent-DnmuJhSu.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-C0EWTSbR.js";import"./useDescription-TyCFs068.js";import"./useControlledState-DGyHFLi9.js";import"./VisuallyHidden-DiGk2ECL.js";import"./ListKeyboardDelegate-CA_BFpv4.js";import"./useHighlightSelectionDescription-CtcqEmyW.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-DA8E_9Dc.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useCollator-CouJQU85.js";import"./useHasTabbableChild-Bh3e4XK9.js";import"./getScrollParent-CrrBdd7g.js";import"./Checkbox-DhWb-4cX.js";import"./Form-BMyPeP3B.js";import"./Text-D0cNLqf0.js";import"./useFormValidation-BrFQy5aA.js";import"./useField-BWvtu4tG.js";import"./useToggleState-BmDBGXg5.js";import"./createLucideIcon-8wDOqnHv.js";const H=(a,e)=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?e:a,xe={component:y,title:"Components/Table",tags:["autodocs"],args:{"aria-label":"Files"}},m=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],w=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}],o={render:({...a})=>r.jsxs(y,{selectionMode:"multiple",...a,children:[r.jsx(h,{columns:m,children:e=>r.jsx(x,{isRowHeader:e.isRowHeader,children:e.name})}),r.jsx(T,{items:w,children:e=>r.jsx(C,{columns:m,children:s=>r.jsx(R,{children:e[s.id]})})})]})},t={...o,args:{striped:!0,className:"my-class"},play:async({canvas:a,step:e,args:s})=>{const g=a.getByLabelText(s["aria-label"]);await e("Class names should be appended",async()=>{i(g).toHaveClass(f.table,"my-class")}),await e("The rows should change background color on hover",async()=>{const n=await a.findByText(w[2].name);await v.hover(n),i(n).toHaveStyle({backgroundColor:H("rgb(230, 230, 230)","rgb(51, 51, 51)")})})}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,u,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
        backgroundColor: lightDark('rgb(230, 230, 230)', 'rgb(51, 51, 51)')
      });
    });
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const Te=["Primary","Striped"];export{o as Primary,t as Striped,Te as __namedExportsOrder,xe as default};
