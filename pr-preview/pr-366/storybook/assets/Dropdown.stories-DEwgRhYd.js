import{j as p}from"./jsx-runtime-DtgEGaVE.js";import{D as x,a as f}from"./Dropdown-TymLCY_0.js";import{u as h,e as T}from"./index-DtSMq7G1.js";import{L as v}from"./LinkButton-eRgG7Cp8.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Collection-Cckz-aMS.js";import"./Hidden-DizQ9ce0.js";import"./index-cpIEhwLo.js";import"./useFocusable-qNkO0Mxa.js";import"./useFocusRing-Dz6JbirZ.js";import"./utils-C4wbeGu1.js";import"./clsx-B-dksMZM.js";import"./index-DwWe6W7f.js";import"./Separator-DvwU5ccg.js";import"./SelectionManager-CBsPsR0V.js";import"./useEvent-D4_b5_Hb.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-DXdr2zZl.js";import"./context-gxVqox2x.js";import"./useDescription-B1EhVr9u.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-Bn7qUmur.js";import"./useCollator-DpeVXYFV.js";import"./Dialog-CAZ65nDH.js";import"./OverlayArrow-gTlSlHE6.js";import"./Button-EmqGRilJ.js";import"./ProgressBar-DVVijuUB.js";import"./Label-BXmCKTLy.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-Bdg4Lht-.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./RSPContexts-CeCCo7XS.js";import"./useDialog-Diz9VFYw.js";import"./getScrollParent-CrrBdd7g.js";import"./PressResponder-DeNb6G9B.js";import"./useOverlayTriggerState-BYgfFe2E.js";import"./DismissButton-CHPXrp-u.js";import"./useLocalizedStringFormatter-DFsWMtKh.js";import"./VisuallyHidden-D7lLJ2nJ.js";import"./Text-CbyHDQDf.js";import"./useMenuTriggerState-B7a2_mPk.js";import"./useMenuTrigger-D5KXjPDc.js";import"./Button-BQtEY08a.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-Jy9lW0Qq.js";import"./chevron-right-CjCwHShF.js";const wr={component:x,title:"Components/Dropdown",args:{title:"Meny",children:["Ett","Två","Tre"].map((r,i)=>p.jsx(f,{children:p.jsx(v,{variant:"tertiary",children:r})},"dropdown_"+i))}},t={},o={play:async({canvas:r,step:i,args:{title:g}})=>{await i("It should render successfully",async()=>{const w=r.getByText(g);await h.click(w),T(r).toBeTruthy()})}},e={args:{title:void 0,label:"Meny"}};var m,s,a;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const xr=["Primary","Open","WithoutTitle"];export{o as Open,t as Primary,e as WithoutTitle,xr as __namedExportsOrder,wr as default};
