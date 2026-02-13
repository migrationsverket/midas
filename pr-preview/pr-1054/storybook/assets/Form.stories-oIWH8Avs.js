import{j as e}from"./iframe-BJoNrLOB.js";import{$ as c}from"./Form-Dl7Kj9Mq.js";import{G as d}from"./Grid-DwOdoKPe.js";import{G as i}from"./GridItem-UR8DeYkO.js";import{a as x,R as u}from"./Radio-DoKyzZ7J.js";import{C as I}from"./CheckboxGroup-D-Bk6L56.js";import{C as G}from"./Checkbox-Dwn2cg9I.js";import{T as t}from"./TextField-CbpKBvzK.js";import{S as l}from"./Select-BuBQs7PX.js";import{L as p}from"./ListBoxItem-B4tEk5s_.js";import{B as a}from"./Button-C_BpUAF5.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-8eOeUZvs.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-MpE-MHxZ.js";import"./useFocusRing-xf59S3G4.js";import"./index-TiYrZJQV.js";import"./index-BrwANR0V.js";import"./clsx-Ciqy0D92.js";import"./Group-ZMalOpZC.js";import"./FieldError-BeL_eVmM.js";import"./Text-Nm20Pdh1.js";import"./Text-CXbyhWc_.js";import"./Button-BoY_ExKw.js";import"./Hidden-CN18PH3U.js";import"./useLabels-Dsw7O8PH.js";import"./useButton-Dmh7lGXM.js";import"./SelectionIndicator-B7MHA78e.js";import"./useField-BeLJlWfS.js";import"./VisuallyHidden-Bokzl-n3.js";import"./useControlledState-DXjBUGo4.js";import"./Label-DC8z0e73.js";import"./Dialog-DHZzYmYR.js";import"./RSPContexts-CCiC92U9.js";import"./OverlayArrow-CZ19wXXV.js";import"./useResizeObserver-Cc5YSlIU.js";import"./Collection-D-wvIYwO.js";import"./index-CtHKFZnr.js";import"./Separator-CgFexpSf.js";import"./SelectionManager-C5N71AQX.js";import"./useEvent-B_iQ0eAu.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BwTDoIfu.js";import"./ListKeyboardDelegate-CJschMJ8.js";import"./PressResponder-BA7OUFak.js";import"./useLocalizedStringFormatter-Ck15hl-3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTTNfr-O.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DSXcAS6f.js";import"./createLucideIcon-BX3h9Owr.js";import"./useLocalizedStringFormatter-elsdN5ae.js";import"./Heading-C7tT-cfJ.js";import"./info-1ZTJbKVh.js";import"./Popover-DjkV7LeP.js";import"./check-Bz3oVWhx.js";import"./useToggleState-nQMApmjz.js";import"./TextFieldBase-BHUA9yqc.js";import"./Input-VlwYDG4z.js";import"./useTextField-DvmZphOA.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D5taG9EK.js";import"./DragAndDrop-CLuCRTW2.js";import"./inertValue-alUGdZ5W.js";import"./useListState-BD3QynO6.js";import"./Tag-BkO-B8Ul.js";import"./useHighlightSelectionDescription-BV-yb0K3.js";import"./useUpdateEffect-BsGHctbX.js";import"./useHasTabbableChild-DN1weB3o.js";import"./chevron-down-DwtsXVxD.js";import"./Virtualizer-DwsGJmKk.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
