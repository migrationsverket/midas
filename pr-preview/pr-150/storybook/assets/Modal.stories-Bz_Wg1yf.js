import{j as e}from"./jsx-runtime-CfatFE5O.js";import{B as i}from"./Button-D_4Ky_gc.js";import{R as c}from"./index-ClcD9ViR.js";import{c as O}from"./clsx-B-dksMZM.js";import{X as B}from"./x-BaIpobvV.js";import{S as F,I as H}from"./Select-DiQp7Bdt.js";import{F as S,a as d}from"./FlexItem-B94Ffdnb.js";import"./useFocusable-ByLM5O5C.js";import"./index-ZuzByk-F.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Hidden-Bxls36u3.js";import"./createLucideIcon-DQK9Z80p.js";import"./ListBox-DsU7CrKu.js";import"./Collection-Dn-gE2FZ.js";import"./index-DvHoLfqc.js";import"./DragAndDrop-Dr3ByzFu.js";import"./scrollIntoView-D9xnEt38.js";import"./Text-Co9214ok.js";import"./useControlledState--51_K5zJ.js";import"./SelectionManager-C5nYy_WJ.js";import"./FocusScope-BSY4Zh8-.js";import"./context-DDnqLcyX.js";import"./useDescription-Dw4F0l5g.js";import"./useCollator-D9qAE6tY.js";import"./useListState-DCWipFRX.js";import"./Dialog-DBLZ0hCE.js";import"./RSPContexts-Djf1EgA4.js";import"./PressResponder-CfqlYSS9.js";import"./useLocalizedStringFormatter-WdMhSU39.js";import"./VisuallyHidden-BaXIMSs1.js";import"./Form-51MLUZf-.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-BdQttHQL.js";import"./useMenuTrigger-fAjkoFlW.js";import"./TextField-DA54pgpK.js";import"./chevron-down-CVNiYbvV.js";const b='"../../../theme/src/lib/tokens.css"',P='"Inter", sans-serif',v="#ffffff",R="#f2f2f2",M="_modal_1965g_4",C="_modalHeader_1965g_29",N="_modalBody_1965g_35",V="_modalHeading_1965g_41",a={tokens:b,display:P,white:v,gray10:R,modal:M,modalHeader:C,modalBody:N,modalHeading:V},j=({id:m,isOpen:r,onOpenChange:t,children:n,title:g,className:I,...y})=>{const s=c.useRef(null);c.useEffect(()=>{var o,f;r?(o=s.current)==null||o.showModal():(f=s.current)==null||f.close()},[r]);const _=()=>{var o;(o=s.current)==null||o.close(),t(!1)},p=m+"_heading";return e.jsxs("dialog",{id:m,ref:s,onCancel:()=>t(!1),className:O(a.modal,I),"aria-labelledby":p,...y,children:[e.jsx("div",{className:a.modalHeader,children:e.jsx(i,{onPress:()=>_(),variant:"tertiary",icon:B,iconPlacement:"right",children:"Stäng"})}),e.jsxs("div",{className:a.modalBody,children:[e.jsx("h2",{className:a.modalHeading,id:p,children:g}),n]})]})},je={component:j,title:"Components/Modal",tags:["autodocs"],parameters:{layout:"centered"}},l={args:{},render:function(){const[r,t]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onPress:()=>t(!0),children:"Öppna"}),e.jsx(j,{id:"modal",title:"Välj ärende",isOpen:r,onOpenChange:n=>t(n),children:e.jsxs(S,{fluid:!0,children:[e.jsx(d,{col:12,children:e.jsx(F,{label:"Ärenden",placeholder:"Hej",description:"Välj ärende",items:[{id:1,name:"test"}],children:n=>e.jsx(H,{children:n.name})})}),e.jsx(d,{col:12,children:e.jsx(i,{onPress:()=>t(!1),children:"Spara"})}),e.jsx(d,{col:12,children:e.jsx(i,{variant:"secondary",onPress:()=>t(!1),children:"Avbryt"})})]})})]})}};var u,x,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const ge=["Default"];export{l as Default,ge as __namedExportsOrder,je as default};
