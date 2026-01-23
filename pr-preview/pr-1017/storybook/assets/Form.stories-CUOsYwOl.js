import{j as e}from"./iframe-CtUIZbYn.js";import{$ as c}from"./Form-t1tJA9Vg.js";import{G as d}from"./Grid-BqwbY4YR.js";import{G as i}from"./GridItem-C8ujRcsv.js";import{T as t}from"./TextField-BBW2PlhQ.js";import{S as l}from"./Select-DK7qyTC9.js";import{B as a}from"./Button-DQw6C-et.js";import{R as x,a as u}from"./Radio-CUIa5TLc.js";import{C as I}from"./CheckboxGroup-CGSu7kzw.js";import{C as G}from"./Checkbox-CTXeHALx.js";import{L as p}from"./ListBoxItem-DqtHzkgc.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cf9IpOmc.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BMvR5o2g.js";import"./useFocusRing-6a21M1IJ.js";import"./index-Dm2Kv3ch.js";import"./index-KufTmFNN.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CtC8-iit.js";import"./TextField-OnITojiV.js";import"./FieldError-CbQk5RgW.js";import"./Text-yTCGhOU_.js";import"./Text-XrKnwqSN.js";import"./RSPContexts-DeSbQpXu.js";import"./Group-CwloJ9ed.js";import"./Input-CkmMlGcd.js";import"./Hidden-BI0VMXn5.js";import"./Button-CgO5Dbzf.js";import"./useLabels-CjFYjORR.js";import"./useButton-zj2RIXSA.js";import"./useTextField-C1CAXUyf.js";import"./useControlledState-BQ5cbGs8.js";import"./useField-BYTu8s8W.js";import"./TextField.module-1fNSVGjT.js";import"./Label-DqmLO3y0.js";import"./Dialog-DnPuUQE-.js";import"./OverlayArrow-DFpEzFlA.js";import"./useResizeObserver-_aB2uX1w.js";import"./Collection-8HCxu7jq.js";import"./index-DJjmA-yx.js";import"./Separator-BA-1xW2a.js";import"./SelectionManager-DT2Uo_1q.js";import"./useEvent-DO7npvYY.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ZZ6Qs1R8.js";import"./useDescription-BIEKqWPT.js";import"./ListKeyboardDelegate-8pxwgSLl.js";import"./PressResponder-BXDqNV48.js";import"./useLocalizedStringFormatter-BowEyYzH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTw-OGWI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D6i0gXjo.js";import"./x-CTAACZ5M.js";import"./createLucideIcon-BRaxuuf5.js";import"./useLocalizedStringFormatter-BZJ3lJE8.js";import"./Heading-_1NDeXcI.js";import"./info-Bd3JPboh.js";import"./Popover-CmX6VYBg.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dxu_aeh-.js";import"./DragAndDrop-CSjW8EaY.js";import"./inertValue-BuhEuX5M.js";import"./useListState-Ddv3LVGO.js";import"./Tag-Fs5tW95A.js";import"./useHighlightSelectionDescription-DUQj9rhc.js";import"./useUpdateEffect-B3DpEwN1.js";import"./useHasTabbableChild--JVe2vVH.js";import"./chevron-down-NVotEWbD.js";import"./Button.module-Co5e5YHp.js";import"./check-BqCkXcIC.js";import"./useToggleState-DYVY7h6I.js";import"./Virtualizer-Bo_peLB2.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
