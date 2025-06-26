import{j as o}from"./jsx-runtime-BYYWji4R.js";import{e as c,u as C}from"./index-CqmFxPum.js";import{l as z,h as d}from"./test-DcKGE-up.js";import{C as m,R as p,$ as g,a as h,T as y,b as u,s as H}from"./Table-BMf1C_kN.js";import{s as j}from"./modes-BX-MOWoB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-D5YfTa-t.js";import"./utils-BLyg3OOq.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-eGNMqT99.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./context-d6PNTTSe.js";import"./useButton-rs5PgjfN.js";import"./RSPContexts-HQcWPJyv.js";import"./Collection-nQ4RBMPG.js";import"./index-NDK0uC61.js";import"./DragAndDrop-BqnrhZqQ.js";import"./getScrollParent-FdZGTYO5.js";import"./scrollIntoView-BivqL63c.js";import"./SelectionManager-sKkAcYRw.js";import"./useEvent-B0l3XC2n.js";import"./FocusScope-C-SsV_ba.js";import"./useControlledState-H1tiOFpU.js";import"./inertValue-C_mH9YkE.js";import"./useHighlightSelectionDescription-DhJ4M3pb.js";import"./useUpdateEffect-BzF61qSB.js";import"./useLocalizedStringFormatter-TrhiTCnH.js";import"./VisuallyHidden-DWQ0FsMN.js";import"./ListKeyboardDelegate-Bkg2cFa9.js";import"./useHasTabbableChild-DSrCCBGW.js";import"./createLucideIcon-DQK9Z80p.js";import"./Checkbox-Bl6EfnlF.js";import"./Form-CLBgFqGB.js";import"./useFormValidation-Cwkq_bn0.js";import"./useToggleState-DcHMzLVj.js";const b=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],v=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}],ge={component:u,subcomponents:{TableHeader:y,Column:h,TableBody:g,Row:p,Cell:m},title:"Components/Table",tags:["autodocs"],args:{"aria-label":"Files",selectionMode:"multiple"},argTypes:{size:{control:!1}},parameters:{chromatic:{modes:j}},render:(a,{globals:{size:t}})=>o.jsxs(u,{...a,size:t,children:[o.jsx(y,{columns:b,children:e=>o.jsx(h,{isRowHeader:e.isRowHeader,children:e.name})}),o.jsx(g,{items:v,children:e=>o.jsx(p,{columns:b,children:n=>o.jsx(m,{children:e[n.id]})})})]})},i={play:async({canvas:a,step:t,globals:{size:e}})=>{await t("table headers should change size according to size prop",async()=>{(await a.findAllByRole("columnheader")).forEach(async r=>{const{height:s}=r.getBoundingClientRect();await c(s).toBe(e==="large"?48:40)})}),await t("cells should change size according to size prop",async()=>{(await a.findAllByRole("gridcell")).forEach(async r=>{const{height:s}=r.getBoundingClientRect();await c(s).toBe(e==="large"?48:40)})})}},l={args:{striped:!0,className:"my-class"},play:async({canvas:a,step:t,args:e,globals:{scheme:n}})=>{const r=a.getByLabelText(e["aria-label"]);await t("Class names should be appended",async()=>{await c(r).toHaveClass(H.table,e.className)}),await t("The rows should change background color on hover",async()=>{const s=await a.findByText(v[2].name);await C.hover(s),await c(s).toHaveStyle({backgroundColor:z(d("#e6e6e6"),d("#333333"),n)})})}};var w,x,f;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    globals: {
      size
    }
  }) => {
    await step('table headers should change size according to size prop', async () => {
      const tableHeaders = await canvas.findAllByRole('columnheader');
      tableHeaders.forEach(async column => {
        const {
          height
        } = column.getBoundingClientRect();
        await expect(height).toBe(size === 'large' ? 48 : 40);
      });
    });
    await step('cells should change size according to size prop', async () => {
      const cells = await canvas.findAllByRole('gridcell');
      cells.forEach(async cell => {
        const {
          height
        } = cell.getBoundingClientRect();
        await expect(height).toBe(size === 'large' ? 48 : 40);
      });
    });
  }
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var R,T,B;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    striped: true,
    className: 'my-class'
  },
  play: async ({
    canvas,
    step,
    args,
    globals: {
      scheme
    }
  }) => {
    const table = canvas.getByLabelText(args['aria-label'] as string);
    await step('Class names should be appended', async () => {
      await expect(table).toHaveClass(styles.table, args.className as string);
    });
    await step('The rows should change background color on hover', async () => {
      const anOddRow = await canvas.findByText(rows[2].name);
      await userEvent.hover(anOddRow);
      await expect(anOddRow).toHaveStyle({
        backgroundColor: lightDark(hexToRgb('#e6e6e6'), hexToRgb('#333333'), scheme)
      });
    });
  }
}`,...(B=(T=l.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const he=["Primary","Striped"];export{i as Primary,l as Striped,he as __namedExportsOrder,ge as default};
