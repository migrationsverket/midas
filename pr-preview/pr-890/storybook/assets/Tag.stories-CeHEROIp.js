import{j as a}from"./iframe-QMQOkqy7.js";import{T as o,a as i,s as D}from"./Tag-CLlywJs4.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BCjENko5.js";import"./utils-BAiEHHfW.js";import"./clsx-B-dksMZM.js";import"./Hidden-aJdCmUNE.js";import"./useFocusRing-3f63HxWi.js";import"./index-BssAuyxL.js";import"./index-D27tsFl4.js";import"./useLabels-DYqGyZvv.js";import"./useButton-5yRVOV4s.js";import"./Collection-BfmtebLl.js";import"./index-ISiABSvj.js";import"./ListBox-CmFM4XqA.js";import"./DragAndDrop-B00nZKyI.js";import"./getScrollParent-C4vB57gt.js";import"./scrollIntoView-BIvHZ8vP.js";import"./Separator-Bufhkhd4.js";import"./SelectionManager-C47D9CSS.js";import"./useEvent-BDkt6qkn.js";import"./SelectionIndicator-DgVvlymX.js";import"./useDescription-BA4HuvfE.js";import"./useControlledState-p0YhVlSr.js";import"./ListKeyboardDelegate-G6RBeE81.js";import"./RSPContexts-DVFkkORo.js";import"./Text-CDgd7ago.js";import"./inertValue-CQPysPk2.js";import"./useListState-z0mvMtsG.js";import"./useHighlightSelectionDescription-CY7WObIe.js";import"./useUpdateEffect-DVDvheic.js";import"./useLocalizedStringFormatter-C4BeT19Y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CjQqQo0p.js";import"./useField-DExMBizT.js";import"./clsx-Ciqy0D92.js";import"./Button-DKC-_1mU.js";import"./Button.module-CcWMkJAG.js";import"./x-Dti6unlf.js";import"./createLucideIcon-BE-SrRY7.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
