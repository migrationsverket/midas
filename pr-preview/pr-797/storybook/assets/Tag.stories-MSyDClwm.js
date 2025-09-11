import{j as a}from"./iframe-vQrmgTAQ.js";import{T as o,a as i,s as D}from"./Tag-DOGDmV80.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CxTIL29R.js";import"./utils-D8WysR_x.js";import"./clsx-B-dksMZM.js";import"./Hidden-C7D0bVtO.js";import"./useFocusRing-BFc0rOrk.js";import"./index-Ufdw3RD1.js";import"./index-nyzGlKi4.js";import"./useLabels-DEaz2-3E.js";import"./useButton-E8LTOzWx.js";import"./Collection-DgVQzELH.js";import"./index-BQ2wjSGw.js";import"./ListBox-TMBs3Bv7.js";import"./DragAndDrop-Cbl0Ikve.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D0muiThX.js";import"./SelectionManager-bf7y9FCV.js";import"./useEvent-BG9ZMTZI.js";import"./FocusScope-LLx-vEbG.js";import"./useDescription-BmmfMCFN.js";import"./useControlledState-CTr2hxYv.js";import"./ListKeyboardDelegate-DQojn3GV.js";import"./Text-eGo38c2j.js";import"./inertValue-C3lH-nEc.js";import"./useListState-B-yef5BL.js";import"./useHighlightSelectionDescription-lFxe-eV_.js";import"./useUpdateEffect-tm8cHGyM.js";import"./useLocalizedStringFormatter-CYEsTogg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Ciz_YqAv.js";import"./useField-DJO3FtUW.js";import"./Button-79ORwupd.js";import"./Button.module-DRhvPh0f.js";import"./x-BF61-fUf.js";import"./createLucideIcon-BjT-z5cK.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
