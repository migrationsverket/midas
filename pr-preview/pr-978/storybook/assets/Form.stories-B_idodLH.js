import{j as e}from"./iframe-mw-3Wqs6.js";import{$ as c}from"./Form-C2aIA_dy.js";import{G as d}from"./Grid-fPMDXg-H.js";import{G as i}from"./GridItem-C8V6Z_P6.js";import{T as t}from"./TextField-DVRDM1ld.js";import{S as l}from"./Select-Ctc8z-9p.js";import{B as a}from"./Button-Ca1dkGu6.js";import{R as x,a as u}from"./Radio-kPvUFo9o.js";import{C as I}from"./CheckboxGroup-Ba3vWiSw.js";import{C as G}from"./Checkbox-CQHF9LJr.js";import{L as p}from"./ListBoxItem-ghjvHSxm.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CYxbFJyZ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-yYLpoRhw.js";import"./useFocusRing-89DUUa4N.js";import"./index-zd9D6jNJ.js";import"./index-DA11V2mi.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Di7ZFCmY.js";import"./TextField-nze3sl09.js";import"./FieldError-9R24nCVk.js";import"./Text-D7lmaY_E.js";import"./Text-DGTCcOxe.js";import"./RSPContexts-XN3T4dow.js";import"./Group-BXd0p5BW.js";import"./Input-DfxJsRjz.js";import"./Hidden-DYrMFcxf.js";import"./Button-Db-TTM-V.js";import"./useLabels-DdJABAh2.js";import"./useButton-XGSOFvEQ.js";import"./useTextField-CWmSUzgl.js";import"./useControlledState--wR3WwaU.js";import"./useField-DomG1e7H.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DtcEAkmW.js";import"./Dialog-Ccjdhkv8.js";import"./OverlayArrow-BKSp9Jsk.js";import"./useResizeObserver-CH-Wqbzm.js";import"./Collection-D6Asr0I3.js";import"./index-DKZkByRv.js";import"./Separator-DWgFLVGB.js";import"./SelectionManager-C7pFQbzQ.js";import"./useEvent-CRXVShig.js";import"./scrollIntoView-CXkXakFA.js";import"./SelectionIndicator-Do5clOAx.js";import"./useDescription-Blh6neaZ.js";import"./ListKeyboardDelegate-CSgQuyq8.js";import"./PressResponder-Bbu-ILI9.js";import"./useLocalizedStringFormatter-BCBlkbeT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CGAWy5Jf.js";import"./VisuallyHidden-D6wLmm0f.js";import"./x-LtoPVlfO.js";import"./createLucideIcon-DugDWxFe.js";import"./useLocalizedStringFormatter-CNqwZTZL.js";import"./Heading-Bl6Y-w-i.js";import"./info-BgaALT6m.js";import"./Popover-BRD9rdjK.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C9NmZ0JW.js";import"./DragAndDrop-hMCPOCNo.js";import"./inertValue-oyjXDVAh.js";import"./useListState-kMWZYbyk.js";import"./Tag-BMl9AXD6.js";import"./useHighlightSelectionDescription-YbauxfXF.js";import"./useUpdateEffect-IOuEHxJu.js";import"./useHasTabbableChild-DXgBP5PC.js";import"./chevron-down-DvQrMBgI.js";import"./Button.module-Co5e5YHp.js";import"./check-CMMOelx0.js";import"./useToggleState-DJ52qNm5.js";import"./Virtualizer-DxdIrLC9.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
