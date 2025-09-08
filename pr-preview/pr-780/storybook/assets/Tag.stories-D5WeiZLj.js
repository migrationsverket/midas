import{j as a}from"./iframe-4lK7fKbc.js";import{T as o,a as i,s as D}from"./Tag-nwtlKABf.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-rxVkz01D.js";import"./utils-DJ7OK7G4.js";import"./clsx-B-dksMZM.js";import"./Hidden-14l61M_L.js";import"./useFocusRing-DO1kNn5x.js";import"./index-qpZMIXjh.js";import"./index-CeWqQAzY.js";import"./useLabels-B04JfF0b.js";import"./useButton-DnXqC7uB.js";import"./Collection-CwUMe2fu.js";import"./index-D_CPdy3R.js";import"./ListBox-gxVsYfJS.js";import"./DragAndDrop-C4p9WI0z.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-ClmGOZK9.js";import"./SelectionManager-Bf_jJkfc.js";import"./useEvent-xZSZg_wR.js";import"./FocusScope-DaeYGdnQ.js";import"./useDescription-g1A33IWZ.js";import"./useControlledState-QAr2oF8_.js";import"./ListKeyboardDelegate-Cv_LJbqB.js";import"./Text-BeWFx65J.js";import"./inertValue-gQEA7S1E.js";import"./useListState-DqFUL7HA.js";import"./useHighlightSelectionDescription-DKWYF-Dv.js";import"./useUpdateEffect-Dhr9LOT7.js";import"./useLocalizedStringFormatter-Nfv8S4TX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-rfipq-JE.js";import"./useField-BfyxUDMR.js";import"./Button-3ItS0WQJ.js";import"./Button.module-DgYkWG2o.js";import"./x-CS_TqCWL.js";import"./createLucideIcon-Bjyle2Lq.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
