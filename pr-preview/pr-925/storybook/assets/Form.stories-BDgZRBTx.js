import{j as e}from"./iframe-Bj-I_53F.js";import{$ as c}from"./Form-BajHUc8X.js";import{G as d}from"./Grid-DKiG_px6.js";import{G as i}from"./GridItem-GmpS5YdZ.js";import{T as t}from"./TextField-4XVR_dEA.js";import{S as l}from"./Select-DojFr6JP.js";import{B as a}from"./Button-DjY0cfru.js";import{R as x,a as u}from"./Radio-DL18untx.js";import{C as I}from"./CheckboxGroup-gb58Df5l.js";import{C as G}from"./Checkbox-RwrSnV8_.js";import{L as p}from"./ListBoxItem-BYjoiwTJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-AYBXNHWH.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DawZfh6P.js";import"./useFocusRing-3Uqdh2tR.js";import"./index-Cr9mSzEt.js";import"./index-DRLQ3B3R.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-B5l-pva4.js";import"./TextField-Bxs1nm8n.js";import"./FieldError-QaZ2d8uP.js";import"./Text-DOZw3K2Z.js";import"./Text-BW7nmiG_.js";import"./RSPContexts-CldvHFix.js";import"./Group-CbeCE0dg.js";import"./Input-BkXPIH3c.js";import"./Hidden-C4NKfEwd.js";import"./Button-CYD4aiPQ.js";import"./useLabels-R0WNnhTM.js";import"./useButton--bsyIudm.js";import"./useTextField-CC_jrgcP.js";import"./useControlledState-C7UYN2s_.js";import"./useField-Co9IJsjf.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CkpabL1x.js";import"./Dialog-BMXojvkR.js";import"./OverlayArrow-Czv8iarU.js";import"./useResizeObserver-CDeWg4As.js";import"./Collection-Dv3QAqst.js";import"./index-Bvlh8tRR.js";import"./Separator-Ly1TdqAI.js";import"./SelectionManager-dMnowY7v.js";import"./useEvent-C0iCA9HD.js";import"./scrollIntoView-CR2ITi7r.js";import"./SelectionIndicator-irqqzVMw.js";import"./useDescription-D15WWjzT.js";import"./ListKeyboardDelegate-Cdrm69H0.js";import"./PressResponder-BFk5IEgx.js";import"./useLocalizedStringFormatter-DCLhEoY8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DGhJvWNi.js";import"./VisuallyHidden-BHWpIZFA.js";import"./useLocalizedStringFormatter-BN1MB58D.js";import"./x-DP9rj5I0.js";import"./createLucideIcon-DCE2q9z-.js";import"./Heading-8W4drCzH.js";import"./info-qSN4S0E8.js";import"./Popover-DYokfV-S.js";import"./Input-DyI-u6WE.js";import"./Select-4GiVBtxX.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BVSFCD31.js";import"./DragAndDrop-BkJEqw-r.js";import"./inertValue-DIDnzgf-.js";import"./useListState-BvoEIMYk.js";import"./Tag-LmdqQvBw.js";import"./useHighlightSelectionDescription-yHBv-7ES.js";import"./useUpdateEffect-B7wTPJMt.js";import"./useHasTabbableChild-CqjzOmrl.js";import"./chevron-down-BiKK85eZ.js";import"./Button.module-CtQ1deO8.js";import"./check-BqyyptKR.js";import"./useToggleState-0ginwFro.js";import"./Virtualizer-B98FoWxd.js";const ye={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ke=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Ke as __namedExportsOrder,ye as default};
