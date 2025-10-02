import{j as a}from"./iframe-BtfNkeY9.js";import{T as o,a as i,s as D}from"./Tag-Ci_d_BXt.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B8INt5cG.js";import"./utils-xIFzPSts.js";import"./clsx-B-dksMZM.js";import"./Hidden-DdMxFdeg.js";import"./useFocusRing-BPQa89YH.js";import"./index-CdZmXUP-.js";import"./index-C3iyW3PC.js";import"./useLabels-DIbejQ4G.js";import"./useButton-DmdtKZ2c.js";import"./Collection-IWrDgdCE.js";import"./index-COOKXoRz.js";import"./ListBox-DVRZj4o5.js";import"./DragAndDrop-BERcJdiK.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C6YC-l86.js";import"./SelectionManager-ByWdvebV.js";import"./useEvent-DYMBU4CW.js";import"./FocusScope-0AJ_5pbR.js";import"./useDescription-C8dFiFck.js";import"./useControlledState-DKaSZb4p.js";import"./context-Cbx4rkic.js";import"./Text-BSDuzZvQ.js";import"./inertValue-5nor-FOZ.js";import"./useListState-Z44KILYl.js";import"./useHighlightSelectionDescription-C7F17YKK.js";import"./useUpdateEffect-B0Xa5Eb8.js";import"./useLocalizedStringFormatter-Ch7LKFAY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-2NcZIN9Z.js";import"./useField-BFuFFEdS.js";import"./clsx-Ciqy0D92.js";import"./Button-C8jk05WF.js";import"./Button.module-DRhvPh0f.js";import"./x-B3-AMpDr.js";import"./createLucideIcon-jF0MZiwH.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
