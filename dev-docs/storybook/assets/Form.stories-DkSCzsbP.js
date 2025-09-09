import{j as n}from"./iframe-DHMeLgA1.js";import{$ as j}from"./Form-rXInuhoU.js";import{G}from"./Grid-BnY647ll.js";import{G as e}from"./GridItem-D1T_ob01.js";import{T as r}from"./TextField-D6CFqN4B.js";import{S as I}from"./Select-C9CdEhz7.js";import{B as a}from"./Button-DmUzV4d1.js";import{R as g,a as b}from"./Radio-C2Tr3kZT.js";import{C as h}from"./CheckboxGroup-B20qwyHN.js";import{C as k}from"./Checkbox-CyFdnA8V.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-a2jXawL2.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DuqUroc4.js";import"./useFocusRing-Ce3VIprI.js";import"./index-Bj3s_lBZ.js";import"./index-B6RSE-c8.js";import"./TextFieldBase-AqZMbRcx.js";import"./TextField-DgrEBw21.js";import"./FieldError-DQtCu0av.js";import"./Text-9Icw_rur.js";import"./Text-D_7NvsNQ.js";import"./ListKeyboardDelegate-BaXGzmv8.js";import"./SelectionManager-ItbxeDuH.js";import"./useEvent-DOW5LOth.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-C4HKmzAM.js";import"./useDescription-DQivp0SL.js";import"./useControlledState-VDjeOCh_.js";import"./Group-BWQRn-KL.js";import"./Input-Ct0GU69A.js";import"./Hidden-CLKgPyS2.js";import"./Button-DiWVEykM.js";import"./useLabels-DIQQiIer.js";import"./useButton-DzQB1COm.js";import"./useTextField-jFvTNXls.js";import"./useField-sNkfgueN.js";import"./TextField.module-8oYDuXgF.js";import"./Label-BFFMF3tL.js";import"./Dialog-B22nma5n.js";import"./RSPContexts-Bodx8IZ0.js";import"./OverlayArrow-P8IerUJD.js";import"./useResizeObserver-m9ogcn-a.js";import"./Collection-B3NLl8mC.js";import"./index-D7BkVUjr.js";import"./Separator-DDv4reJ4.js";import"./PressResponder-CGaa3QGw.js";import"./useLocalizedStringFormatter-DsHIGWOi.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DrseT0JS.js";import"./Dialog-U7CVI7bj.js";import"./useLocalizedStringFormatter-AT_aBOxa.js";import"./x-T5wZSppo.js";import"./createLucideIcon-DJmVfspb.js";import"./Heading-BHwY5MHD.js";import"./info-CBcFo8SW.js";import"./Tag-CuOtvQXr.js";import"./ListBox-DLxIPiT6.js";import"./DragAndDrop-Bc9rNpkb.js";import"./inertValue-DXqH9Xz6.js";import"./useListState-CN_Lxw7o.js";import"./useHighlightSelectionDescription-CBUTi92T.js";import"./useUpdateEffect-Bzr3Pawr.js";import"./useHasTabbableChild-CYlTg6F9.js";import"./check-DgHOSFAd.js";import"./ListBoxSection-BWdHEgvX.js";import"./Virtualizer-BVp8l6d-.js";import"./useObserveElement-BLGEms7r.js";import"./chevron-down-Bx6qyakL.js";import"./Button.module-BkTnSRp5.js";import"./useToggleState-BkkFQg8L.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
