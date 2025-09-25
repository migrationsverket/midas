import{j as a}from"./iframe-C1dx_r-l.js";import{T as o,a as i,s as D}from"./Tag-BmUkoIuR.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-0dt2Ocxg.js";import"./utils-C0mmULq9.js";import"./clsx-B-dksMZM.js";import"./Hidden-NL98kK7f.js";import"./useFocusRing-C0aHwZcI.js";import"./index-DjWq9ifm.js";import"./index-CaxW-QeE.js";import"./useLabels-DZF6gE4A.js";import"./useButton-B1vt884z.js";import"./Collection-Bud2OHeY.js";import"./index-oMbMWvhV.js";import"./ListBox-DISDmKRj.js";import"./DragAndDrop-BXaBPTRQ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D_8GqjXU.js";import"./SelectionManager-BQQbRhjF.js";import"./useEvent-2jhEHfiG.js";import"./FocusScope-DB7kad7V.js";import"./useDescription-BrT4HN48.js";import"./useControlledState-CYSqO4RZ.js";import"./ListKeyboardDelegate-BWMOpcvW.js";import"./Text-ClksB_oG.js";import"./inertValue-CqOQpCBm.js";import"./useListState-C06TOrQp.js";import"./useHighlightSelectionDescription-BqlK82EM.js";import"./useUpdateEffect-Ca-SFJ5H.js";import"./useLocalizedStringFormatter-B3TGTXkS.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BkryEFuh.js";import"./useField-C6v9nWWF.js";import"./Button-CKa_cdZZ.js";import"./Button.module-DRhvPh0f.js";import"./x-Bo1gNysc.js";import"./createLucideIcon-4Png5bjA.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
