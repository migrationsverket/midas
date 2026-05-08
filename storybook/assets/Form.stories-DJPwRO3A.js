import{j as e}from"./iframe-DG7j_jog.js";import{c}from"./Form-D8vhhRij.js";import{G as d}from"./Grid-946tT498.js";import{G as i}from"./GridItem-aCL6rQlh.js";import{a as x,R as u}from"./Radio-BM8tm3Uv.js";import{C as I}from"./CheckboxGroup-PLwwZIV2.js";import{C as G}from"./Checkbox-fZLPiyq_.js";import{T as t}from"./TextField-CHe2RaPq.js";import{S as l}from"./Select-5MZrSuy2.js";import{L as p}from"./ListBoxItem-C5a7TPoG.js";import{B as a}from"./Button-KUvfLJ-A.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CVU8iu1p.js";import"./utils-DlqTy2YG.js";import"./clsx-B-dksMZM.js";import"./index-D_RAWMYY.js";import"./index-6UXGLZBQ.js";import"./clsx-Ciqy0D92.js";import"./Group-BVfLijgn.js";import"./FieldError-Jed7qGAw.js";import"./Text-qxRWFYP_.js";import"./Text-BYthEMg3.js";import"./Button-BXZJnhMA.js";import"./Hidden-C_hvN9In.js";import"./useLabel-C_5Blhsu.js";import"./useLabels-DqxGA6IW.js";import"./useButton-CBCUfkJC.js";import"./SelectionIndicator-BfpTMdkJ.js";import"./useField-NmEqGXbM.js";import"./VisuallyHidden-DFIbjjfa.js";import"./useControlledState-D0o-1ht4.js";import"./Label-JaBUqnAH.js";import"./Dialog-DkQl_2bT.js";import"./RSPContexts-Dpj1kihF.js";import"./OverlayArrow-CqUKnp_Z.js";import"./useResizeObserver-C92Nd9go.js";import"./Collection-BUv_wNfi.js";import"./index-DyWbixMj.js";import"./Separator-CJz_cOZy.js";import"./SelectionManager-DqpIm14G.js";import"./useEvent-DfWqyckn.js";import"./scrollIntoView-BjyHJlah.js";import"./useDescription-C3vr3r7Y.js";import"./ListKeyboardDelegate-CIjDbHgv.js";import"./PressResponder-Bk9-BZgU.js";import"./useLocalizedStringFormatter-Cy6w6_S0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BGtZYYLT.js";import"./getScrollParent-BNyZCVqh.js";import"./ModalOverlay-Cyy6m_E0.js";import"./x-XMY5sYEL.js";import"./createLucideIcon-DciogvgI.js";import"./useLocalizedStringFormatter-C5OlVKSb.js";import"./Heading-Vv9pEtkq.js";import"./info-GQ5NDJzH.js";import"./Popover-cNXYhacS.js";import"./check-Dj3ll4xw.js";import"./useToggleState-CzZ6s7RW.js";import"./TextFieldBase-Cdd36xzE.js";import"./Input-Dd5m--iu.js";import"./useTextField-C0DEaxu-.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-q7mFRGFH.js";import"./DragAndDrop-Q66dtIuY.js";import"./inertValue-CEiT5r-W.js";import"./useListState-BBlq3E4m.js";import"./TagGroup-H7W1yg5r.js";import"./useHighlightSelectionDescription-D7NpTWgN.js";import"./useUpdateEffect-B4hi1Hnu.js";import"./useHasTabbableChild-Cq6n8YpW.js";import"./chevron-down-CGZRPkn8.js";import"./Virtualizer-D5nLZivS.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
