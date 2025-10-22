import{j as n}from"./iframe-BQE1_x2S.js";import{$ as j}from"./Form-BhflE3AY.js";import{G}from"./Grid-B-aeNfFZ.js";import{G as e}from"./GridItem-CH_ijppm.js";import{T as r}from"./TextField-BLf9WHfx.js";import{S as I}from"./Select-D2fN2sKW.js";import{B as a}from"./Button-DtmjQOn1.js";import{R as g,a as b}from"./Radio-BzD88Hku.js";import{C as h}from"./CheckboxGroup-CR4RaxAa.js";import{C as k}from"./Checkbox-2t8gdkeC.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Dj9XEpml.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DM4Z0ItK.js";import"./useFocusRing-BSM-wn--.js";import"./index-By6nvHJX.js";import"./index-BXBrjF9u.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CNJhbHc5.js";import"./TextField-C1PFsPOJ.js";import"./FieldError-hRawaKcD.js";import"./Text-qOdU1hDP.js";import"./Text-BFtg6M7I.js";import"./RSPContexts-CySpb_Tp.js";import"./Group-u4IHGVpF.js";import"./Input-C1QlMNch.js";import"./Hidden-BKKV1oQO.js";import"./Button-9CGiz-mA.js";import"./useLabels-BHPzjVNQ.js";import"./useButton-Dgp2fcZM.js";import"./useTextField-BS75nXKv.js";import"./useControlledState-BOA36rtj.js";import"./useField-45iak9F4.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BnqEoKpA.js";import"./Dialog-DaHS51hr.js";import"./OverlayArrow-tjCKZEpR.js";import"./useResizeObserver-D2xPv8_n.js";import"./Collection-MbJcbpn4.js";import"./index-2Aux9dvz.js";import"./Separator-RihtYL7H.js";import"./SelectionManager-CX75Fhzi.js";import"./useEvent-B0PbKiGH.js";import"./scrollIntoView-CAs8Z7DL.js";import"./SelectionIndicator-D39dEQtA.js";import"./useDescription-BhVxZGZD.js";import"./ListKeyboardDelegate-BbMbOUjZ.js";import"./PressResponder-CCKXioDO.js";import"./useLocalizedStringFormatter-Ba31SGL0.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-D0uFK7Qv.js";import"./VisuallyHidden-CUaIazt-.js";import"./useLocalizedStringFormatter-CHvPSz7r.js";import"./x-COfEcpBf.js";import"./createLucideIcon-BWThs30e.js";import"./Heading-DnWKh4es.js";import"./info-DL9Y4WAw.js";import"./Popover-D84tqVNh.js";import"./Tag-DOGhWF3R.js";import"./ListBox-DoBgcqT-.js";import"./DragAndDrop-qXoo-BxQ.js";import"./inertValue-DYxBj0m7.js";import"./useListState-CuiScvGr.js";import"./useHighlightSelectionDescription-b1NL6g_B.js";import"./useUpdateEffect-BH1QHKBS.js";import"./useHasTabbableChild-BclD3-10.js";import"./check-B9vprS8x.js";import"./ListBoxSection-CdEhYo6n.js";import"./Virtualizer-Dt2fmubg.js";import"./chevron-down-C_01xBSQ.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BxDqS2gJ.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
