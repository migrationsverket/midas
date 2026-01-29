import{j as e}from"./iframe-D3uV68TR.js";import{$ as c}from"./Form-B33azaQ8.js";import{G as d}from"./Grid-CgbQ_fvd.js";import{G as i}from"./GridItem-BJekkJZr.js";import{T as t}from"./TextField-Bp-CwXUK.js";import{S as l}from"./Select-iZmCkJEX.js";import{B as a}from"./Button-DmYYanIx.js";import{R as x,a as u}from"./Radio-BV6MS-r2.js";import{C as I}from"./CheckboxGroup-B4SOz602.js";import{C as G}from"./Checkbox-cTzUJLPa.js";import{L as p}from"./ListBoxItem-aVw7LEZ5.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-7nr-C6ys.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CyzYdU7h.js";import"./useFocusRing-DfPZHRVl.js";import"./index-INuPvpIH.js";import"./index-DUb-e4iZ.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-4lMBZxB9.js";import"./TextField-teelpkKs.js";import"./FieldError-DuEfq7zL.js";import"./Text-C9SR50_u.js";import"./Text-DahtYGrH.js";import"./RSPContexts-Cp9yvvLl.js";import"./Group-Y6f_xvup.js";import"./Input-DXpPU7xa.js";import"./Hidden-0XUUlgXf.js";import"./Button-BeBrTPVv.js";import"./useLabels-D4jFczgK.js";import"./useButton-B0sADiYr.js";import"./useTextField-C863LH_y.js";import"./useControlledState-uFjFm_rq.js";import"./useField-D48HVbT8.js";import"./TextField.module-1fNSVGjT.js";import"./Label-Buo218Sc.js";import"./Dialog-BRQ3Z91e.js";import"./OverlayArrow-DIkwCjhP.js";import"./useResizeObserver-UeGHsBBS.js";import"./Collection-DGF7qU3T.js";import"./index-DqtRELXK.js";import"./Separator-Br_OEoJ9.js";import"./SelectionManager-kc8cebYT.js";import"./useEvent-C0nrqgpJ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-COEdmALQ.js";import"./useDescription-DOabLsSP.js";import"./ListKeyboardDelegate-Skhb0kqg.js";import"./PressResponder-COEQs3jX.js";import"./useLocalizedStringFormatter-R3NfFNfF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B-bSYUc5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B8aOQmln.js";import"./x-Bx0ljM1v.js";import"./createLucideIcon-Pfr8ga1h.js";import"./useLocalizedStringFormatter-DdjluxKF.js";import"./Heading-CKBS1yVh.js";import"./info-DoMB6U7o.js";import"./Popover-B9b7qbaZ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-_oke7or9.js";import"./DragAndDrop-CmNp5D3c.js";import"./inertValue-9RqoP0jC.js";import"./useListState-D1K17sD-.js";import"./Tag-CJlTCq9X.js";import"./useHighlightSelectionDescription-eXkL_9iS.js";import"./useUpdateEffect-iyIIEQ43.js";import"./useHasTabbableChild-gYvcXp4e.js";import"./chevron-down-ClvnfSad.js";import"./Button.module-Co5e5YHp.js";import"./check-DDTQN1E0.js";import"./useToggleState-Bct0BbW7.js";import"./Virtualizer-BbBSPx3m.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
