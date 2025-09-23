import{j as a}from"./iframe-IGdG228X.js";import{T as o,a as i,s as D}from"./Tag-Ty3zK8Fw.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C1xVWIxn.js";import"./utils-DSJJDvIy.js";import"./clsx-B-dksMZM.js";import"./Hidden-DEpiM9Th.js";import"./useFocusRing-DOMCfIHN.js";import"./index-DiDkhsVB.js";import"./index-Ba_FZY4d.js";import"./useLabels-BhhiaI26.js";import"./useButton-D-TQlYJ5.js";import"./Collection-BvTDcZ_s.js";import"./index-BZuCjxk9.js";import"./ListBox-CbdRseZB.js";import"./DragAndDrop-C4PujY2c.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BZFMuQbo.js";import"./SelectionManager-C5zEdJr0.js";import"./useEvent-Ct2dZahR.js";import"./FocusScope-DDrQ6azI.js";import"./useDescription-YfrfWKOX.js";import"./useControlledState-BRuFmj6y.js";import"./ListKeyboardDelegate-CBkFgjWl.js";import"./Text-u7mfl6S-.js";import"./inertValue-IgLvr_kK.js";import"./useListState-CLo8R_8p.js";import"./useHighlightSelectionDescription-CpdnnXYY.js";import"./useUpdateEffect-TOVGVHai.js";import"./useLocalizedStringFormatter-BjVI0MCZ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C1dzIlTV.js";import"./useField-Dxq7kqy_.js";import"./Button-Ct9cv0Xs.js";import"./Button.module-DRhvPh0f.js";import"./x-et0ZkHQH.js";import"./createLucideIcon-CxV_sK90.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
