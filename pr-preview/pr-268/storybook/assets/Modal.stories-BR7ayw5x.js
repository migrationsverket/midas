import{j as e}from"./jsx-runtime-CBDCb4rg.js";import{r as f,R as O}from"./index-B-o1Wr-g.js";import{c as F}from"./clsx-B-dksMZM.js";import{B as d}from"./Button-9KeTfxY-.js";import{X as B}from"./x-CdHhRR78.js";import{F as H}from"./Flex-B13okTZk.js";import{F as p}from"./FlexItem-BpS8Q41M.js";import{S,I as b}from"./Select-BPy7E2lW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-ojkDv_BK.js";import"./useFocusable-B8HhqQIl.js";import"./Hidden-C-kiqh_I.js";import"./index-D2jEcJry.js";import"./createLucideIcon-DjmUzaoT.js";import"./ListBox-DoA6ZTAv.js";import"./Collection-DVrKtIZX.js";import"./index-Btf1eDe9.js";import"./DragAndDrop-Bfvg-Q35.js";import"./Separator-CNfBi8L5.js";import"./SelectionManager-BrHtouv1.js";import"./useEvent-BzCFeyOM.js";import"./FocusScope-hGcwqkni.js";import"./context-e_uznqlg.js";import"./useDescription-Dx2tUlT3.js";import"./useControlledState-BgxdDqm0.js";import"./ListKeyboardDelegate-JdsgzHfV.js";import"./Text-Bxg5Zhzp.js";import"./useField-Dt29Lb0W.js";import"./useLabels-BiAlD12e.js";import"./useListState-DzqfRXv-.js";import"./Dialog-C28rmmUa.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-CuCbQGRr.js";import"./PressResponder-CtzAwrCi.js";import"./useLocalizedStringFormatter-4pChcv_1.js";import"./VisuallyHidden-DjSI67in.js";import"./Form-3nrIbYVr.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-DnJtv4Od.js";import"./chevron-down-DOK0m5UE.js";import"./TextField-Cjoe213B.js";import"./TextField.module-DSYGJTmY.js";const q="_modal_1wq00_4",v="_modalHeader_1wq00_30",P="_modalBody_1wq00_39",V="_modalHeading_1wq00_45",l={modal:q,modalHeader:v,modalBody:P,modalHeading:V},m=({id:o,isOpen:a,onOpenChange:t,children:n,title:j,className:_,...y})=>{const s=f.useRef(null);f.useEffect(()=>{var r,u;a?(r=s.current)==null||r.showModal():(u=s.current)==null||u.close()},[a]);const I=()=>{var r;(r=s.current)==null||r.close(),t(!1)},c=o+"_heading";return e.jsxs("dialog",{id:o,ref:s,onCancel:()=>t(!1),className:F(l.modal,_),"aria-labelledby":c,...y,children:[e.jsx("div",{className:l.modalHeader,children:e.jsx(d,{onPress:()=>I(),variant:"tertiary",icon:B,iconPlacement:"right",children:"Stäng"})}),e.jsxs("div",{className:l.modalBody,children:[e.jsx("h2",{className:l.modalHeading,id:c,children:j}),n]})]})};try{m.displayName="Modal",m.__docgenInfo={description:"",displayName:"Modal",props:{id:{defaultValue:null,description:"Id for accessibility",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"Heading for the modal window",name:"title",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"Whether the modal is open or not",name:"isOpen",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"State handler to toggle isOpen",name:"onOpenChange",required:!0,type:{name:"(isOpen: boolean) => void"}}}}}catch{}const ye={component:m,title:"Components/Modal",tags:["autodocs"],parameters:{layout:"centered"}},i={args:{},render:function(){const[a,t]=O.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onPress:()=>t(!0),children:"Öppna"}),e.jsx(m,{id:"modal",title:"Välj ärende",isOpen:a,onOpenChange:n=>t(n),children:e.jsxs(H,{fluid:!0,children:[e.jsx(p,{col:12,children:e.jsx(S,{label:"Ärenden",placeholder:"Hej",description:"Välj ärende",items:[{id:1,name:"test"}],children:n=>e.jsx(b,{children:n.name})})}),e.jsx(p,{col:12,children:e.jsx(d,{onPress:()=>t(!1),children:"Spara"})}),e.jsx(p,{col:12,children:e.jsx(d,{variant:"secondary",onPress:()=>t(!1),children:"Avbryt"})})]})})]})}};var h,x,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    return <>
        <Button onPress={() => setIsOpen(true)}>Öppna</Button>
        <Modal id='modal' title='Välj ärende' isOpen={isOpen} onOpenChange={isOpen => setIsOpen(isOpen)}>
          <Flex fluid={true}>
            <FlexItem col={12}>
              <Select label='Ärenden' placeholder='Hej' description='Välj ärende' items={[{
              id: 1,
              name: 'test'
            }]}>
                {item => <Item>{item.name}</Item>}
              </Select>
            </FlexItem>
            <FlexItem col={12}>
              <Button onPress={() => setIsOpen(false)}>Spara</Button>
            </FlexItem>
            <FlexItem col={12}>
              <Button variant='secondary' onPress={() => setIsOpen(false)}>
                Avbryt
              </Button>
            </FlexItem>
          </Flex>
        </Modal>
      </>;
  }
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const Ie=["Default"];export{i as Default,Ie as __namedExportsOrder,ye as default};
