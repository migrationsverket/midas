import{j as a}from"./iframe-DrByI1Fo.js";import{T as o,a as i,s as D}from"./Tag-B_d8zwp5.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DfM26PWp.js";import"./utils-C6XZ-5EW.js";import"./clsx-B-dksMZM.js";import"./Hidden-DAcl8tHX.js";import"./useFocusRing-C4-3e4v2.js";import"./index-eIP63gSP.js";import"./index-uzwGyWJG.js";import"./useLabels-DzvbRR0Z.js";import"./useButton-BprXOfXa.js";import"./Collection-DvpnTzAP.js";import"./index-DgkQc4ss.js";import"./ListBox-CCKEyKTY.js";import"./DragAndDrop-69U_e4jw.js";import"./getScrollParent-C8ccmskU.js";import"./scrollIntoView-B_FbhFwv.js";import"./Separator-3ATD0lTh.js";import"./SelectionManager-BefHMGbf.js";import"./useEvent-df7PkkIB.js";import"./SelectionIndicator-a7U74W1s.js";import"./useDescription-Pw9Bz1Pn.js";import"./useControlledState-C11SuRRm.js";import"./ListKeyboardDelegate-DDCQaVxe.js";import"./RSPContexts-DHI0H1Qi.js";import"./Text-B9ZsOLqW.js";import"./inertValue-CDaa7mtW.js";import"./useListState-D0-FzQn3.js";import"./useHighlightSelectionDescription-BokeCFmg.js";import"./useUpdateEffect-kb822vEs.js";import"./useLocalizedStringFormatter-B0wJVnfs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B1qlHKg5.js";import"./useField-CvLly0yO.js";import"./clsx-Ciqy0D92.js";import"./Button-wOJqkAJe.js";import"./Button.module-CcWMkJAG.js";import"./x-CTrnaU6d.js";import"./createLucideIcon-4DNbp_aV.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
