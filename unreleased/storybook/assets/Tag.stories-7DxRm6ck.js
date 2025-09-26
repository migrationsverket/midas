import{j as a}from"./iframe-D-6Ee-mj.js";import{T as o,a as i,s as D}from"./Tag-eJXhtOg8.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CXhFpVHn.js";import"./utils-D0287Tj-.js";import"./clsx-B-dksMZM.js";import"./Hidden-ukiW7aCT.js";import"./useFocusRing-D-d0SP0_.js";import"./index-DqbntyF3.js";import"./index-BQc5UCFG.js";import"./useLabels-Dxg2U4yU.js";import"./useButton-B2jxm0A0.js";import"./Collection-PzsbAZ3H.js";import"./index-gCaAS7no.js";import"./ListBox-6H8ZC4zK.js";import"./DragAndDrop-BPFAS51n.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CcEw3Ts4.js";import"./SelectionManager-NdV2yHAd.js";import"./useEvent-CYPwAjyo.js";import"./FocusScope-C6vnceNE.js";import"./useDescription-scTUE-ik.js";import"./useControlledState-BqYE3lBx.js";import"./ListKeyboardDelegate-DL7vkNk-.js";import"./Text-DW9EioPM.js";import"./inertValue-CnAHwqwn.js";import"./useListState-BW-Oxa5B.js";import"./useHighlightSelectionDescription-C3lZ1jIZ.js";import"./useUpdateEffect-tHvha14e.js";import"./useLocalizedStringFormatter-DjV8vvcP.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-pgqtechk.js";import"./useField-CU8N3M29.js";import"./Button-kSrNEEPZ.js";import"./Button.module-DRhvPh0f.js";import"./x-CJgno1Y7.js";import"./createLucideIcon-2JKKFR2D.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
