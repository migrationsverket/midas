import{j as o}from"./jsx-runtime-BYYWji4R.js";import{e as c,u as C}from"./index-CqmFxPum.js";import{l as z,h as m}from"./test-DcKGE-up.js";import{C as d,R as p,$ as g,a as h,T as y,b as u,s as H}from"./Table-CanBE_Yi.js";import{s as j}from"./modes-BX-MOWoB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-Dw7lljiq.js";import"./utils-CT8CL8Qy.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-CiRxO26c.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./context-zNjZoWML.js";import"./useButton-DFlERivp.js";import"./RSPContexts-HQcWPJyv.js";import"./Collection-CAY-ghkk.js";import"./index-NDK0uC61.js";import"./DragAndDrop-TtKNn804.js";import"./getScrollParent-D3zukwiL.js";import"./scrollIntoView-D-J2YGNX.js";import"./SelectionManager-B7CR_Zkr.js";import"./useEvent-YbNcfHeo.js";import"./FocusScope-DFjHfTMc.js";import"./useControlledState-H1tiOFpU.js";import"./inertValue-C_mH9YkE.js";import"./useHighlightSelectionDescription-BLS53P9I.js";import"./useUpdateEffect-BzF61qSB.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./VisuallyHidden-Bwo2Sxwr.js";import"./ListKeyboardDelegate-DdGMYXDu.js";import"./useHasTabbableChild-uobRX2QT.js";import"./createLucideIcon-uZw3gxGR.js";import"./Checkbox-Dij_DQrc.js";import"./Form-C688dPfu.js";import"./useFormValidation-DOw2d6ip.js";import"./useToggleState-DcHMzLVj.js";const b=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],v=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}],ye={component:u,subcomponents:{TableHeader:y,Column:h,TableBody:g,Row:p,Cell:d},title:"Components/Table",tags:["autodocs"],args:{"aria-label":"Files",selectionMode:"multiple"},argTypes:{size:{control:!1}},parameters:{chromatic:{modes:j}},render:(a,{globals:{size:t}})=>o.jsxs(u,{...a,size:t,children:[o.jsx(y,{columns:b,children:e=>o.jsx(h,{isRowHeader:e.isRowHeader,children:e.name})}),o.jsx(g,{items:v,children:e=>o.jsx(p,{columns:b,children:n=>o.jsx(d,{children:e[n.id]})})})]})},i={play:async({canvas:a,step:t,globals:{size:e}})=>{await t("table headers should change size according to size prop",async()=>{(await a.findAllByRole("columnheader")).forEach(async r=>{const{height:s}=r.getBoundingClientRect();await c(s).toBe(e==="large"?48:40)})}),await t("cells should change size according to size prop",async()=>{(await a.findAllByRole("gridcell")).forEach(async r=>{const{height:s}=r.getBoundingClientRect();await c(s).toBe(e==="large"?48:40)})})}},l={args:{striped:!0,className:"my-class"},play:async({canvas:a,step:t,args:e,globals:{scheme:n}})=>{const r=a.getByLabelText(e["aria-label"]);await t("Class names should be appended",async()=>{await c(r).toHaveClass(H.table,e.className)}),await t("The rows should change background color on hover",async()=>{const s=await a.findByText(v[2].name);await C.hover(s),await c(s).toHaveStyle({backgroundColor:z(m("#e6e6e6"),m("#333333"),n)})})}};var w,x,f;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(B=(T=l.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const ue=["Primary","Striped"];export{i as Primary,l as Striped,ue as __namedExportsOrder,ye as default};
