import{j as s}from"./jsx-runtime-BYYWji4R.js";import{e as c,u as C}from"./index-CqmFxPum.js";import{l as z,h as m}from"./test-DcKGE-up.js";import{C as p,R as d,$ as g,a as h,T as y,b as u,s as H}from"./Table-D4PU_Jw1.js";import{s as j}from"./modes-BX-MOWoB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BD6hc4wl.js";import"./utils-oc6myKvD.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-CQGqtZ9B.js";import"./Label-CpkHsAPL.js";import"./Hidden-BC9qER92.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Blgy_cRF.js";import"./context-BSqJJvai.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useButton-Cqc6u4_f.js";import"./usePress-BfxC_TyQ.js";import"./useFocusRing-DUrskli4.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useFocusable-tJD4A6lu.js";import"./RSPContexts-HQcWPJyv.js";import"./Collection-BHHe22Am.js";import"./index-NDK0uC61.js";import"./DragAndDrop-lZrB2UzM.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./SelectionManager-BGs3xiJx.js";import"./useEvent-DVigVKKB.js";import"./FocusScope-Dq_oVuiP.js";import"./useDescription-Bdyn64K0.js";import"./useControlledState-H1tiOFpU.js";import"./inertValue-C_mH9YkE.js";import"./useHighlightSelectionDescription-EcAuZEkO.js";import"./useUpdateEffect-BzF61qSB.js";import"./useLocalizedStringFormatter-DqnULi-B.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./VisuallyHidden-uwYO98VR.js";import"./ListKeyboardDelegate-EWbBYqg2.js";import"./useCollator-B-UPZ4SJ.js";import"./useHasTabbableChild-CdX5JQwf.js";import"./createLucideIcon-DQK9Z80p.js";import"./Checkbox-C2_O4S39.js";import"./Form-CXoNEyM_.js";import"./useFormValidation-Cv-fFL6t.js";import"./useToggleState-DcHMzLVj.js";const b=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],v=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}],ve={component:u,subcomponents:{TableHeader:y,Column:h,TableBody:g,Row:d,Cell:p},title:"Components/Table",tags:["autodocs"],args:{"aria-label":"Files",selectionMode:"multiple"},argTypes:{size:{control:!1}},parameters:{chromatic:{modes:j}},render:(a,{globals:{size:t}})=>s.jsxs(u,{...a,size:t,children:[s.jsx(y,{columns:b,children:e=>s.jsx(h,{isRowHeader:e.isRowHeader,children:e.name})}),s.jsx(g,{items:v,children:e=>s.jsx(d,{columns:b,children:r=>s.jsx(p,{children:e[r.id]})})})]})},i={play:async({canvas:a,step:t,globals:{size:e}})=>{await t("table headers should change size according to size prop",async()=>{(await a.findAllByRole("columnheader")).forEach(async n=>{const{height:o}=n.getBoundingClientRect();await c(o).toBe(e==="large"?48:40)})}),await t("cells should change size according to size prop",async()=>{(await a.findAllByRole("gridcell")).forEach(async n=>{const{height:o}=n.getBoundingClientRect();await c(o).toBe(e==="large"?48:40)})})}},l={args:{striped:!0,className:"my-class"},play:async({canvas:a,step:t,args:e,globals:{scheme:r}})=>{const n=a.getByLabelText(e["aria-label"]);await t("Class names should be appended",async()=>{await c(n).toHaveClass(H.table,e.className)}),await t("The rows should change background color on hover",async()=>{const o=await a.findByText(v[2].name);await C.hover(o),await c(o).toHaveStyle({backgroundColor:z(m("#e6e6e6"),m("#333333"),r)})})}};var w,x,f;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(B=(T=l.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const Ce=["Primary","Striped"];export{i as Primary,l as Striped,Ce as __namedExportsOrder,ve as default};
