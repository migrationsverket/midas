import{j as e}from"./iframe-X3mj68t3.js";import{$ as c}from"./Form-ZEnz4t2S.js";import{G as d}from"./Grid-DClrHAGS.js";import{G as i}from"./GridItem-CArBh3VY.js";import{a as x,R as u}from"./Radio-Do1QSkaj.js";import{C as I}from"./CheckboxGroup-B2NscZki.js";import{C as G}from"./Checkbox-B1S8k6-y.js";import{T as t}from"./TextField-CeJq0a9C.js";import{S as l}from"./Select-DZU0xDXN.js";import{L as p}from"./ListBoxItem-CTgFdoAp.js";import{B as a}from"./Button-BVJ0mzNb.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DTPrts_7.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BhwNd55G.js";import"./useFocusRing-A-SYz4Bz.js";import"./index-BNiETeWH.js";import"./index-CgJQ_hcF.js";import"./clsx-Ciqy0D92.js";import"./Group-DX5InIAn.js";import"./FieldError-ND8ftnbY.js";import"./Text-dnG1hIAI.js";import"./Text-BWheoq0_.js";import"./Button-B9l0bgEJ.js";import"./Hidden-ozg39Vr6.js";import"./useLabels-DEY-9MxO.js";import"./useButton-CupICIN9.js";import"./SelectionIndicator-ZmvL6AbJ.js";import"./useField-BqKadYEg.js";import"./VisuallyHidden-BBlGikRY.js";import"./useControlledState-DGtnjhE_.js";import"./Label-CjZWCMIy.js";import"./Dialog-DdIdAC1c.js";import"./RSPContexts-DnDgit_C.js";import"./OverlayArrow-QCwWccrI.js";import"./useResizeObserver-DE-yBLqy.js";import"./Collection-CbMVQR1w.js";import"./index-P7Fh13u4.js";import"./Separator-CBx5I7eG.js";import"./SelectionManager-9uZXtExn.js";import"./useEvent-cKzqiIgZ.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C7T8B3ZX.js";import"./ListKeyboardDelegate-Dt2iVvkm.js";import"./PressResponder-QQ1Lti6R.js";import"./useLocalizedStringFormatter-BdsuAGwL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwEe7AMO.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DPV5jirE.js";import"./createLucideIcon-DXrZJMlk.js";import"./useLocalizedStringFormatter-DzOxC-Qk.js";import"./Heading-ocoQFlqf.js";import"./info-DRYgVkjt.js";import"./Popover-BPWjBjm2.js";import"./check-BIZLSA6t.js";import"./useToggleState-2Ss1JAMY.js";import"./TextFieldBase-Df1ZiwWf.js";import"./TextField-DWMccr4P.js";import"./Input-CIpMm373.js";import"./useTextField-Bt5iotie.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DXTxPM-y.js";import"./DragAndDrop-hS-G8412.js";import"./inertValue-AvhOBPof.js";import"./useListState-DkyjiuTi.js";import"./Tag-Bns024Mk.js";import"./useHighlightSelectionDescription-BfTROmK2.js";import"./useUpdateEffect-DgXh_gH6.js";import"./useHasTabbableChild-C_1ps6-3.js";import"./chevron-down-uHNOPSXf.js";import"./Virtualizer-CDwfNzpO.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
