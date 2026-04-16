import{j as e}from"./iframe-Xm_9cv73.js";import{c}from"./Form-bvdt1e3R.js";import{G as d}from"./Grid-u2LOA3FE.js";import{G as i}from"./GridItem-D12aykyZ.js";import{a as x,R as u}from"./Radio-BY2piQWi.js";import{C as I}from"./CheckboxGroup-C9jpJ9g0.js";import{C as G}from"./Checkbox-D5Czp1TX.js";import{T as t}from"./TextField-D5UvCAer.js";import{S as l}from"./Select-CPKxfqRp.js";import{L as p}from"./ListBoxItem-DJBe1e7e.js";import{B as a}from"./Button-Da8bQidF.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-B1Kohi3p.js";import"./utils-BrYTleyQ.js";import"./clsx-B-dksMZM.js";import"./index-Cjq5DljI.js";import"./index-B7N2Cx5U.js";import"./clsx-Ciqy0D92.js";import"./Group-CCaYHNjE.js";import"./FieldError-DghDJU9N.js";import"./Text-83WNws37.js";import"./Text-C4UzyOu1.js";import"./Button-DVfOBJT3.js";import"./Hidden-BZlSwNP_.js";import"./useLabel-DzdXQuC_.js";import"./useLabels-C-FgVELl.js";import"./useButton-BE-XYmko.js";import"./SelectionIndicator-DtMeBzWu.js";import"./useField-CVw2OaLJ.js";import"./VisuallyHidden-BGkpKKxN.js";import"./useControlledState-B_fJsoKU.js";import"./Label-CdcGa_gF.js";import"./Dialog-C69eZzVq.js";import"./RSPContexts-D8VaqtGQ.js";import"./OverlayArrow-SVU9nlq4.js";import"./useResizeObserver-BmXoXVDq.js";import"./Collection-DrnWUacn.js";import"./index-BdyOfa6A.js";import"./Separator-Dp2EBKtN.js";import"./SelectionManager-CkZyscrj.js";import"./useEvent-IJcG7rNp.js";import"./scrollIntoView-DLCl9E_L.js";import"./useDescription-jUlzP2-m.js";import"./ListKeyboardDelegate-Bo3okK2V.js";import"./PressResponder-CKN6Vp37.js";import"./useLocalizedStringFormatter-Df4Fg5xM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwL4Kwi0.js";import"./getScrollParent-DW5MB0xc.js";import"./ModalOverlay-C-mWmmh2.js";import"./x-CXw9u6Gz.js";import"./createLucideIcon-9sC3-GJ0.js";import"./useLocalizedStringFormatter-DWIBY6KU.js";import"./Heading-Bg7Vp_mI.js";import"./info-DlFwDLPB.js";import"./Popover-B9hrRJtJ.js";import"./check-DrZx5Lm6.js";import"./useToggleState-BcwzjPtu.js";import"./TextFieldBase-qoUJf2jI.js";import"./Input-Bkd8beF6.js";import"./useTextField-DhuoEbb8.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DYz7rmAQ.js";import"./DragAndDrop-ImF7Ht3y.js";import"./inertValue-CXOxFAAq.js";import"./useListState-NEmf9o7Z.js";import"./TagGroup-DY7He77e.js";import"./useHighlightSelectionDescription-BKIL3Ht-.js";import"./useUpdateEffect-ZJhMBJ1t.js";import"./useHasTabbableChild-Cgri4zyy.js";import"./chevron-down-CJ4WjabZ.js";import"./Virtualizer-CwOaU6s0.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
