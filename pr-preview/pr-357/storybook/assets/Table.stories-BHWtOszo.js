import{j as a}from"./jsx-runtime-CBDCb4rg.js";import{T as b,a as x,C as h,$ as T,R as C,b as R,s as v}from"./Table-DO_KqX03.js";import{e as m,u as H}from"./index-iZ8NAl3x.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-iL9IzHG8.js";import"./utils-CyugoGNF.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-B2jw0c1b.js";import"./Label-ByRA_SKm.js";import"./Hidden-B6il94lO.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DbJIstGE.js";import"./context-BwmME58u.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusRing-BODiw1iP.js";import"./index-BAyGJXOV.js";import"./useFocusable-CqLabGgp.js";import"./RSPContexts-BT50PPhj.js";import"./Collection-KpeOqn_K.js";import"./index-Btf1eDe9.js";import"./DragAndDrop-Bfvg-Q35.js";import"./SelectionManager-DRxs2Bqi.js";import"./useEvent-DrHgLB5Q.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Ded37Rd9.js";import"./useDescription-DZZa8B5b.js";import"./useControlledState-BgxdDqm0.js";import"./ListKeyboardDelegate-SnKTO46q.js";import"./useHighlightSelectionDescription-MBiDJdUj.js";import"./useUpdateEffect-Bs3_Kx5l.js";import"./useLocalizedStringFormatter-B6l6yPuV.js";import"./useCollator-B0i4hO_n.js";import"./useHasTabbableChild-BMUHg4RC.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Cx1OydyR.js";import"./Checkbox-BjP2r9QE.js";import"./Form-B3zPBtl7.js";import"./Text-DnyJpj_W.js";import"./useFormValidation-B1oMw7Lv.js";import"./useField-YKOABOJo.js";import"./createLucideIcon-DjmUzaoT.js";const ye={component:b,title:"Components/Table",tags:["autodocs"],args:{"aria-label":"Files"}},i=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],w=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}],o={render:({...r})=>a.jsxs(b,{selectionMode:"multiple",...r,children:[a.jsx(x,{columns:i,children:e=>a.jsx(h,{isRowHeader:e.isRowHeader,children:e.name})}),a.jsx(T,{items:w,children:e=>a.jsx(C,{columns:i,children:s=>a.jsx(R,{children:e[s.id]})})})]})},t={...o,args:{striped:!0,className:"my-class"},play:async({canvas:r,step:e,args:s})=>{const g=r.getByLabelText(s["aria-label"]);await e("Class names should be appended",async()=>{m(g).toHaveClass(v.table,"my-class")}),await e("The rows should change background color on hover",async()=>{const n=await r.findByText(w[2].name);await H.hover(n),m(n).toHaveStyle({backgroundColor:"rgb(230, 230, 230)"})})}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
