import{j as p}from"./jsx-runtime-DtgEGaVE.js";import{D as x,a as f}from"./Dropdown-DjMPHPkf.js";import{u as h,e as T}from"./index-DtSMq7G1.js";import{L as v}from"./LinkButton-C4gDvs3-.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-h6La_Iva.js";import"./Button-BpxGj6Q-.js";import"./utils-B5vVULSi.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-C-2ZZqws.js";import"./Label-DK2CQORK.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-XbSNQJBa.js";import"./context-B5OQOlVG.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-CCvsZXnc.js";import"./useFocusRing-HUlwicEq.js";import"./focusSafely-BIGdxh6G.js";import"./index-cpIEhwLo.js";import"./useFocusable-BvehpvqX.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-hTXX6Kkh.js";import"./Collection-BD1J50_p.js";import"./index-DwWe6W7f.js";import"./Separator-CmdsbzTX.js";import"./SelectionManager-DETXSFCn.js";import"./useEvent--bAfsHDR.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-BL8QXNsc.js";import"./useDescription-C_qiR2pz.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-Cq1FbvDu.js";import"./useCollator-DECUsGSp.js";import"./Text-BfWS687k.js";import"./useOverlayTriggerState-DbYVf9U3.js";import"./PressResponder-DKUfvrhW.js";import"./useMenuTriggerState-BhcCcOu7.js";import"./useLocalizedStringFormatter-BsPioxkm.js";import"./VisuallyHidden-CqNMTwdd.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-CSDEVxbu.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-CX0f8_TR.js";import"./chevron-right-CjCwHShF.js";const gr={component:x,title:"Components/Dropdown",args:{title:"Meny",children:["Ett","Två","Tre"].map((r,i)=>p.jsx(f,{children:p.jsx(v,{variant:"tertiary",children:r})},"dropdown_"+i))}},t={},o={play:async({canvas:r,step:i,args:{title:g}})=>{await i("It should render successfully",async()=>{const w=r.getByText(g);await h.click(w),T(r).toBeTruthy()})}},e={args:{title:void 0,label:"Meny"}};var m,s,a;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const wr=["Primary","Open","WithoutTitle"];export{o as Open,t as Primary,e as WithoutTitle,wr as __namedExportsOrder,gr as default};
