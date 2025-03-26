import{j as p}from"./jsx-runtime-DtgEGaVE.js";import{D as x,a as f}from"./Dropdown-iSp4e5nC.js";import{u as h,e as T}from"./index-DtSMq7G1.js";import{L as v}from"./LinkButton-CKM-Iqp4.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-BIyqDwxn.js";import"./Button-DUGs8NtW.js";import"./utils-Cd6MiihZ.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-Cgq2ntZX.js";import"./Label-DO1wrnkN.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ClMtG9eF.js";import"./context-BSqmORe6.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-CxawRSCB.js";import"./useFocusRing-Cfn9yE2V.js";import"./index-cpIEhwLo.js";import"./useFocusable-Pg9COOaT.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-EUTjSIyA.js";import"./Collection-BkzVmqwu.js";import"./index-DwWe6W7f.js";import"./Separator-DX2iIcbV.js";import"./SelectionManager-DMsC2Nqq.js";import"./useEvent-Yxrkvbn7.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-ev4Wrgqm.js";import"./useDescription-CVNFK32G.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-XaxibD-Q.js";import"./useCollator-C3PRVItH.js";import"./Text-BkowhAon.js";import"./useOverlayTriggerState-t8ZnfIQ2.js";import"./PressResponder-C2hOqYuH.js";import"./useMenuTriggerState-RNbqQ6qa.js";import"./useLocalizedStringFormatter-CIgGmZTI.js";import"./VisuallyHidden-8sUOS89X.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-BK_vAUHg.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-CYIIWBMp.js";import"./chevron-right-CjCwHShF.js";const yr={component:x,title:"Components/Dropdown",args:{title:"Meny",children:["Ett","Två","Tre"].map((r,i)=>p.jsx(f,{children:p.jsx(v,{variant:"tertiary",children:r})},"dropdown_"+i))}},t={},o={play:async({canvas:r,step:i,args:{title:g}})=>{await i("It should render successfully",async()=>{const w=r.getByText(g);await h.click(w),T(r).toBeTruthy()})}},e={args:{title:void 0,label:"Meny"}};var s,m,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(a=(m=t.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const gr=["Primary","Open","WithoutTitle"];export{o as Open,t as Primary,e as WithoutTitle,gr as __namedExportsOrder,yr as default};
