import{j as a}from"./iframe-DFe88I25.js";import{T as o,a as i,s as D}from"./Tag-I3nacRN7.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dy3JiKI7.js";import"./utils-CpmgRmxV.js";import"./clsx-B-dksMZM.js";import"./Hidden-CAFIwGEZ.js";import"./useFocusRing-DHRaCiAM.js";import"./index-BgW194c0.js";import"./index-BuV-u2pE.js";import"./useLabels-BAzuw1Nn.js";import"./useButton-BW2GBq1p.js";import"./Collection-B1rRq0gy.js";import"./index-Mw46Krs6.js";import"./ListBox-CpWH4g2J.js";import"./DragAndDrop-BgJ6IUf9.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-HXoEe6Ir.js";import"./SelectionManager-DZXaVEtr.js";import"./useEvent-DAmJGMS9.js";import"./FocusScope-DgP8AObJ.js";import"./useDescription-oo2Lk1t-.js";import"./useControlledState-B79KDH0t.js";import"./ListKeyboardDelegate-eX4pa9UU.js";import"./Text-BYzBuy8r.js";import"./inertValue-DGCfKYEo.js";import"./useListState-DdhLTQsk.js";import"./useHighlightSelectionDescription-DPOotATj.js";import"./useUpdateEffect-lPKkAaL7.js";import"./useLocalizedStringFormatter-CfPaRvbp.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B-SBCnmj.js";import"./useField-BVDZUlQE.js";import"./Button-aqcHqZJU.js";import"./Button.module-DRhvPh0f.js";import"./x-D88fJr9C.js";import"./createLucideIcon-BVWsSi4d.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
