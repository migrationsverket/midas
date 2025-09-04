import{j as a}from"./iframe-BgGSr3K9.js";import{T as o,a as i,s as D}from"./Tag-M5DX0c_P.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DKTJJV9b.js";import"./utils-BglIC_rW.js";import"./clsx-B-dksMZM.js";import"./Hidden-C5ULyG2X.js";import"./useFocusRing-Di-sLADZ.js";import"./index-DAX2rtmX.js";import"./index-Dhrh99ow.js";import"./useLabels-DFwzQpFb.js";import"./useButton-TGrZL-vQ.js";import"./Collection-CMTSYzh_.js";import"./index-DLHOcE1d.js";import"./ListBox-DRNA9H_X.js";import"./DragAndDrop-Dk7uJ4PP.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-zN3Co3BY.js";import"./SelectionManager-B2G1LYeX.js";import"./useEvent-ByIkBMK7.js";import"./FocusScope-Bmg4IhV2.js";import"./useDescription-CLv110e1.js";import"./useControlledState-CVOTM-Ne.js";import"./ListKeyboardDelegate-BND_-O8S.js";import"./Text-BPup9exC.js";import"./inertValue-DkocqsIs.js";import"./useListState-hUSEd7uf.js";import"./useHighlightSelectionDescription-DUmkI4f_.js";import"./useUpdateEffect-Cxa9XyIy.js";import"./useLocalizedStringFormatter-Cp-CECAR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B9UNn6VB.js";import"./useField-CpEwYLWP.js";import"./Button-CH-hiM1s.js";import"./Button.module-DgYkWG2o.js";import"./x-CUEg6Eu5.js";import"./createLucideIcon-BZRWKq7f.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
