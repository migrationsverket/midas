import{j as e}from"./iframe-hiMgqW0o.js";import{$ as c}from"./Form-BktoSPgT.js";import{G as d}from"./Grid-qkWxR3cy.js";import{G as i}from"./GridItem-CzW0VMwO.js";import{T as t}from"./TextField-C-HZ52By.js";import{S as l}from"./Select-DGpDZQ-A.js";import{B as a}from"./Button-BlGZsutW.js";import{R as x,a as u}from"./Radio-DVB-KW2E.js";import{C as I}from"./CheckboxGroup-CvArof2J.js";import{C as G}from"./Checkbox-PuDcJOI0.js";import{L as p}from"./ListBoxItem-BplplQXa.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-bOnY6DnA.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CBe-85YS.js";import"./useFocusRing-DgygcgT4.js";import"./index-EY6_MA1c.js";import"./index-CZjbkyzZ.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CgY_SUsD.js";import"./TextField-BgMOBLVA.js";import"./FieldError-CYiGGuhL.js";import"./Text-Cs9T2I4A.js";import"./Text-BiYaIxZf.js";import"./RSPContexts-Bv08kDFB.js";import"./Group-DqkVNwN_.js";import"./Input-B_Ox3LNb.js";import"./Hidden-BwH6JGlk.js";import"./Button-Nx19MEw4.js";import"./useLabels-CZOrLkCJ.js";import"./useButton-jWlGAFFg.js";import"./useTextField-B9NgK4Il.js";import"./useControlledState-nqlfkxpV.js";import"./useField-XdbO1scp.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Cw4FHS5Q.js";import"./Dialog-CdxWOMeL.js";import"./OverlayArrow-B2MH2h_R.js";import"./useResizeObserver-2nRjoHwy.js";import"./Collection--Cr6p3A_.js";import"./index-Bo0FTuaT.js";import"./Separator-Bz7MglOI.js";import"./SelectionManager-BMgFHoZb.js";import"./useEvent-CLzxZrGf.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-zyWPfFRK.js";import"./useDescription-BS7dus5h.js";import"./ListKeyboardDelegate-GTM4GyCw.js";import"./PressResponder-BuXRs-Y5.js";import"./useLocalizedStringFormatter-CNGHg5CX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-4zJnIxaj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BQSRSjgI.js";import"./x-s42iZrY-.js";import"./createLucideIcon-D6WxDmvc.js";import"./useLocalizedStringFormatter-CLWDM17i.js";import"./Heading-C4aZzm39.js";import"./info-CMNp_Gnb.js";import"./Popover-C3A9HBq_.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-SVImG35g.js";import"./DragAndDrop-BwfL8z2_.js";import"./inertValue-BZSc209c.js";import"./useListState-DC7jdSot.js";import"./Tag-cFHj4FxW.js";import"./useHighlightSelectionDescription-BV6X8iKO.js";import"./useUpdateEffect-CNlXjWYs.js";import"./useHasTabbableChild-B0MauoE3.js";import"./chevron-down--8CTt1aH.js";import"./Button.module-Co5e5YHp.js";import"./check-UBGezpjp.js";import"./useToggleState-D0Wnun0R.js";import"./Virtualizer-BNnYUDnu.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
