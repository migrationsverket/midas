import{j as a}from"./iframe-Ci4NZA99.js";import{T as o,a as i,s as D}from"./Tag-V4KlBiSt.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BSMhS2UE.js";import"./utils-DjAdypCy.js";import"./clsx-B-dksMZM.js";import"./Hidden-BQ2OGkZW.js";import"./useFocusRing-DrCuVhYe.js";import"./index-D4Ulq7If.js";import"./index-CoPMXw3s.js";import"./useLabels-3JWFU4Un.js";import"./useButton-Bw4LAj-z.js";import"./Collection-RZdu8yKz.js";import"./index-DB2rix4G.js";import"./ListBox-HNDbWKBU.js";import"./DragAndDrop-BRZokPtM.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D7GYH5Ty.js";import"./SelectionManager-CjaVbFmB.js";import"./useEvent-CtA5-cDQ.js";import"./FocusScope-BQAEJnYZ.js";import"./useDescription-CoGMsbLE.js";import"./useControlledState-4BcIVwyT.js";import"./ListKeyboardDelegate-CW0AttjC.js";import"./Text-BjJj8LPc.js";import"./inertValue-BMGbaba6.js";import"./useListState-xl6qGH0v.js";import"./useHighlightSelectionDescription-D_07jrgT.js";import"./useUpdateEffect-C2gUk53f.js";import"./useLocalizedStringFormatter-Ce95FZ28.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BG23fS84.js";import"./useField-Cq7YL-AK.js";import"./Button-wQOz68wO.js";import"./Button.module-CF2bVDCq.js";import"./x-PI9Sh5ki.js";import"./createLucideIcon-DdWSUP-r.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
