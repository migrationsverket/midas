import{j as e}from"./iframe-DwmMgugL.js";import{$ as c}from"./Form-DoiDaZg3.js";import{G as d}from"./Grid-BN3rZ5cn.js";import{G as i}from"./GridItem-BUjGs1HU.js";import{T as t}from"./TextField-SPBwQ9w0.js";import{S as l}from"./Select-DSvZw556.js";import{B as a}from"./Button-DoQx4OEV.js";import{R as x,a as u}from"./Radio-DdhMyyed.js";import{C as I}from"./CheckboxGroup-SMPONQTr.js";import{C as G}from"./Checkbox--GesHV_f.js";import{L as p}from"./ListBoxItem-DvRINp5x.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DmBjYA7q.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DZHIdgUq.js";import"./useFocusRing-CzZK1_to.js";import"./index-DjWT9C0a.js";import"./index-BRzIZAFy.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BTulvfTd.js";import"./TextField-CRgz-2E0.js";import"./FieldError-D5MBP0wB.js";import"./Text-BgheBiT-.js";import"./Text-uR4nWzwy.js";import"./RSPContexts-Bu2Edo6o.js";import"./Group-B60SHzOG.js";import"./Input-N75LxbJM.js";import"./Hidden-C52U5hS0.js";import"./Button-Dle7h4uT.js";import"./useLabels-BFzRRTRc.js";import"./useButton-CUQ_mzTp.js";import"./useTextField-BMRFKc-Q.js";import"./useControlledState-yWDFBEGR.js";import"./useField-DqouWQCD.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-4-IwTmM5.js";import"./Dialog-D1YNyvRd.js";import"./OverlayArrow-wbJ3ETWU.js";import"./useResizeObserver-BguVcYqf.js";import"./Collection-PdcqvvyM.js";import"./index-D54BHJvF.js";import"./Separator-Cnmu05dX.js";import"./SelectionManager-DgjfJV5o.js";import"./useEvent-Jcjvrjge.js";import"./scrollIntoView-CjjreEs4.js";import"./SelectionIndicator-DNV4kXHD.js";import"./useDescription-DUuO3-sD.js";import"./ListKeyboardDelegate-ar09duhk.js";import"./PressResponder-Djs9pyA3.js";import"./useLocalizedStringFormatter-BaxlK3Fj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BGXuVfZe.js";import"./VisuallyHidden-Bjv_fvAd.js";import"./useLocalizedStringFormatter-Bq9JIZi1.js";import"./x--Paj8wKV.js";import"./createLucideIcon-9R8XYZ6c.js";import"./Heading-L5Dj9Tzl.js";import"./info-CpsTd9QD.js";import"./Popover-CoUsr5oa.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BrUwOhit.js";import"./DragAndDrop-BxjlAeHI.js";import"./inertValue-CyNwM1pe.js";import"./useListState-CJzC2r5R.js";import"./Tag-BsqElp8x.js";import"./useHighlightSelectionDescription-9MKOtJ8a.js";import"./useUpdateEffect-DP2Bct5v.js";import"./useHasTabbableChild-Dh4ppKL1.js";import"./chevron-down-B4hKtZXo.js";import"./Button.module-CtQ1deO8.js";import"./check-s_cyicqK.js";import"./useToggleState-BozUAWZ4.js";import"./Virtualizer-Bk14An0J.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
