import{j as a}from"./iframe-BU53sE-N.js";import{T as o,a as i,s as D}from"./Tag-C38zEE2G.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B8eh5HY-.js";import"./utils-C9i0YxUP.js";import"./clsx-B-dksMZM.js";import"./Hidden-W2Njm2EX.js";import"./useFocusRing-DLwvtO9t.js";import"./index-BihbO0F1.js";import"./index-pWWOd32h.js";import"./useLabels-CZCRL6Ty.js";import"./useButton-J7Eoea10.js";import"./Collection-BcriK5Ga.js";import"./index-Vpx1L_8L.js";import"./ListBox-0rmkLv4J.js";import"./DragAndDrop-BKrors4-.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BKFhBQN7.js";import"./SelectionManager-k7bdnZhh.js";import"./useEvent-DhJuciYr.js";import"./FocusScope-DGCwzhDd.js";import"./useDescription-Dls17rAJ.js";import"./useControlledState-DsTaOXyj.js";import"./context-DT7Jquag.js";import"./Text-B9zZV3bJ.js";import"./inertValue-CKEU99Ww.js";import"./useListState-BhvX-VMA.js";import"./useHighlightSelectionDescription-CMRuFQFe.js";import"./useUpdateEffect-OkGF1KNn.js";import"./useLocalizedStringFormatter-D-hKy3z9.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C14ubnrw.js";import"./useField-Nm1lHKW4.js";import"./clsx-Ciqy0D92.js";import"./Button-Dm_Ze3Kp.js";import"./Button.module-DRhvPh0f.js";import"./x-BDE7PQH_.js";import"./createLucideIcon-CUNdkh11.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
