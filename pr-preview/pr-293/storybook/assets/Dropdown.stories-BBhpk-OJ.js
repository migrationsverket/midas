import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{D as x,a as f}from"./Dropdown-qjg4aB2I.js";import{u as h,e as T}from"./index-Bn1z2x26.js";import{L as v}from"./LinkButton-Bac5jSSO.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-DJFaj5QY.js";import"./Button-DlxIrWB_.js";import"./useFocusable-DTLHoeQe.js";import"./clsx-B-dksMZM.js";import"./Hidden-D9yAbrAR.js";import"./index-cpIEhwLo.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-B7QTCHgm.js";import"./context-DVpahnpO.js";import"./useControlledState-DGyHFLi9.js";import"./Collection-B65vjQb4.js";import"./index-DwWe6W7f.js";import"./Separator-CFSVS3UH.js";import"./SelectionManager-Z9gqeiha.js";import"./useEvent-B_cSPOEW.js";import"./FocusScope-DWsZ07QH.js";import"./useDescription-B0GcPv_I.js";import"./ListKeyboardDelegate-dzYvetd0.js";import"./Text-BorP-jFP.js";import"./PressResponder-DogE8OEY.js";import"./useLocalizedStringFormatter-BfPjM0Dg.js";import"./useLabels-Dt0KIlgT.js";import"./VisuallyHidden-3bHjY8GZ.js";import"./Button-DaFhfzDE.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-D-7ck5zw.js";import"./chevron-right-CjCwHShF.js";const tr={component:x,title:"Components/Dropdown",args:{title:"Meny",children:["Ett","Två","Tre"].map((r,s)=>a.jsx(f,{children:a.jsx(v,{variant:"tertiary",children:r})},"dropdown_"+s))}},t={},o={play:async({canvas:r,step:s,args:{title:g}})=>{await s("It should render successfully",async()=>{const w=r.getByText(g);await h.click(w),T(r).toBeTruthy()})}},e={args:{title:void 0,label:"Meny"}};var n,i,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args: {
      title
    }
  }) => {
    await step('It should render successfully', async () => {
      const dropdown = canvas.getByText(title as string);
      await userEvent.click(dropdown);
      expect(canvas).toBeTruthy();
    });
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,u,y;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: undefined,
    label: 'Meny'
  }
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const or=["Primary","Open","WithoutTitle"];export{o as Open,t as Primary,e as WithoutTitle,or as __namedExportsOrder,tr as default};
