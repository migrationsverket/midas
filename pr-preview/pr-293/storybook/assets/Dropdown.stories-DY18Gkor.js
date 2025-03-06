import{j as s}from"./jsx-runtime-DtgEGaVE.js";import{D as h,a as v}from"./Dropdown-DEIfn9SP.js";import{w as x,u as T,e as E}from"./index-cNO5T_7D.js";import{L as B}from"./LinkButton-Bac5jSSO.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-DJFaj5QY.js";import"./Button-DlxIrWB_.js";import"./useFocusable-DTLHoeQe.js";import"./clsx-B-dksMZM.js";import"./Hidden-D9yAbrAR.js";import"./index-cpIEhwLo.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-B7QTCHgm.js";import"./context-DVpahnpO.js";import"./useControlledState-DGyHFLi9.js";import"./Collection-B65vjQb4.js";import"./index-DwWe6W7f.js";import"./Separator-CFSVS3UH.js";import"./SelectionManager-Z9gqeiha.js";import"./useEvent-B_cSPOEW.js";import"./FocusScope-DWsZ07QH.js";import"./useDescription-B0GcPv_I.js";import"./ListKeyboardDelegate-dzYvetd0.js";import"./Text-BorP-jFP.js";import"./PressResponder-DogE8OEY.js";import"./useLocalizedStringFormatter-BfPjM0Dg.js";import"./useLabels-Dt0KIlgT.js";import"./VisuallyHidden-3bHjY8GZ.js";import"./Button-CB_ubQ4C.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-D-7ck5zw.js";import"./chevron-right-CjCwHShF.js";const er={component:h,title:"Components/Dropdown",args:{title:"Meny",children:["Ett","Två","Tre"].map((e,a)=>s.jsx(v,{children:s.jsx(B,{variant:"tertiary",children:e})},"dropdown_"+a))}},r={},t={play:async({canvasElement:e,step:a,args:{title:f}})=>{const n=x(e);a("It should render successfully",async()=>{const g=await n.findByText(f);await T.click(g),E(n).toBeTruthy()})}},o={args:{...r.args,title:void 0,label:"Meny"}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step,
    args: {
      title
    }
  }) => {
    const canvas = within(canvasElement);
    step('It should render successfully', async () => {
      const dropdown = await canvas.findByText(title as string);
      await userEvent.click(dropdown);
      expect(canvas).toBeTruthy();
    });
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,y,w;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    title: undefined,
    label: 'Meny'
  }
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const ar=["Primary","Open","WithoutTitle"];export{t as Open,r as Primary,o as WithoutTitle,ar as __namedExportsOrder,er as default};
