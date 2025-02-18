import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{r as f,R as _}from"./index-BbAIUH2N.js";import{c as F}from"./clsx-B-dksMZM.js";import{B as l}from"./Button-DeVX-GBX.js";import{X as B}from"./x-Cu6J0Y2u.js";import{F as b}from"./Flex-Di1QQQg5.js";import{F as d}from"./FlexItem-DeKcLnIt.js";import{S as H,I as S}from"./Select-CXmAgS8d.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-PMtIgk3z.js";import"./useFocusable-BTV2lCc9.js";import"./Hidden-BxZRcyi_.js";import"./index-i7ZvCR4f.js";import"./createLucideIcon-8wDOqnHv.js";import"./ListBox-B-q0TaH8.js";import"./Collection-CP0FkJ5j.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-Z3nJnnSt.js";import"./SelectionManager-CiLjFixb.js";import"./useEvent-CfffaCDc.js";import"./FocusScope-BeeEVvPP.js";import"./context-DC_sGW0u.js";import"./useDescription-c_sn7U9n.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-VWRpf7NQ.js";import"./Text-DrzpM1Jb.js";import"./useListState-CmrCNl7S.js";import"./useField-DN-D1gXY.js";import"./useLabels-BlF-T0UY.js";import"./Dialog-CmDJib1-.js";import"./RSPContexts-CeCCo7XS.js";import"./PressResponder-DzydwzD8.js";import"./useLocalizedStringFormatter-BrmR15lP.js";import"./VisuallyHidden-CK0-3K8r.js";import"./Form-CdOY3XQC.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-xLg9a9Jp.js";import"./chevron-down-U1dNK9nR.js";import"./TextField-DjUf-eJX.js";import"./TextField.module-Cq1EB13r.js";const w='"../theme/tokens.css"',v='"Inter", sans-serif',q="#ffffff",P="#f2f2f2",R="_modal_1wq00_4",M="_modalHeader_1wq00_30",C="_modalBody_1wq00_39",N="_modalHeading_1wq00_45",a={tokens:w,display:v,white:q,gray10:P,modal:R,modalHeader:M,modalBody:C,modalHeading:N},p=({id:m,isOpen:r,onOpenChange:t,children:n,title:j,className:y,...I})=>{const s=f.useRef(null);f.useEffect(()=>{var o,u;r?(o=s.current)==null||o.showModal():(u=s.current)==null||u.close()},[r]);const O=()=>{var o;(o=s.current)==null||o.close(),t(!1)},c=m+"_heading";return e.jsxs("dialog",{id:m,ref:s,onCancel:()=>t(!1),className:F(a.modal,y),"aria-labelledby":c,...I,children:[e.jsx("div",{className:a.modalHeader,children:e.jsx(l,{onPress:()=>O(),variant:"tertiary",icon:B,iconPlacement:"right",children:"Stäng"})}),e.jsxs("div",{className:a.modalBody,children:[e.jsx("h2",{className:a.modalHeading,id:c,children:j}),n]})]})};p.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{id:{required:!0,tsType:{name:"string"},description:"Id for accessibility"},title:{required:!0,tsType:{name:"string"},description:"Heading for the modal window"},isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open or not"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"State handler to toggle isOpen"}}};const Fe={component:p,title:"Components/Modal",tags:["autodocs"],parameters:{layout:"centered"}},i={args:{},render:function(){const[r,t]=_.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onPress:()=>t(!0),children:"Öppna"}),e.jsx(p,{id:"modal",title:"Välj ärende",isOpen:r,onOpenChange:n=>t(n),children:e.jsxs(b,{fluid:!0,children:[e.jsx(d,{col:12,children:e.jsx(H,{label:"Ärenden",placeholder:"Hej",description:"Välj ärende",items:[{id:1,name:"test"}],children:n=>e.jsx(S,{children:n.name})})}),e.jsx(d,{col:12,children:e.jsx(l,{onPress:()=>t(!1),children:"Spara"})}),e.jsx(d,{col:12,children:e.jsx(l,{variant:"secondary",onPress:()=>t(!1),children:"Avbryt"})})]})})]})}};var h,x,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const Be=["Default"];export{i as Default,Be as __namedExportsOrder,Fe as default};
