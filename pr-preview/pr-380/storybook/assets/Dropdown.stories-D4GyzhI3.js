import{j as p}from"./jsx-runtime-DtgEGaVE.js";import{D as x,a as f}from"./Dropdown-pJKF3Cb3.js";import{u as h,e as T}from"./index-DtSMq7G1.js";import{L as v}from"./LinkButton-hgMxAEBC.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-DvGj8Lch.js";import"./Button-uO1JGISi.js";import"./utils-Cd6MiihZ.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-DNnV_wJ6.js";import"./Label-CkQlERdq.js";import"./Hidden-lswqw32w.js";import"./useFocusRing-HKeWiXpl.js";import"./index-cpIEhwLo.js";import"./context-BSqmORe6.js";import"./LiveAnnouncer-A-XV3aHJ.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-EUTjSIyA.js";import"./Collection-O4Gi1PSO.js";import"./index-DwWe6W7f.js";import"./Separator-BAiZ62s6.js";import"./SelectionManager-6a3fudD6.js";import"./useEvent-Yxrkvbn7.js";import"./scrollIntoView-CnTD5aJz.js";import"./FocusScope-C97GJsIb.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DayiplM_.js";import"./useCollator-C3PRVItH.js";import"./Text-BkowhAon.js";import"./useOverlayTriggerState-CIPnKd-A.js";import"./PressResponder-B4q3Hpl9.js";import"./useMenuTriggerState-DfrN39jX.js";import"./useLocalizedStringFormatter-CIgGmZTI.js";import"./VisuallyHidden-I9LV86QJ.js";import"./getScrollParent-2-PurW9V.js";import"./Button-D9mPwvHL.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-CNT1urSD.js";import"./chevron-right-CjCwHShF.js";const nr={component:x,title:"Components/Dropdown",args:{title:"Meny",children:["Ett","Två","Tre"].map((r,i)=>p.jsx(f,{children:p.jsx(v,{variant:"tertiary",children:r})},"dropdown_"+i))}},t={},o={play:async({canvas:r,step:i,args:{title:g}})=>{await i("It should render successfully",async()=>{const w=r.getByText(g);await h.click(w),T(r).toBeTruthy()})}},e={args:{title:void 0,label:"Meny"}};var s,a,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
