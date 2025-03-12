import{j as p}from"./jsx-runtime-DtgEGaVE.js";import{D as x,a as f}from"./Dropdown-G-sjZMCK.js";import{u as h,e as T}from"./index-DtSMq7G1.js";import{L as v}from"./LinkButton-Chv55XuF.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Collection-CrhAUUGf.js";import"./Hidden-0Xxd6rx0.js";import"./index-cpIEhwLo.js";import"./utils-DdXLQA3f.js";import"./clsx-B-dksMZM.js";import"./index-DwWe6W7f.js";import"./Separator-Bek8JbJ0.js";import"./SelectionManager-D8dA2YXE.js";import"./useFocusRing-CAIiVOBX.js";import"./useEvent-BB46z8qb.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-Q9OnV_W8.js";import"./context-BR8A0IbO.js";import"./useDescription-EqQzVjeZ.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-CsHORISF.js";import"./Dialog-Cjmp9FyO.js";import"./OverlayArrow-BGGzdKnh.js";import"./Button-BhwOwugC.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-C2jS3Qdx.js";import"./RSPContexts-CeCCo7XS.js";import"./useDialog-84x-blKf.js";import"./getScrollParent-CrrBdd7g.js";import"./PressResponder-BQj9d-QJ.js";import"./useOverlayTriggerState-Md-KFT5u.js";import"./DismissButton-Bk1YbeAq.js";import"./useLabels-BlWvxUw7.js";import"./useLocalizedStringFormatter-CrofGC5X.js";import"./VisuallyHidden-DZK_6M_C.js";import"./Text-CV6Bluw9.js";import"./useMenuTriggerState-DfJNuByF.js";import"./useMenuTrigger-C3vaOOyP.js";import"./Button-DzyrwY1f.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-Bcvh8UPc.js";import"./chevron-right-CjCwHShF.js";const lr={component:x,title:"Components/Dropdown",args:{title:"Meny",children:["Ett","Två","Tre"].map((r,i)=>p.jsx(f,{children:p.jsx(v,{variant:"tertiary",children:r})},"dropdown_"+i))}},t={},o={play:async({canvas:r,step:i,args:{title:g}})=>{await i("It should render successfully",async()=>{const w=r.getByText(g);await h.click(w),T(r).toBeTruthy()})}},e={args:{title:void 0,label:"Meny"}};var s,a,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(a=t.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const ur=["Primary","Open","WithoutTitle"];export{o as Open,t as Primary,e as WithoutTitle,ur as __namedExportsOrder,lr as default};
