import{j as p}from"./jsx-runtime-DtgEGaVE.js";import{D as x,a as f}from"./Dropdown-hTQDvsp0.js";import{u as h,e as T}from"./index-DtSMq7G1.js";import{L as v}from"./LinkButton-caGvv0mx.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Collection-B3BuMPYM.js";import"./Hidden-DizQ9ce0.js";import"./index-cpIEhwLo.js";import"./useFocusable-ByeJrHLx.js";import"./focusSafely-CCsE9NOP.js";import"./utils-BYZtxgnE.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-BVR65GV4.js";import"./index-DwWe6W7f.js";import"./Separator-CcSwDo7v.js";import"./SelectionManager-BjEm6zKp.js";import"./usePress-DcG3_cox.js";import"./useEvent-CYKx4DfG.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-Cto1rr90.js";import"./context-DlPnyEqv.js";import"./useDescription-BK8-bxoY.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-CMNZAwbS.js";import"./useCollator-CdnSoI7T.js";import"./Dialog-B4UtpVXu.js";import"./OverlayArrow-YvpX_abK.js";import"./Button-B2aR51FI.js";import"./ProgressBar-Ce7Ytruc.js";import"./Label-B20XR-5d.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D0L8qOPf.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./RSPContexts-CeCCo7XS.js";import"./useDialog-BbdbZt-j.js";import"./getScrollParent-CrrBdd7g.js";import"./PressResponder-NcrRXaRp.js";import"./useOverlayTriggerState-BfOBJM5F.js";import"./DismissButton-Gx2e4RHd.js";import"./useLocalizedStringFormatter-CYf1eOAG.js";import"./VisuallyHidden-CQ87MyWU.js";import"./Text-DGqKDvoY.js";import"./useMenuTriggerState-CkPUiTEn.js";import"./useMenuTrigger-Dp1uffK3.js";import"./Button-B2hgcsAr.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-BFDdUIov.js";import"./chevron-right-CjCwHShF.js";const fr={component:x,title:"Components/Dropdown",args:{title:"Meny",children:["Ett","Två","Tre"].map((r,i)=>p.jsx(f,{children:p.jsx(v,{variant:"tertiary",children:r})},"dropdown_"+i))}},t={},o={play:async({canvas:r,step:i,args:{title:g}})=>{await i("It should render successfully",async()=>{const w=r.getByText(g);await h.click(w),T(r).toBeTruthy()})}},e={args:{title:void 0,label:"Meny"}};var m,s,a;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const hr=["Primary","Open","WithoutTitle"];export{o as Open,t as Primary,e as WithoutTitle,hr as __namedExportsOrder,fr as default};
