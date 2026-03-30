import{j as e}from"./iframe-KvMX5Axs.js";import{c}from"./Form-DU3OszFC.js";import{G as d}from"./Grid-AyWe0ZCn.js";import{G as i}from"./GridItem-CoNEAfON.js";import{a as x,R as u}from"./Radio-DSRlA3Mf.js";import{C as I}from"./CheckboxGroup-qf_Lba56.js";import{C as G}from"./Checkbox-61cckj5q.js";import{T as t}from"./TextField-BVtbkOP8.js";import{S as l}from"./Select-BYYE8MM1.js";import{L as p}from"./ListBoxItem-7Acs78JG.js";import{B as a}from"./Button-C1NVLp98.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-vgvsKIAr.js";import"./utils-DQB0ixZT.js";import"./clsx-B-dksMZM.js";import"./index-DTZE8lUv.js";import"./index-Y9HTW2-l.js";import"./clsx-Ciqy0D92.js";import"./Group-D54bSnbM.js";import"./FieldError-Dm-mWSrI.js";import"./Text-BvSzNFUh.js";import"./Text-xieIOj6u.js";import"./Button-Bo3Qklea.js";import"./Hidden-DgM1V2hb.js";import"./useLabel-0b57TDxq.js";import"./useLabels-CR00I-nd.js";import"./useButton-DgCOwdob.js";import"./SelectionIndicator-CnqLajoz.js";import"./useField-B9fS3fRz.js";import"./VisuallyHidden-BX39qD-v.js";import"./useControlledState-CT69c7wx.js";import"./Label-CDuq43bD.js";import"./Dialog-B71dWd4e.js";import"./RSPContexts-C0J0N8cH.js";import"./OverlayArrow-Bj4KLNcx.js";import"./useResizeObserver-Bl8K5spt.js";import"./Collection-CuE_5Y0n.js";import"./index-Cd_h8BU-.js";import"./Separator-s2DCgON9.js";import"./SelectionManager-BkEXNsjd.js";import"./useEvent-CIdla-e8.js";import"./scrollIntoView-B4l7yvba.js";import"./useDescription-BxZn0zUe.js";import"./ListKeyboardDelegate-CeGxABxM.js";import"./PressResponder-7JA-RSVR.js";import"./useLocalizedStringFormatter-BUFrwSMc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BI7Uh8GK.js";import"./getScrollParent-BQUmQnum.js";import"./x-BXrTPOwi.js";import"./createLucideIcon-CKpEkAd-.js";import"./useLocalizedStringFormatter-NesSIbJ3.js";import"./Heading-CT2JNdOT.js";import"./info-H8Rwce8n.js";import"./Popover-CPK1w-vm.js";import"./check-_d3XSU8_.js";import"./useToggleState-CvtEa4-l.js";import"./TextFieldBase-Cqv57iiG.js";import"./Input-S3TQ-i_W.js";import"./useTextField-D3gJUay8.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DwcXwYUq.js";import"./DragAndDrop-jPwgnAZ6.js";import"./inertValue-DNnSK77J.js";import"./useListState-BSTz2OaU.js";import"./TagGroup-admuOkMB.js";import"./useHighlightSelectionDescription-D5uHPu0Z.js";import"./useUpdateEffect-DX-y8wr4.js";import"./useHasTabbableChild-BUMt6Iah.js";import"./chevron-down-BxVmcDfy.js";import"./Virtualizer-Dq1B2U4Z.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
