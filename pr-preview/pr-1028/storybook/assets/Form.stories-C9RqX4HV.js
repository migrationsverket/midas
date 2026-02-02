import{j as e}from"./iframe-Ct1ppXcO.js";import{$ as c}from"./Form-BEQJjWQu.js";import{G as d}from"./Grid-CDRXWGCx.js";import{G as i}from"./GridItem-D7OdkeUY.js";import{a as x,R as u}from"./Radio-CpWOB5IB.js";import{C as I}from"./CheckboxGroup-CeKQelEQ.js";import{C as G}from"./Checkbox-BT6bQpzV.js";import{T as t}from"./TextField-BWkDynaK.js";import{S as l}from"./Select-DTb72i33.js";import{L as p}from"./ListBoxItem-Bi0Trlj2.js";import{B as a}from"./Button-DGYQQhVQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C-gSI02s.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CbVk8cPB.js";import"./useFocusRing-D22KqsH2.js";import"./index-BZ4GCs5a.js";import"./index-D7mK5nsc.js";import"./clsx-Ciqy0D92.js";import"./Group-hdWgJpAB.js";import"./FieldError-MCWN8uVd.js";import"./Text-bA96Aj1V.js";import"./Text-BLnUO4XT.js";import"./Button-Co_Oqhu6.js";import"./Hidden-BnjpnQVL.js";import"./useLabels-BzsjX-uz.js";import"./useButton-BPFKgoal.js";import"./SelectionIndicator-DQUn9HeB.js";import"./useField-C735bYz9.js";import"./VisuallyHidden-CPthcFHg.js";import"./useControlledState-BMKsiY2b.js";import"./Label-CYtVDj30.js";import"./Dialog-cs7NWbrU.js";import"./RSPContexts-DiUMKu6B.js";import"./OverlayArrow-Cv6Hgff_.js";import"./useResizeObserver-CiFVHVXh.js";import"./Collection-BfE2ozAg.js";import"./index-SMovkzve.js";import"./Separator-Dk7hiyQq.js";import"./SelectionManager-CFIbccgx.js";import"./useEvent-CQqH1fQz.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D0KYtWwq.js";import"./ListKeyboardDelegate-DOcJQ6-3.js";import"./PressResponder-CMjUmock.js";import"./useLocalizedStringFormatter-ugzqn4XO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Be5ZenH1.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DhEC6HJx.js";import"./createLucideIcon-BuchYPst.js";import"./useLocalizedStringFormatter-k4Ox2Lj6.js";import"./Heading-8Bvul9yl.js";import"./info-EPuz7-Fk.js";import"./Popover-NWW3-HoD.js";import"./check-Bla-kzTw.js";import"./useToggleState-D7XxsBsL.js";import"./TextFieldBase-C4mmaCMG.js";import"./TextField-CzdR1Ngy.js";import"./Input-CFNJPp2B.js";import"./useTextField-BLmDom6j.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BvAAVFIY.js";import"./DragAndDrop-Dh7dpGQ1.js";import"./inertValue-DgDbAbf2.js";import"./useListState-DiEKa7R2.js";import"./Tag-Cjyg4EHd.js";import"./useHighlightSelectionDescription-Ddt3LQeO.js";import"./useUpdateEffect-PF7DIFvS.js";import"./useHasTabbableChild-Cf8g4omU.js";import"./chevron-down-RqCrntBZ.js";import"./Virtualizer-BUwSBFEH.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
