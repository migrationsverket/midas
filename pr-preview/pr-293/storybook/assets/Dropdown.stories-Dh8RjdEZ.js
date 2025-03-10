import{j as p}from"./jsx-runtime-DtgEGaVE.js";import{D as x,a as f}from"./Dropdown-CGUOdxrM.js";import{u as h,e as T}from"./index-DtSMq7G1.js";import{L as v}from"./LinkButton-C20kNvVw.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Collection-yU42VZsj.js";import"./Hidden-BtGjzlYc.js";import"./index-cpIEhwLo.js";import"./useFocusable-kTDKG0-I.js";import"./clsx-B-dksMZM.js";import"./index-DwWe6W7f.js";import"./Separator-BSvMe0jc.js";import"./SelectionManager-C4ptO5S1.js";import"./useEvent-CUPsne6n.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-DFXDyZr7.js";import"./context-_OjZNubd.js";import"./useDescription-Wc3eT9Hr.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-CU9Q0tF2.js";import"./Dialog-BNL2wiYz.js";import"./OverlayArrow-Dyb7gmhQ.js";import"./Button-Cm6N-U3G.js";import"./RSPContexts-CeCCo7XS.js";import"./useDialog-Dk8P4f29.js";import"./PressResponder-bYOa3nO9.js";import"./useOverlayTriggerState-DBlnXKaU.js";import"./DismissButton-4yM4YEZA.js";import"./useLabels-CfvNSRSq.js";import"./useLocalizedStringFormatter-DFEaIMYS.js";import"./VisuallyHidden-D13_LDvY.js";import"./Text-B6PEOduq.js";import"./useMenuTriggerState-CmExfH1d.js";import"./useMenuTrigger-BOiBTMON.js";import"./Button-BgnELAWU.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-86-vqeb7.js";import"./chevron-right-CjCwHShF.js";const nr={component:x,title:"Components/Dropdown",args:{title:"Meny",children:["Ett","Två","Tre"].map((r,i)=>p.jsx(f,{children:p.jsx(v,{variant:"tertiary",children:r})},"dropdown_"+i))}},t={},o={play:async({canvas:r,step:i,args:{title:g}})=>{await i("It should render successfully",async()=>{const w=r.getByText(g);await h.click(w),T(r).toBeTruthy()})}},e={args:{title:void 0,label:"Meny"}};var s,a,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const mr=["Primary","Open","WithoutTitle"];export{o as Open,t as Primary,e as WithoutTitle,mr as __namedExportsOrder,nr as default};
