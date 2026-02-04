import{j as e}from"./iframe-BUlYeenf.js";import{$ as c}from"./Form-B0C8SxTV.js";import{G as d}from"./Grid-DF1UzHy5.js";import{G as i}from"./GridItem-Dlm8pMnd.js";import{a as x,R as u}from"./Radio-AUVVwVbU.js";import{C as I}from"./CheckboxGroup-CmDMFC6J.js";import{C as G}from"./Checkbox-DmdUMtGs.js";import{T as t}from"./TextField-CC-exDwD.js";import{S as l}from"./Select-BQHnVR7j.js";import{L as p}from"./ListBoxItem-BKUJ4Krn.js";import{B as a}from"./Button-atNiNEsO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-lHsRwqJp.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CNOyznno.js";import"./useFocusRing-CviEpoWZ.js";import"./index-DGEIcEWR.js";import"./index-DmdJ6ljJ.js";import"./clsx-Ciqy0D92.js";import"./Group-DESjM8FE.js";import"./FieldError-BuLprRq1.js";import"./Text-BEqbNabF.js";import"./Text-Bcb19OuN.js";import"./Button-CAFxmTKU.js";import"./Hidden-xA7wwpGq.js";import"./useLabels-BwlyzcSz.js";import"./useButton-BwVzS7tb.js";import"./SelectionIndicator-Cb7FhzC-.js";import"./useField-BhMTZZgY.js";import"./VisuallyHidden-BE5YEdq7.js";import"./useControlledState-BQ1_hIib.js";import"./Label-C5yUH3T8.js";import"./Dialog-sEw9lXyx.js";import"./RSPContexts-DyT-IAgl.js";import"./OverlayArrow-gd4hgrwL.js";import"./useResizeObserver-Dfpbi31M.js";import"./Collection-DXOyl8IL.js";import"./index-BFmyVk_-.js";import"./Separator-_jFFnUtm.js";import"./SelectionManager-BveSUUx6.js";import"./useEvent-qyTooRJj.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DtuYr6PG.js";import"./ListKeyboardDelegate-MnX_BZtB.js";import"./PressResponder-B7tqUOSP.js";import"./useLocalizedStringFormatter-CZUMuckE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CvNegiz2.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DgqlYmTg.js";import"./createLucideIcon-D-YObSxS.js";import"./useLocalizedStringFormatter-B7ud72d9.js";import"./Heading-X-PaujHH.js";import"./info-Bep_ZP7Z.js";import"./Popover-t757kgyT.js";import"./check-DGU0oFUw.js";import"./useToggleState-j0MKMOtt.js";import"./TextFieldBase-C8s-t1J6.js";import"./TextField-D0XRw4V0.js";import"./Input-DDkprMC_.js";import"./useTextField-X3JUxu3r.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DOzHjDgH.js";import"./DragAndDrop-DnHN8ilv.js";import"./inertValue-CjYoKEqg.js";import"./useListState-DSXF2GIG.js";import"./Tag-B3aSNk6U.js";import"./useHighlightSelectionDescription-fFOTc5sW.js";import"./useUpdateEffect-CvDWD5lc.js";import"./useHasTabbableChild-OWV-aIQT.js";import"./chevron-down-DQ0AlKj5.js";import"./Virtualizer-uI9aaW5A.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
