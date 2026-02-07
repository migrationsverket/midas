import{j as e}from"./iframe-CxuIO7a7.js";import{$ as c}from"./Form-bIjQ-EOX.js";import{G as d}from"./Grid-CakCsCSz.js";import{G as i}from"./GridItem-Uh7VQsbU.js";import{a as x,R as u}from"./Radio-C3gPi4Gn.js";import{C as I}from"./CheckboxGroup-DTw2jTMJ.js";import{C as G}from"./Checkbox-B-EUr-eh.js";import{T as t}from"./TextField-B5Av8GBL.js";import{S as l}from"./Select-Be2lQHzN.js";import{L as p}from"./ListBoxItem-DIdiBmxx.js";import{B as a}from"./Button-BYXk57rI.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CXGq3B-b.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Csa25t6B.js";import"./useFocusRing-B6J0mh3g.js";import"./index-DUo9Y50I.js";import"./index-gnxrYTyY.js";import"./clsx-Ciqy0D92.js";import"./Group-CHEqHYyZ.js";import"./FieldError-94aBjoZy.js";import"./Text-DdhSqAlM.js";import"./Text-DcyHZz0V.js";import"./Button-DRAmhx2z.js";import"./Hidden-BA1jWOK0.js";import"./useLabels-HWrLLSK0.js";import"./useButton-D-iZZiOo.js";import"./SelectionIndicator-C_slZNUR.js";import"./useField-DWmTECu8.js";import"./VisuallyHidden-aHkENNoL.js";import"./useControlledState-CkPJQRbj.js";import"./Label-CjJE2hgG.js";import"./Dialog-Cb_dptb3.js";import"./RSPContexts-Dzk6vf8s.js";import"./OverlayArrow-6djsMobr.js";import"./useResizeObserver-DS999Mn0.js";import"./Collection-9GaMkY2M.js";import"./index-DQR1Cy2T.js";import"./Separator-7rfIak5J.js";import"./SelectionManager-lvwb8BA8.js";import"./useEvent-BmZgTZWk.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-vGGme-gD.js";import"./ListKeyboardDelegate-Vn6W_k8b.js";import"./PressResponder-DPBLo-uQ.js";import"./useLocalizedStringFormatter-CU3oIUiy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-HNXuJDtz.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-B251onrY.js";import"./createLucideIcon-CDa9bc5n.js";import"./useLocalizedStringFormatter-D0rrceAj.js";import"./Heading-B-UXBj9Z.js";import"./info-DQP_yrL_.js";import"./Popover-B0V2qBer.js";import"./check-Da0396s5.js";import"./useToggleState-jsumG1ky.js";import"./TextFieldBase-BkQSABpk.js";import"./TextField-COXYYGul.js";import"./Input-O4Rav74X.js";import"./useTextField-DkRYEP4M.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Di7S9vyD.js";import"./DragAndDrop-DgJwMp7U.js";import"./inertValue-DZ3tQRP7.js";import"./useListState-B_dgmy2X.js";import"./Tag-CGUbM122.js";import"./useHighlightSelectionDescription-D2DUsP88.js";import"./useUpdateEffect-Qa0vMa7P.js";import"./useHasTabbableChild-ClfD23xz.js";import"./chevron-down-4Svde-pw.js";import"./Virtualizer-BNgvJot8.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
