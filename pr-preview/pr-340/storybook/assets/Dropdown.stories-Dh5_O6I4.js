import{j as p}from"./jsx-runtime-DtgEGaVE.js";import{D as x,a as f}from"./Dropdown-b3PjRogy.js";import{u as h,e as T}from"./index-DtSMq7G1.js";import{L as v}from"./LinkButton-Dkii6sQJ.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Collection-X5x-dm2B.js";import"./Hidden-Cwv2mliU.js";import"./index-cpIEhwLo.js";import"./useFocusRing-CzvYi63w.js";import"./clsx-B-dksMZM.js";import"./index-DwWe6W7f.js";import"./Separator-DpKt-EJF.js";import"./SelectionManager-DjWgx8kx.js";import"./useEvent-obUhTg3D.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-CaULHkOc.js";import"./context-DhWQxiCQ.js";import"./useDescription-DLAKITkC.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-CZkj3LZa.js";import"./Dialog-BSG13mom.js";import"./OverlayArrow-DFvAyWp1.js";import"./Button-DWcm3eun.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-BFetNXOg.js";import"./RSPContexts-CeCCo7XS.js";import"./useDialog-BBNmFTNB.js";import"./getScrollParent-CrrBdd7g.js";import"./PressResponder-B88fYvo4.js";import"./useOverlayTriggerState-DuWewdYA.js";import"./DismissButton-CnWVp8i_.js";import"./useLabels-C6xreehw.js";import"./useLocalizedStringFormatter-BPmhGMia.js";import"./VisuallyHidden-Gg3j86pG.js";import"./Text-Bs3wmQ_r.js";import"./useMenuTriggerState-BffPGwdL.js";import"./useMenuTrigger-CuBNLIlM.js";import"./Button-CZ1uGSye.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-CdYCkHQL.js";import"./chevron-right-CjCwHShF.js";const dr={component:x,title:"Components/Dropdown",args:{title:"Meny",children:["Ett","Två","Tre"].map((r,i)=>p.jsx(f,{children:p.jsx(v,{variant:"tertiary",children:r})},"dropdown_"+i))}},t={},o={play:async({canvas:r,step:i,args:{title:g}})=>{await i("It should render successfully",async()=>{const w=r.getByText(g);await h.click(w),T(r).toBeTruthy()})}},e={args:{title:void 0,label:"Meny"}};var s,a,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(a=t.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const lr=["Primary","Open","WithoutTitle"];export{o as Open,t as Primary,e as WithoutTitle,lr as __namedExportsOrder,dr as default};
