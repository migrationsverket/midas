import{j as e}from"./iframe-DTgf2yWr.js";import{$ as c}from"./Form-CxvCqnnD.js";import{G as d}from"./Grid-XF11m06X.js";import{G as i}from"./GridItem-CTAxEJVQ.js";import{a as x,R as u}from"./Radio-DPSfEW-M.js";import{C as I}from"./CheckboxGroup-DiBeOO9M.js";import{C as G}from"./Checkbox-CuietWnt.js";import{T as t}from"./TextField-D4lc5I6K.js";import{S as l}from"./Select-8XCI6gup.js";import{L as p}from"./ListBoxItem-biahlwO5.js";import{B as a}from"./Button-ni8lscHZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DzwNYuTN.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bjsb6Uuq.js";import"./useFocusRing-CP7gcATu.js";import"./index-vkqPEYc_.js";import"./index-BH-DXcRM.js";import"./clsx-Ciqy0D92.js";import"./Group-DtHBNqvy.js";import"./FieldError-D0N2b3Uz.js";import"./Text-bWE3sRjS.js";import"./Text-BnRqnZ91.js";import"./Button-DsiJh3rg.js";import"./Hidden-CB9dI_i8.js";import"./useLabels-BOW8HuY_.js";import"./useButton-C1yhLz7X.js";import"./SelectionIndicator-CcmcrDmB.js";import"./useField-CIGO5Ju_.js";import"./VisuallyHidden-DLhSHTT7.js";import"./useControlledState-SjDZU1Af.js";import"./Label-Bkfg9EaC.js";import"./Dialog-BWOoWvA2.js";import"./RSPContexts-B_H1Uz4-.js";import"./OverlayArrow-BOY7m4yS.js";import"./useResizeObserver-BEv_VwN-.js";import"./Collection-C0O46JBs.js";import"./index-BLfu4a51.js";import"./Separator-CtW0zblt.js";import"./SelectionManager-xfeP_COB.js";import"./useEvent-DuxHD3US.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Bv7lMAxy.js";import"./ListKeyboardDelegate-bR_oZAxF.js";import"./PressResponder-CCQ2ymDO.js";import"./useLocalizedStringFormatter-DNR4J-Wr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DWaJ-2B4.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Dr1VccyY.js";import"./createLucideIcon-D9vwcDME.js";import"./useLocalizedStringFormatter-BDsobOj3.js";import"./Heading-BBS5QCZB.js";import"./info-ChOzVc1T.js";import"./Popover-KtTwqxdv.js";import"./check-CrMqV6Km.js";import"./useToggleState-BQJdJFEO.js";import"./TextFieldBase-C-mDr_lL.js";import"./Input-BmLtWtA-.js";import"./useTextField-Ca-oLaHa.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D3jC6oVK.js";import"./DragAndDrop-QgNBJUHK.js";import"./inertValue-Cr-g2clw.js";import"./useListState-DuPmme03.js";import"./TagGroup-BhR1JmNq.js";import"./useHighlightSelectionDescription-BjUWVWtL.js";import"./useUpdateEffect-D9am1KDI.js";import"./useHasTabbableChild-C5GtmKLs.js";import"./chevron-down-Cbot1QQv.js";import"./Virtualizer-c9KYf5iM.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
