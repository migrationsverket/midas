import{j as a}from"./iframe-CokMJona.js";import{T as o,a as i,s as D}from"./Tag-hpEe24Qb.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-SHBrHbVQ.js";import"./utils-DpFMpFTQ.js";import"./clsx-B-dksMZM.js";import"./Hidden-CgwiBzlW.js";import"./useFocusRing-D6CsESPl.js";import"./index-6oLJa15F.js";import"./index-NJxJDO49.js";import"./useLabels-fwQFmwcx.js";import"./useButton-BDpHuFdP.js";import"./Collection-CKG3k0YO.js";import"./index-DOS9xYt4.js";import"./ListBox-BKUJ7tWV.js";import"./DragAndDrop-pOkY2Mam.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-LMZCOn_0.js";import"./SelectionManager-DzC0Swx0.js";import"./useEvent-tyZJaR02.js";import"./FocusScope-BNKuxd3x.js";import"./useDescription-CdMCiXOR.js";import"./useControlledState-BDXieBI7.js";import"./context-BZNsGYFo.js";import"./Text-CKpu0dM-.js";import"./inertValue-8MXuh8f0.js";import"./useListState-CSRnLMVU.js";import"./useHighlightSelectionDescription-BSm9rGTE.js";import"./useUpdateEffect-LwBjRu-w.js";import"./useLocalizedStringFormatter-zEA-gUlm.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-GBv2YyD4.js";import"./useField-D_UAeNX9.js";import"./Button-HRu5sXQF.js";import"./Button.module-DRhvPh0f.js";import"./x-BNeJygIV.js";import"./createLucideIcon-fVNoeR4C.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
