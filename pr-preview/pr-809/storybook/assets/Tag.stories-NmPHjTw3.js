import{j as a}from"./iframe-Dacx1Yvg.js";import{T as o,a as i,s as D}from"./Tag-B1Z0XZ-l.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DBCh3Ub8.js";import"./utils-BeZ2bkm0.js";import"./clsx-B-dksMZM.js";import"./Hidden-LyCy7VGU.js";import"./useFocusRing-DZs_suJr.js";import"./index-CN--P5zM.js";import"./index-CRSvK1Mb.js";import"./useLabels-CTzrWnzv.js";import"./useButton-DCNBN3Y0.js";import"./Collection--QJ7mYDY.js";import"./index-DyyoBCqY.js";import"./ListBox-CwV5-TK8.js";import"./DragAndDrop-ChHfJFkA.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-dzYZ7Te0.js";import"./SelectionManager-Cxucp8k6.js";import"./useEvent-C6Kph79X.js";import"./FocusScope-DHmeMnB9.js";import"./useDescription-0Rd111Om.js";import"./useControlledState-CbX3LfII.js";import"./ListKeyboardDelegate-DFG5GOTV.js";import"./Text-DALM9FrC.js";import"./inertValue-EYK28-4E.js";import"./useListState-h58IXmv7.js";import"./useHighlightSelectionDescription-Clx6fyuK.js";import"./useUpdateEffect-DgcCKXO2.js";import"./useLocalizedStringFormatter-zxktPBb-.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-gFDjw19L.js";import"./useField-CoA9MBr6.js";import"./Button-BecWelxv.js";import"./Button.module-DRhvPh0f.js";import"./x-v95o29bQ.js";import"./createLucideIcon-Cw5VyEZw.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
