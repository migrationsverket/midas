import{j as e}from"./iframe-y_ZEGYiJ.js";import{c}from"./Form-jkhfJmW6.js";import{G as d}from"./Grid-DvJpfTpN.js";import{G as i}from"./GridItem-Bg-csien.js";import{a as x,R as u}from"./Radio-BjLg0bse.js";import{C as I}from"./CheckboxGroup-DuZG8vSI.js";import{C as G}from"./Checkbox-Dez795cI.js";import{T as t}from"./TextField-Bq16zET6.js";import{S as l}from"./Select-BLrbFoVN.js";import{L as p}from"./ListBoxItem-T4QQMxXu.js";import{B as a}from"./Button-DfIwZ4Yr.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CZ7WfYYW.js";import"./utils-8dWn79IV.js";import"./clsx-B-dksMZM.js";import"./index-DK6J5I5t.js";import"./index-C3AD5J6I.js";import"./clsx-Ciqy0D92.js";import"./Group-DSFwtZNb.js";import"./FieldError-DVm8G2oT.js";import"./Text-D9z2hAIA.js";import"./Text-B7AL5jZC.js";import"./Button-Ch-G3kN7.js";import"./Hidden-Cu8enaQS.js";import"./useLabel-CNEaWGvD.js";import"./useLabels-JqoH3_Oa.js";import"./useButton-gC0Ivgyp.js";import"./SelectionIndicator-PYyRf_UG.js";import"./useField-hpR3LKjK.js";import"./VisuallyHidden-CIMmvdq0.js";import"./useControlledState-DHT9vmuC.js";import"./Label-DJW1w4yM.js";import"./Dialog-DfaH0eb0.js";import"./RSPContexts-DqgeagmW.js";import"./OverlayArrow-C1Lkycnn.js";import"./useResizeObserver-hDrQIYv6.js";import"./Collection-CENpgFH3.js";import"./index-5hSl8Kfz.js";import"./Separator-D2MQAmoC.js";import"./SelectionManager-CF_UqROg.js";import"./useEvent-Cdh_4pNz.js";import"./scrollIntoView-Dr9gm-NQ.js";import"./useDescription-ZoeRT3XG.js";import"./ListKeyboardDelegate-ClH-0lmn.js";import"./PressResponder-UtVSXywR.js";import"./useLocalizedStringFormatter-lMWk04dJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B1--TJfl.js";import"./getScrollParent-vEn_skDo.js";import"./ModalOverlay-k11Y76w7.js";import"./x-DyC_Bfvk.js";import"./createLucideIcon-BSy6nR5q.js";import"./useLocalizedStringFormatter-DZmDvz9-.js";import"./Heading-Dkuwhauc.js";import"./info-ClUzQw9G.js";import"./Popover-BETNwm5N.js";import"./check-Bn2Dvw2K.js";import"./useToggleState-CbdS7hfR.js";import"./TextFieldBase-QWA6dxOq.js";import"./Input-Bm-PfLto.js";import"./useTextField-BPApV7cm.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BzCGEjtd.js";import"./DragAndDrop-DAVhR5aE.js";import"./inertValue-DjD9iHPN.js";import"./useListState-B7Lc4dQN.js";import"./TagGroup-OIN09RlH.js";import"./useHighlightSelectionDescription-D1zYlGyr.js";import"./useUpdateEffect-DZzCXCYl.js";import"./useHasTabbableChild-DM7YyZ5q.js";import"./chevron-down-D75S7OWZ.js";import"./Virtualizer-mFw9yR5R.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
