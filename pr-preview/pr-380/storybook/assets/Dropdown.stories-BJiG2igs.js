import{j as p}from"./jsx-runtime-DtgEGaVE.js";import{D as x,a as f}from"./Dropdown-Bh4trMY9.js";import{u as h,e as T}from"./index-DtSMq7G1.js";import{L as v}from"./LinkButton-vahW50VB.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-6rGhS6Q5.js";import"./Button-CTiZg4rz.js";import"./utils-fGMpyvF6.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-qio85TVe.js";import"./Label-C7YJVz0K.js";import"./Hidden-lswqw32w.js";import"./useFocusRing-D234eI5d.js";import"./index-cpIEhwLo.js";import"./context-gwlhO1hg.js";import"./LiveAnnouncer-A-XV3aHJ.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-CXQgvVpK.js";import"./Collection-8zswMZr2.js";import"./index-DwWe6W7f.js";import"./Separator-Dru5Rsd-.js";import"./SelectionManager-CpQyjLx-.js";import"./useEvent-Ou8lCwV4.js";import"./scrollIntoView-Br2KMoz-.js";import"./FocusScope-BTvUdKNZ.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-Cy2OSJKs.js";import"./useCollator-BwOLflG5.js";import"./Text-CLHHKsvT.js";import"./useOverlayTriggerState-DwxlxUpQ.js";import"./PressResponder-D2hyN4Xm.js";import"./useMenuTriggerState-upCXLjC-.js";import"./useLocalizedStringFormatter-D7bE6AYj.js";import"./VisuallyHidden-CIX9y9is.js";import"./getScrollParent-DaqmRUg6.js";import"./Button-5WUfYGbD.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-BCkl6c_C.js";import"./chevron-right-CjCwHShF.js";const nr={component:x,title:"Components/Dropdown",args:{title:"Meny",children:["Ett","Två","Tre"].map((r,i)=>p.jsx(f,{children:p.jsx(v,{variant:"tertiary",children:r})},"dropdown_"+i))}},t={},o={play:async({canvas:r,step:i,args:{title:g}})=>{await i("It should render successfully",async()=>{const w=r.getByText(g);await h.click(w),T(r).toBeTruthy()})}},e={args:{title:void 0,label:"Meny"}};var s,a,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
