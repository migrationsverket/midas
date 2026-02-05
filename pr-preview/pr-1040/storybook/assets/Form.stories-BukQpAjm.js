import{j as e}from"./iframe-BtNJMoHI.js";import{$ as c}from"./Form-D6rhWoht.js";import{G as d}from"./Grid-Be7Dm2qK.js";import{G as i}from"./GridItem-0byL52F3.js";import{a as x,R as u}from"./Radio-C4mRQ4HH.js";import{C as I}from"./CheckboxGroup-UopAq6Ys.js";import{C as G}from"./Checkbox-CAM6orQM.js";import{T as t}from"./TextField-hC8J1nLo.js";import{S as l}from"./Select-CE6unHUW.js";import{L as p}from"./ListBoxItem-buMbx-wM.js";import{B as a}from"./Button-BhgL-jXP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BTcjIN4e.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CY8g3EHX.js";import"./useFocusRing-B5Ii0CSA.js";import"./index-mJuBdKXF.js";import"./index-DwYe5WTW.js";import"./clsx-Ciqy0D92.js";import"./Group-DwqAY6j-.js";import"./FieldError-Xit4Yszo.js";import"./Text-BGME6aJP.js";import"./Text-OgZoRIHX.js";import"./Button-DhLs1vMJ.js";import"./Hidden-Ceg14RrY.js";import"./useLabels-CxeRtDFx.js";import"./useButton-Ddodp3Ah.js";import"./SelectionIndicator-CkTj0W0H.js";import"./useField-D54wfcNo.js";import"./VisuallyHidden-BkS4_cE1.js";import"./useControlledState-CgZyRzUC.js";import"./Label-BpPP-xLI.js";import"./Dialog-BI-xb8xk.js";import"./RSPContexts-BF7VHJM2.js";import"./OverlayArrow-CpViwBIJ.js";import"./useResizeObserver-B77Do0ki.js";import"./Collection-B0yDbE1N.js";import"./index-CX_QFml9.js";import"./Separator-CQjZYdjD.js";import"./SelectionManager-CTH9w17B.js";import"./useEvent-lAZ0Ls88.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-aGP4GkA6.js";import"./ListKeyboardDelegate-CVsR5zae.js";import"./PressResponder-qbdNgXuz.js";import"./useLocalizedStringFormatter-DhOOgyIy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DsVHz756.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BFzEcC91.js";import"./createLucideIcon-D27Pl-Vx.js";import"./useLocalizedStringFormatter-DSEZ_sfA.js";import"./Heading-CVpkZosN.js";import"./info-DgS0ck7k.js";import"./Popover-CH9TZeps.js";import"./check-DJ8MbCIO.js";import"./useToggleState-HAOam8d2.js";import"./TextFieldBase-D8qsIphf.js";import"./TextField-BkVsdwxG.js";import"./Input-DzwPLHmq.js";import"./useTextField-DikHFKAL.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CgdGvqzt.js";import"./DragAndDrop-DLm_bMTa.js";import"./inertValue-CUdesoV4.js";import"./useListState-CKW4v84_.js";import"./Tag-BQOIuHPL.js";import"./useHighlightSelectionDescription--LwtXAtu.js";import"./useUpdateEffect-B5vnx2BU.js";import"./useHasTabbableChild-DXnVSaTk.js";import"./chevron-down-CFTrVMwc.js";import"./Virtualizer-DB0ww2ey.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
