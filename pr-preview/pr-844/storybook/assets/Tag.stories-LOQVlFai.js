import{j as a}from"./iframe-Cpwkumau.js";import{T as o,a as i,s as D}from"./Tag-BUs2wzdD.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CkyiEfJf.js";import"./utils-DfgdEjxQ.js";import"./clsx-B-dksMZM.js";import"./Hidden-DRHj-S32.js";import"./useFocusRing-YjGssfTG.js";import"./index-ILE7Avvq.js";import"./index-TqA6xpMC.js";import"./useLabels-B2EWiIbe.js";import"./useButton-DHQaZTl-.js";import"./Collection-BGq0VmjG.js";import"./index-CWmYE9F4.js";import"./ListBox-3bpEOFAH.js";import"./DragAndDrop-Bl0Cf-Dg.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CLX7s_f5.js";import"./SelectionManager-B2BVjUuX.js";import"./useEvent-CQv1OMFj.js";import"./FocusScope-Dn5sM8Ml.js";import"./useDescription-BRq1ACY4.js";import"./useControlledState-NLjVUBzn.js";import"./context-DgEiyG3Q.js";import"./Text-DeYF9RGV.js";import"./inertValue-Clg2WzQ-.js";import"./useListState-DnI43_YU.js";import"./useHighlightSelectionDescription-C0Uicjau.js";import"./useUpdateEffect-DWCB93HZ.js";import"./useLocalizedStringFormatter-arbMHoXv.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-_VP76nai.js";import"./useField-DLFc6mXH.js";import"./Button-CE2_43S9.js";import"./Button.module-DRhvPh0f.js";import"./x-Cgw_uJM8.js";import"./createLucideIcon-DCJPz7OW.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args: {
      className
    }
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByTestId(testID)).toHaveClass(styles.tag, className as string);
    });
  }
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const is=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,is as __namedExportsOrder,os as default};
