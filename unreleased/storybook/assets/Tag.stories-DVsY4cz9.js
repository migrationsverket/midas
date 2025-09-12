import{j as a}from"./iframe-CbTVKlrM.js";import{T as o,a as i,s as D}from"./Tag-CP6QVhqr.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DYJgceXV.js";import"./utils-B78ZQ9jU.js";import"./clsx-B-dksMZM.js";import"./Hidden-DS6XKPBQ.js";import"./useFocusRing-B8D8Kj8C.js";import"./index-BYggPT-v.js";import"./index-C1xxyhss.js";import"./useLabels-CTxxc85q.js";import"./useButton-DFCYR89s.js";import"./Collection-w7rCYQEe.js";import"./index-GwWmos2-.js";import"./ListBox-7wTabtp5.js";import"./DragAndDrop-BxqmtOB3.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CIa2SEX0.js";import"./SelectionManager-Cpcu5_q4.js";import"./useEvent-B4c8w1bA.js";import"./FocusScope-CG3xmRj2.js";import"./useDescription-DbGn56L1.js";import"./useControlledState-DucSu0MB.js";import"./ListKeyboardDelegate-BG_bS7N5.js";import"./Text-B93xikJQ.js";import"./inertValue-BeLyJT5m.js";import"./useListState-D1p8uK9P.js";import"./useHighlightSelectionDescription-CWxYWC-_.js";import"./useUpdateEffect-MyM-QsoD.js";import"./useLocalizedStringFormatter-Cg6b2S43.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DfGISDUw.js";import"./useField-DPaCP4jj.js";import"./Button-BFy4xxeV.js";import"./Button.module-DRhvPh0f.js";import"./x-OyRb_6Z2.js";import"./createLucideIcon-BsSM_OJ4.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
