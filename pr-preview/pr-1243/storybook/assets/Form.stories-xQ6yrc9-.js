import{j as e}from"./iframe-BLFVAebz.js";import{c}from"./Form-C0uqP4DY.js";import{G as d}from"./Grid-BNB6XM4H.js";import{G as i}from"./GridItem-BiDqIf7Y.js";import{a as x,R as u}from"./Radio-CMIXkjsi.js";import{C as I}from"./CheckboxGroup-CZ1Tz0BW.js";import{C as G}from"./Checkbox-DHjTGOE_.js";import{T as t}from"./TextField-B3lU204n.js";import{S as l}from"./Select-DP04FOV8.js";import{L as p}from"./ListBoxItem-Cz6GvFvs.js";import{B as a}from"./Button-DNuEBjZY.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BtgCc4uS.js";import"./utils-COORazi9.js";import"./clsx-B-dksMZM.js";import"./index-DxSzAXil.js";import"./index-MFhL1fTj.js";import"./clsx-Ciqy0D92.js";import"./Group-CzvfKl4j.js";import"./FieldError-CotC56cl.js";import"./Text-CMpPyQHQ.js";import"./Text-BI792DVZ.js";import"./Button-CDRPkfYl.js";import"./Hidden-DwfkqXbu.js";import"./useLabel-C9MLZ0ZV.js";import"./useLabels-DsM9HmY4.js";import"./useButton-Dkva8HAQ.js";import"./SelectionIndicator-DJw2BmtQ.js";import"./useField-B551ugOM.js";import"./VisuallyHidden-BFj9mjRF.js";import"./useControlledState-DKdXVV8i.js";import"./Label-1-HCjcm8.js";import"./Dialog-Bl4fLT1e.js";import"./RSPContexts-dhIaIC8d.js";import"./OverlayArrow-DurWaezh.js";import"./useResizeObserver-BmehkLjg.js";import"./Collection-BYB_FHMU.js";import"./index-BX_LU5SM.js";import"./Separator-hikbHwg6.js";import"./SelectionManager-DOBraOrU.js";import"./useEvent-BSHnIrcj.js";import"./scrollIntoView-D0PGn0f2.js";import"./useDescription-ChbjjRBw.js";import"./ListKeyboardDelegate-BhTruHSe.js";import"./PressResponder-BY0zFBW6.js";import"./useLocalizedStringFormatter-D6yZmrtf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C16O_xko.js";import"./getScrollParent-VrUltlJn.js";import"./ModalOverlay-8Wbn4Vub.js";import"./x-czyhHEQN.js";import"./createLucideIcon-ioBnSaPP.js";import"./useLocalizedStringFormatter-DZSD3y5K.js";import"./Heading-CDtobJ4y.js";import"./info-Bp6IousO.js";import"./Popover-BL5F3GnO.js";import"./check-DrYC1yJG.js";import"./useToggleState-Cz1X7JpX.js";import"./TextFieldBase-BgexEukM.js";import"./Input-B_ew_Foh.js";import"./useTextField-ccfcKYd7.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C5aUtxAO.js";import"./DragAndDrop-0nSArv3G.js";import"./inertValue-DqkHYO9L.js";import"./useListState-DNmd3dZE.js";import"./TagGroup-CjkA3CWT.js";import"./useHighlightSelectionDescription-B9kH4G4C.js";import"./useUpdateEffect-BY-5Usb6.js";import"./useHasTabbableChild-Cr2sAGF-.js";import"./chevron-down-Ln9n-IiD.js";import"./Virtualizer-Dm9ZDaWL.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
