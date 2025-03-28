import{j as p}from"./jsx-runtime-DtgEGaVE.js";import{D as x,a as f}from"./Dropdown-C_U6O1Di.js";import{u as h,e as T}from"./index-DtSMq7G1.js";import{L as v}from"./LinkButton-CYy4lsOF.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-C9rfyFGH.js";import"./Button-C6oo4-9j.js";import"./utils-fGMpyvF6.js";import"./clsx-B-dksMZM.js";import"./ProgressBar--YvcVoO5.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";import"./useFocusRing-CklmaPa3.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cn0G9B-O.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-CXQgvVpK.js";import"./Collection-BgAVdhih.js";import"./index-DwWe6W7f.js";import"./Separator-CD6mMu3N.js";import"./SelectionManager-DBzMVJ3_.js";import"./useEvent-Ou8lCwV4.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-CWlvLRaT.js";import"./useDescription-DtBV7V9R.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-BT2IGCyv.js";import"./useCollator-BwOLflG5.js";import"./Text-CLHHKsvT.js";import"./useOverlayTriggerState-Cqt2HN1Y.js";import"./PressResponder-DX2GyaXr.js";import"./useMenuTriggerState-DQqQ1s0l.js";import"./useLocalizedStringFormatter-D7bE6AYj.js";import"./VisuallyHidden-9izUKr4W.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-BzhOJ1ec.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-BOzytOmX.js";import"./chevron-right-CjCwHShF.js";const yr={component:x,title:"Components/Dropdown",args:{title:"Meny",children:["Ett","Två","Tre"].map((r,i)=>p.jsx(f,{children:p.jsx(v,{variant:"tertiary",children:r})},"dropdown_"+i))}},t={},o={play:async({canvas:r,step:i,args:{title:g}})=>{await i("It should render successfully",async()=>{const w=r.getByText(g);await h.click(w),T(r).toBeTruthy()})}},e={args:{title:void 0,label:"Meny"}};var s,m,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(a=(m=t.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
