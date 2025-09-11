import{j as a}from"./iframe-6kR8eHpD.js";import{T as o,a as i,s as D}from"./Tag-jn1jP6ao.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-jE1vq0Nf.js";import"./utils-BU0KR_Qg.js";import"./clsx-B-dksMZM.js";import"./Hidden-B7uA2et1.js";import"./useFocusRing-CVX8pjca.js";import"./index-CEkkCea0.js";import"./index-DrWizIAa.js";import"./useLabels-CAboHXav.js";import"./useButton-CdQchexc.js";import"./Collection-BFMscoAj.js";import"./index-B313nEwj.js";import"./ListBox-g08Nj56B.js";import"./DragAndDrop-BKLRHx-0.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-ChCHAC8W.js";import"./SelectionManager-CgPVK2CB.js";import"./useEvent-Dk2gq8To.js";import"./FocusScope-ITqcbBc6.js";import"./useDescription-BaDhLGrh.js";import"./useControlledState-9u-FhgOR.js";import"./ListKeyboardDelegate--Zw8v9gp.js";import"./Text-DAio3mlt.js";import"./inertValue-DWDkZC0v.js";import"./useListState-BfFWj7M6.js";import"./useHighlightSelectionDescription-BXZaEnOi.js";import"./useUpdateEffect-QSZ0wiH3.js";import"./useLocalizedStringFormatter-BQFDwTqy.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CwErCfYu.js";import"./useField-VDOvkgsi.js";import"./Button-DeDNO-hI.js";import"./Button.module-DRhvPh0f.js";import"./x-DfYXBDa8.js";import"./createLucideIcon-LlwGfR2t.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
