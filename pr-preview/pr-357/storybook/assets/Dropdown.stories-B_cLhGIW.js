import{j as p}from"./jsx-runtime-CBDCb4rg.js";import{D as x,a as h}from"./Dropdown-Mv-9xLdM.js";import{u as f,e as T}from"./index-iZ8NAl3x.js";import{L as v}from"./LinkButton-CTJxApoy.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Collection-KpeOqn_K.js";import"./Hidden-B6il94lO.js";import"./index-BAyGJXOV.js";import"./useFocusable-CqLabGgp.js";import"./useFocusRing-BODiw1iP.js";import"./utils-CyugoGNF.js";import"./clsx-B-dksMZM.js";import"./index-Btf1eDe9.js";import"./Separator-DuTifGF-.js";import"./SelectionManager-DRxs2Bqi.js";import"./useEvent-DrHgLB5Q.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Ded37Rd9.js";import"./context-BwmME58u.js";import"./useDescription-DZZa8B5b.js";import"./useControlledState-BgxdDqm0.js";import"./ListKeyboardDelegate-SnKTO46q.js";import"./useCollator-B0i4hO_n.js";import"./Dialog-BO8Dfov-.js";import"./OverlayArrow-CBK1XRIu.js";import"./Button-iL9IzHG8.js";import"./ProgressBar-B2jw0c1b.js";import"./Label-ByRA_SKm.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DbJIstGE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./RSPContexts-BT50PPhj.js";import"./useDialog-BgtKtjEq.js";import"./getScrollParent-CvodOSaS.js";import"./PressResponder-BjRG4CYk.js";import"./useOverlayTriggerState-_3rNuFLY.js";import"./DismissButton-BaTbkvC9.js";import"./useLocalizedStringFormatter-B6l6yPuV.js";import"./VisuallyHidden-Cx1OydyR.js";import"./Text-DnyJpj_W.js";import"./useMenuTriggerState-BHyXXjL7.js";import"./useMenuTrigger-Ch8czL2s.js";import"./Button-BUv4L4FB.js";import"./createLucideIcon-DjmUzaoT.js";import"./Link-E7kAh6Yo.js";import"./chevron-right-DAk5v0C9.js";const wr={component:x,title:"Components/Dropdown",args:{title:"Meny",children:["Ett","Två","Tre"].map((r,i)=>p.jsx(h,{children:p.jsx(v,{variant:"tertiary",children:r})},"dropdown_"+i))}},t={},o={play:async({canvas:r,step:i,args:{title:g}})=>{await i("It should render successfully",async()=>{const w=r.getByText(g);await f.click(w),T(r).toBeTruthy()})}},e={args:{title:void 0,label:"Meny"}};var m,s,a;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
