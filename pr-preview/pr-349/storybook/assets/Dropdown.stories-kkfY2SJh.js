import{j as p}from"./jsx-runtime-DtgEGaVE.js";import{D as x,a as f}from"./Dropdown-BsXo8eal.js";import{u as h,e as T}from"./index-DtSMq7G1.js";import{L as v}from"./LinkButton--tozfHIV.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Collection-Ckq42TFD.js";import"./Hidden-DrRnqvCY.js";import"./index-cpIEhwLo.js";import"./utils-BhWkjeqE.js";import"./clsx-B-dksMZM.js";import"./index-DwWe6W7f.js";import"./Separator-BvAxnSk2.js";import"./SelectionManager-DZBNrpX9.js";import"./useFocusRing-BFo6eXxS.js";import"./useEvent-F7Njpygl.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-CVReLJeH.js";import"./context-DKkYq9qZ.js";import"./useDescription-Dtl9HSnp.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-DojbmfC0.js";import"./Dialog-1m63WSm2.js";import"./OverlayArrow-DFEs6rvZ.js";import"./Button-Db7Kwb_W.js";import"./ProgressBar-KG041EEs.js";import"./Label-BBCc9K7K.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-CH4xJhfw.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-CsLSqN_1.js";import"./RSPContexts-CeCCo7XS.js";import"./useDialog-CBeAzFYn.js";import"./getScrollParent-CrrBdd7g.js";import"./PressResponder-Drl0S6l1.js";import"./useOverlayTriggerState-MBiwFMwk.js";import"./DismissButton-B1Ad_hU1.js";import"./useLocalizedStringFormatter-CbwlXzSd.js";import"./VisuallyHidden-BrRgg-ml.js";import"./Text-BpXRIGMg.js";import"./useMenuTriggerState-DujQagz6.js";import"./useMenuTrigger-CKHyFUvM.js";import"./Button-CfiRUfWi.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-C5oG_EtD.js";import"./chevron-right-CjCwHShF.js";const wr={component:x,title:"Components/Dropdown",args:{title:"Meny",children:["Ett","Två","Tre"].map((r,i)=>p.jsx(f,{children:p.jsx(v,{variant:"tertiary",children:r})},"dropdown_"+i))}},t={},o={play:async({canvas:r,step:i,args:{title:g}})=>{await i("It should render successfully",async()=>{const w=r.getByText(g);await h.click(w),T(r).toBeTruthy()})}},e={args:{title:void 0,label:"Meny"}};var m,s,a;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
