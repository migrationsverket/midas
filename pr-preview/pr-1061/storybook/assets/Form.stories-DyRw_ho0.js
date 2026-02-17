import{j as e}from"./iframe-DTfJSErE.js";import{$ as c}from"./Form-DPNHWdAN.js";import{G as d}from"./Grid-eSZQbB8b.js";import{G as i}from"./GridItem-ChoJcoiL.js";import{a as x,R as u}from"./Radio-CBaBmwpE.js";import{C as I}from"./CheckboxGroup-DJmJvWYH.js";import{C as G}from"./Checkbox-ptjXMIs0.js";import{T as t}from"./TextField-B2V50k6-.js";import{S as l}from"./Select-DCEYGw-Z.js";import{L as p}from"./ListBoxItem-CXv_lhD4.js";import{B as a}from"./Button-Bw1mXw0X.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B73muxhO.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-dfBlIUiS.js";import"./useFocusRing-B1zsHiit.js";import"./index-BUT5P9H-.js";import"./index-CgWBRnNX.js";import"./clsx-Ciqy0D92.js";import"./Group-D7dPrVbP.js";import"./FieldError-Bkpg5gnq.js";import"./Text-D5Dq4q45.js";import"./Text-DDwjjFnB.js";import"./Button-DSjX8i_m.js";import"./Hidden-D7A9_Rse.js";import"./useLabels-BqfQS0uq.js";import"./useButton-oYO7zjMC.js";import"./SelectionIndicator-CcF_Y5ct.js";import"./useField-lTpGylRL.js";import"./VisuallyHidden-CKITv4VW.js";import"./useControlledState-BaQo_f5T.js";import"./Label-BuuWS3DT.js";import"./Dialog-C261NJAw.js";import"./RSPContexts-DA83ZcWW.js";import"./OverlayArrow-CTH9LQ8k.js";import"./useResizeObserver-BrFLorgc.js";import"./Collection-Cywdh-W1.js";import"./index-lje2h9lu.js";import"./Separator-D8SADm8K.js";import"./SelectionManager-C9R0-jGz.js";import"./useEvent-BxSLArWq.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-gEBlcK5R.js";import"./ListKeyboardDelegate-BlP5VjP_.js";import"./PressResponder-CuinuHt0.js";import"./useLocalizedStringFormatter-uC-u8m9n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2iCZixk.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-D3PqQT5R.js";import"./createLucideIcon-DuvGCIEA.js";import"./useLocalizedStringFormatter-BApN70s6.js";import"./Heading-DZRygZKP.js";import"./info-w7z6wdWt.js";import"./Popover-DK1z9kYJ.js";import"./check-B-k24r0c.js";import"./useToggleState-Cved7GcD.js";import"./TextFieldBase-u8TPbdha.js";import"./Input-CPKSgo7K.js";import"./useTextField-ClhpYlTr.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BhQSnQ43.js";import"./DragAndDrop-DOh8ZvWk.js";import"./inertValue-DwZdN77P.js";import"./useListState-Bs9oWnFr.js";import"./Tag-DDFvKRCq.js";import"./useHighlightSelectionDescription-CLm5qnyT.js";import"./useUpdateEffect-CkRKkXMC.js";import"./useHasTabbableChild-xN9xB0xQ.js";import"./chevron-down-BMbhyeAE.js";import"./Virtualizer-dWMyTVpt.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
