import{j as n}from"./iframe-CYpY7HWk.js";import{$ as j}from"./Form-5u8JNGzz.js";import{G}from"./Grid-iv3-YG_1.js";import{G as e}from"./GridItem-QfUA1Z7J.js";import{T as r}from"./TextField-CLhN9Icx.js";import{S as I}from"./Select-DCQw8pcE.js";import{B as a}from"./Button-D3CzCYQz.js";import{R as g,a as b}from"./Radio-QFGbHGPN.js";import{C as h}from"./CheckboxGroup-C5c2Ismn.js";import{C as k}from"./Checkbox-C3fsRKzV.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-D0PRHCyu.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B3fggCLA.js";import"./useFocusRing-BHe0ZVk6.js";import"./index-SW5Q4g1x.js";import"./index-DR9W1cWv.js";import"./TextFieldBase-B9Iv2tdK.js";import"./TextField-CANkhSkg.js";import"./FieldError-Ae06Ai-t.js";import"./Text-oay8j5lU.js";import"./Text-BvNgg1f0.js";import"./Input-UI7BB76B.js";import"./Hidden-iJG_k6qY.js";import"./Button-Jn1_BTA1.js";import"./useLabels-CrNCUv0H.js";import"./useButton-e9xCySfl.js";import"./useTextField-Dbxi0zbi.js";import"./useControlledState-BZ7WHBYj.js";import"./useField-C0se5ntN.js";import"./TextField.module-C33Y04O9.js";import"./Label-CCIU9Wdp.js";import"./Dialog-ChJPEREB.js";import"./RSPContexts-D5jev_F7.js";import"./OverlayArrow-8JqAqg9C.js";import"./useResizeObserver-B-z9dS9o.js";import"./Collection-BOk_2tHe.js";import"./index-BTERBuk0.js";import"./Separator-Cr-Ee4o-.js";import"./SelectionManager-B-t3s1CO.js";import"./useEvent-ChaamAse.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DPMBrb1R.js";import"./useDescription-BycwCd6J.js";import"./ListKeyboardDelegate-C4NMIf2p.js";import"./PressResponder-D8jttLAI.js";import"./useLocalizedStringFormatter-6SIvu_ff.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Cr9v3GYg.js";import"./Dialog-BQzjrt9P.js";import"./useLocalizedStringFormatter-w7-rFkOo.js";import"./x-CAeE556l.js";import"./createLucideIcon-3lKKdzZh.js";import"./Heading-qlCOQec3.js";import"./info-CiKMugvY.js";import"./Tag-CmNWxwRE.js";import"./ListBox-CZpsbxG5.js";import"./DragAndDrop-CKNsaM-K.js";import"./inertValue-driQ7H0N.js";import"./useListState--fyADMUD.js";import"./useHighlightSelectionDescription-C9u-hXaW.js";import"./useUpdateEffect-BJ-t8phl.js";import"./useHasTabbableChild-D7s4cL0b.js";import"./check-CymQ2jN0.js";import"./ListBoxSection-rpc2FwGT.js";import"./Virtualizer-Dm_Gj7RH.js";import"./useObserveElement-C6FxZa7q.js";import"./chevron-down-W3XSyPpU.js";import"./Button.module-DKVuWS4g.js";import"./Group-dQ-_1CA9.js";import"./useToggleState-D55zmYu_.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
