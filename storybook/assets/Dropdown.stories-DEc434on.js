import{j as p}from"./jsx-runtime-DtgEGaVE.js";import{D as x,a as f}from"./Dropdown-B2pQLTYf.js";import{u as h,e as T}from"./index-DtSMq7G1.js";import{L as v}from"./LinkButton-CJwReULt.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-DSWfO_cF.js";import"./Button-BAmjpgnq.js";import"./utils-Cd6MiihZ.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-Dh0Vg3qS.js";import"./Label-Bf-bZThx.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ClMtG9eF.js";import"./context-BSqmORe6.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusRing--RQdELqC.js";import"./index-cpIEhwLo.js";import"./useFocusable-5VAxOUE-.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-EUTjSIyA.js";import"./Collection-CC9oGC21.js";import"./index-DwWe6W7f.js";import"./Separator-Q6oUd1rz.js";import"./SelectionManager-DeX5238t.js";import"./useEvent-Yxrkvbn7.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-B7ZOkgD-.js";import"./useDescription-CVNFK32G.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-xVJLa59h.js";import"./useCollator-C3PRVItH.js";import"./Text-BkowhAon.js";import"./useOverlayTriggerState-CykkZ-dk.js";import"./PressResponder-D2AeFdqt.js";import"./useMenuTriggerState-VaHMadTP.js";import"./useLocalizedStringFormatter-CIgGmZTI.js";import"./VisuallyHidden-DRXW-gYG.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-BProIL2o.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-CThmA5LA.js";import"./chevron-right-CjCwHShF.js";const ur={component:x,title:"Components/Dropdown",args:{title:"Meny",children:["Ett","Två","Tre"].map((r,i)=>p.jsx(f,{children:p.jsx(v,{variant:"tertiary",children:r})},"dropdown_"+i))}},t={},o={play:async({canvas:r,step:i,args:{title:g}})=>{await i("It should render successfully",async()=>{const w=r.getByText(g);await h.click(w),T(r).toBeTruthy()})}},e={args:{title:void 0,label:"Meny"}};var s,a,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(a=t.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const yr=["Primary","Open","WithoutTitle"];export{o as Open,t as Primary,e as WithoutTitle,yr as __namedExportsOrder,ur as default};
