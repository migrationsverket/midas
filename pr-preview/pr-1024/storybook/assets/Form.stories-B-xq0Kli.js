import{j as e}from"./iframe-CxaG9I7P.js";import{$ as c}from"./Form-BP8EURmm.js";import{G as d}from"./Grid-CWWQKjIS.js";import{G as i}from"./GridItem-C8YMIcNm.js";import{T as t}from"./TextField-Cr52o7Xm.js";import{S as l}from"./Select-B668m1vF.js";import{B as a}from"./Button-CzqSm8W5.js";import{R as x,a as u}from"./Radio-WobT8jVS.js";import{C as I}from"./CheckboxGroup-BBqTzsDq.js";import{C as G}from"./Checkbox-DcFZl-qF.js";import{L as p}from"./ListBoxItem-DuvIDKZU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Czlm0UBK.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-1UvULbqT.js";import"./useFocusRing-B_8tQUZZ.js";import"./index-t5CRhWba.js";import"./index-C83Nl3_M.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DaYPAVXv.js";import"./TextField-DdnMxKnz.js";import"./FieldError-C4Y2gpA2.js";import"./Text-B1ar5pgm.js";import"./Text-Bsr9FprL.js";import"./RSPContexts-CqSw1FEj.js";import"./Group-lJVyNpHx.js";import"./Input-5YZxciZR.js";import"./Hidden-C8k63pZ_.js";import"./Button-CmgJ4xb0.js";import"./useLabels-Q9h_GLhy.js";import"./useButton-BF83G0Tr.js";import"./useTextField-TBgMuNXT.js";import"./useControlledState-BJUuheTr.js";import"./useField-eXjHNk9f.js";import"./TextField.module-1fNSVGjT.js";import"./Label-C9x5OzrZ.js";import"./Dialog-DYdk1Gmn.js";import"./OverlayArrow-GOTvl9Ar.js";import"./useResizeObserver-CKfl-E9w.js";import"./Collection-D-DLhQ9U.js";import"./index-3NXgPggs.js";import"./Separator-Dd4TCG1R.js";import"./SelectionManager-CeziSyDL.js";import"./useEvent-DnFFUpVr.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B6rWNH3A.js";import"./useDescription-Bku4Pvc9.js";import"./ListKeyboardDelegate-BlrHGTdI.js";import"./PressResponder-Bfj7Bjbd.js";import"./useLocalizedStringFormatter-BKXqtz3g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CURYxixi.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C45-MbEO.js";import"./x-CeZp12Sq.js";import"./createLucideIcon-Bvlak_27.js";import"./useLocalizedStringFormatter-CcPkzblS.js";import"./Heading-BCnUBzk0.js";import"./info-Dd8P1yaE.js";import"./Popover-l1ZlkkXZ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C83l4cCy.js";import"./DragAndDrop-Dpbzm0Xt.js";import"./inertValue-Bu42HiLz.js";import"./useListState-B_utSV55.js";import"./Tag-DJF8fGys.js";import"./useHighlightSelectionDescription-CIhSqmB4.js";import"./useUpdateEffect-CwgQh4nB.js";import"./useHasTabbableChild-CYYBqvE8.js";import"./chevron-down-BdCqqFZO.js";import"./Button.module-Co5e5YHp.js";import"./check-C99l1nb6.js";import"./useToggleState-BzwvRsCu.js";import"./Virtualizer-2xd3V6jS.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
