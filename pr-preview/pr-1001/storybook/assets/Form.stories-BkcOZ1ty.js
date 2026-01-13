import{j as e}from"./iframe-B91-x9Zu.js";import{$ as c}from"./Form-BZn8tv4U.js";import{G as d}from"./Grid-BJ58LmEr.js";import{G as i}from"./GridItem-CdvYrPRF.js";import{T as t}from"./TextField-BeimFyOz.js";import{S as l}from"./Select-DAySDMEG.js";import{B as a}from"./Button-BHZ4Xr_y.js";import{R as x,a as u}from"./Radio-CFrIOt9f.js";import{C as I}from"./CheckboxGroup-BUgYpw-A.js";import{C as G}from"./Checkbox-C5kj1QPd.js";import{L as p}from"./ListBoxItem-sUA4kyzC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BDq5TyEB.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B6kHCZJ0.js";import"./useFocusRing-CVRmAsyH.js";import"./index-BXX4d8bD.js";import"./index-DN9ppUS7.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-De0goIcT.js";import"./TextField-Cpa38aiF.js";import"./FieldError-CWETj3Vl.js";import"./Text-BfJqqx0j.js";import"./Text-Dax5tWzo.js";import"./RSPContexts-B5qBvukQ.js";import"./Group-DYG2hXzO.js";import"./Input-DKgSEAc5.js";import"./Hidden-BYWp7QJL.js";import"./Button-DX88RyMP.js";import"./useLabels-Dwk7hNIX.js";import"./useButton-DST6NVbU.js";import"./useTextField-F9r4DyAD.js";import"./useControlledState-BrOLRbiU.js";import"./useField-DuGzXB7t.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-XXYib5Pf.js";import"./Dialog-BHcXoJaA.js";import"./OverlayArrow-B3LgCbWf.js";import"./useResizeObserver-BzC1JvQl.js";import"./Collection-Db-WTB6b.js";import"./index-Dh1J3Jws.js";import"./Separator-B1ywj6iL.js";import"./SelectionManager-BuCjJjD3.js";import"./useEvent-CZcdSbJd.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C7VGJBNi.js";import"./useDescription-C659JRkX.js";import"./ListKeyboardDelegate-wp5rssSn.js";import"./PressResponder-BUy7-lee.js";import"./useLocalizedStringFormatter-tMYY7oTH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BSd-_azi.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-rbN5cvZ7.js";import"./x-CKESvSm0.js";import"./createLucideIcon-BFyGBevv.js";import"./useLocalizedStringFormatter-C0-nSA3b.js";import"./Heading-B_bc6UXm.js";import"./info-DVS-AOjB.js";import"./Popover-DQtrO59A.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DJJ0Od5A.js";import"./DragAndDrop-C3z4NGa3.js";import"./inertValue-B11eivYZ.js";import"./useListState-ElG4A7BJ.js";import"./Tag-DPGGMI6b.js";import"./useHighlightSelectionDescription-C1H4-934.js";import"./useUpdateEffect-Djc3Aml-.js";import"./useHasTabbableChild-CiMOWeat.js";import"./chevron-down-CLqIKcq1.js";import"./Button.module-Co5e5YHp.js";import"./check-B7cU0C6y.js";import"./useToggleState-CyzMbEPn.js";import"./Virtualizer-B5QxeZPg.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
