import{j as e}from"./iframe-BcYLPvvG.js";import{$ as c}from"./Form-wxpWhKM7.js";import{G as d}from"./Grid-B0b0S45_.js";import{G as i}from"./GridItem-C3bx8YTi.js";import{T as t}from"./TextField-Dt3LnXNJ.js";import{S as l}from"./Select-CWuPnC8S.js";import{B as a}from"./Button-C21XDfHm.js";import{R as x,a as u}from"./Radio-xcyeUPIP.js";import{C as I}from"./CheckboxGroup-DFq4bfdd.js";import{C as G}from"./Checkbox-yY6uB3gd.js";import{L as p}from"./ListBoxItem-ddwPb0JK.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DuGQH1VB.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-84Kof8wr.js";import"./useFocusRing-mtX7PO0G.js";import"./index-8OTKUVm4.js";import"./index-DIjlvTAp.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DEXvatvA.js";import"./TextField-BZZyHQyP.js";import"./FieldError-DiuvsHLT.js";import"./Text-Ctvw4Oon.js";import"./Text-BmaZQl73.js";import"./RSPContexts-BtVOhJLL.js";import"./Group-kOYOeOJW.js";import"./Input-BHzYlSWp.js";import"./Hidden-tUEU5F-V.js";import"./Button-Dk0RbBuY.js";import"./useLabels-h9x39qhJ.js";import"./useButton-CxdPVYy7.js";import"./useTextField-eRV-Ef8i.js";import"./useControlledState-Cl08l4Il.js";import"./useField-DopM9hg3.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Bit6Cf-h.js";import"./Dialog-D-fPsuyf.js";import"./OverlayArrow-BkRfPN1b.js";import"./useResizeObserver-DePrYVsQ.js";import"./Collection-CCHEZMzV.js";import"./index-Mki23RMT.js";import"./Separator-BUeiXq91.js";import"./SelectionManager-CDiMoMVa.js";import"./useEvent-HfrKpO3k.js";import"./scrollIntoView-BpuKwFUC.js";import"./SelectionIndicator-zLjbsGri.js";import"./useDescription-BkSntyEJ.js";import"./ListKeyboardDelegate-O58EAQ7o.js";import"./PressResponder-K1Un6ieo.js";import"./useLocalizedStringFormatter-CEq-wPRG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DblQOhU2.js";import"./VisuallyHidden-B8-euVpR.js";import"./x-xAvv45r1.js";import"./createLucideIcon-h4XNnCB9.js";import"./useLocalizedStringFormatter-C15hJ3-x.js";import"./Heading-B9CW9bk0.js";import"./info-DCBVzFQl.js";import"./Popover-Bqe-56I-.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BKNa-0Lo.js";import"./DragAndDrop-DPvrtmhy.js";import"./inertValue-DyNffFML.js";import"./useListState-A-jmqTV8.js";import"./Tag-BmdhtJSl.js";import"./useHighlightSelectionDescription-QHB8FEK1.js";import"./useUpdateEffect-DlT6-WM5.js";import"./useHasTabbableChild-Ctt2JCmB.js";import"./chevron-down-BprOvOvW.js";import"./Button.module-CtQ1deO8.js";import"./check-OlfJk0El.js";import"./useToggleState-DZyHUlpN.js";import"./Virtualizer-3qAt10B7.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
