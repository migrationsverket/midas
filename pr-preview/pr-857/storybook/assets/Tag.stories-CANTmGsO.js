import{j as a}from"./iframe-D3PfyZNe.js";import{T as o,a as i,s as D}from"./Tag-BkLMq4EE.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DB5oMccf.js";import"./utils-DPUKkF7v.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dbj5eYQj.js";import"./useFocusRing-DklO5eqR.js";import"./index-ByuCcRAk.js";import"./index-C686sUUv.js";import"./useLabels-CuY5J46V.js";import"./useButton-CSLsA9QK.js";import"./Collection-DObDVOFJ.js";import"./index-Q11wvubN.js";import"./ListBox-UVei2KlO.js";import"./DragAndDrop-CC2THgSz.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CNCxAqEJ.js";import"./SelectionManager-BfaftbSM.js";import"./useEvent-CMzKP17O.js";import"./FocusScope-C8cvUpjA.js";import"./useDescription-Ce8ke93E.js";import"./useControlledState-aEsv7mqw.js";import"./context-DdecLOzd.js";import"./Text-CXwkQd2y.js";import"./inertValue-DrxDfTWd.js";import"./useListState-CKudCIj2.js";import"./useHighlightSelectionDescription-DBzgIFfP.js";import"./useUpdateEffect-CLHrSXeF.js";import"./useLocalizedStringFormatter-CvKjRlby.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Dei_ISzg.js";import"./useField-BicstmF6.js";import"./clsx-Ciqy0D92.js";import"./Button-_vSA_swA.js";import"./Button.module-DRhvPh0f.js";import"./x-a_1e5u6l.js";import"./createLucideIcon-BB4Teidf.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
