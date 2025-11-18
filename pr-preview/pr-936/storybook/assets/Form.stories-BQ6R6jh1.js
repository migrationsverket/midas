import{j as e}from"./iframe-1ypBIpqt.js";import{$ as c}from"./Form-DAQzpkwF.js";import{G as d}from"./Grid-jZ0cu7wO.js";import{G as i}from"./GridItem-UBGyPq_9.js";import{T as t}from"./TextField-DAIGDlbt.js";import{S as l}from"./Select-DEi1_Keo.js";import{B as a}from"./Button-Cxrzoy92.js";import{R as x,a as u}from"./Radio-B7IAlMTP.js";import{C as I}from"./CheckboxGroup-BXf_Gz11.js";import{C as G}from"./Checkbox-CV1c_2Az.js";import{L as p}from"./ListBoxItem-B7dkf7NI.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B8wMECB5.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BQeFm4UE.js";import"./useFocusRing-BE60GF6p.js";import"./index-OME_eh5M.js";import"./index-bt6Kq2KN.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BTj0acB6.js";import"./TextField-Ct9bjaMp.js";import"./FieldError-D4xQIw7Q.js";import"./Text-0r7LapIC.js";import"./Text-B5RNhX_R.js";import"./RSPContexts-BL8PJjGn.js";import"./Group-ChVZpX5C.js";import"./Input-7SAs_smO.js";import"./Hidden-JN6h68tz.js";import"./Button-sTPpWxn_.js";import"./useLabels-LwVbPde8.js";import"./useButton-CiHam1fw.js";import"./useTextField-DKMDzkZI.js";import"./useControlledState-Dh7cHA4x.js";import"./useField-BDAsYkFm.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-O-uuT901.js";import"./Dialog-BaNJ9vqK.js";import"./OverlayArrow-Ot35ddh7.js";import"./useResizeObserver-BwXd_kUk.js";import"./Collection-Coqx6eiU.js";import"./index-DEwtnGH3.js";import"./Separator-D4ZgytYp.js";import"./SelectionManager-C3-Fl_-R.js";import"./useEvent-Cutut5XJ.js";import"./scrollIntoView-C9GMTZXb.js";import"./SelectionIndicator-CSJULSgo.js";import"./useDescription-BbB1SG_e.js";import"./ListKeyboardDelegate-D_W7JyfP.js";import"./PressResponder-DbFB1V-x.js";import"./useLocalizedStringFormatter-DyDkLKc1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CZ3e9-X3.js";import"./VisuallyHidden-C69N3wb4.js";import"./useLocalizedStringFormatter-WJZfuSlE.js";import"./x-CBuOp1N4.js";import"./createLucideIcon-C531gWR5.js";import"./Heading-yWckuHhd.js";import"./info-BNJPoxUQ.js";import"./Popover-y-XhwUhv.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BnViY_hl.js";import"./DragAndDrop-D6YiVNmh.js";import"./inertValue-CY5y8cwr.js";import"./useListState-CghaGK8z.js";import"./Tag-DH-YMKRc.js";import"./useHighlightSelectionDescription-CLi98FiO.js";import"./useUpdateEffect-B9Gm1wFD.js";import"./useHasTabbableChild-D9ZvUMZh.js";import"./chevron-down-YwHbqOjB.js";import"./Button.module-CtQ1deO8.js";import"./check-BDDdXbbv.js";import"./useToggleState-CoBG1jtK.js";import"./Virtualizer-C5Fpyo2R.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
