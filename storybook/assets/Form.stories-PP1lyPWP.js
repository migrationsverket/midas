import{j as e}from"./iframe-bMlrIVqx.js";import{$ as c}from"./Form-CHbmSbh0.js";import{G as d}from"./Grid-C_LVgDy9.js";import{G as i}from"./GridItem-C1ndyus0.js";import{a as x,R as u}from"./Radio-B4Pr5RrY.js";import{C as I}from"./CheckboxGroup-tn2JD2OP.js";import{C as G}from"./Checkbox-CEB4VWfr.js";import{T as t}from"./TextField-SAJ4RPSf.js";import{S as l}from"./Select-mtE2LMeY.js";import{L as p}from"./ListBoxItem-CgIej28H.js";import{B as a}from"./Button-BN-gP6-P.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CiQjpS3V.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-eHx-WVAV.js";import"./useFocusRing-D8WCTnIg.js";import"./index-bHuBvRtH.js";import"./index-RO-R4BZE.js";import"./clsx-Ciqy0D92.js";import"./Group-BDfnJ3lm.js";import"./FieldError-BuQ4lPqn.js";import"./Text-Bx2VBQkS.js";import"./Text-Bdt-QSsh.js";import"./Button-v8dNK1Nl.js";import"./Hidden-hGkg45bv.js";import"./useLabels-1BtgXQl_.js";import"./useButton-d-Sb4YVS.js";import"./SelectionIndicator-D_gtTXsF.js";import"./useField-DVMTtL6M.js";import"./VisuallyHidden-3-YJbPrh.js";import"./useControlledState-B1Wdr8nI.js";import"./Label-Cx9CnG1X.js";import"./Dialog-a4vPDuZX.js";import"./RSPContexts-DoPn5P63.js";import"./OverlayArrow-BjZWg3G8.js";import"./useResizeObserver-B1YiBwxG.js";import"./Collection-CMNy8xwo.js";import"./index-fcuKGEAb.js";import"./Separator-Dld-2_Ml.js";import"./SelectionManager-VLtppM1E.js";import"./useEvent-DP6lgkls.js";import"./scrollIntoView-CDYKtDZ7.js";import"./useDescription-DpC2r11h.js";import"./ListKeyboardDelegate-D5YpQ5fx.js";import"./PressResponder-DOm5aFeu.js";import"./useLocalizedStringFormatter-CMgAZYok.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BfMBG2tT.js";import"./getScrollParent-CjAAh5mb.js";import"./x-CcCCRFo_.js";import"./createLucideIcon-BpTSGys0.js";import"./useLocalizedStringFormatter-CTQktmvu.js";import"./Heading-CVhmOHIJ.js";import"./info-Bq9rumUI.js";import"./Popover-CpW1xD15.js";import"./check-D0aLA1fr.js";import"./useToggleState-vqeMXzFJ.js";import"./TextFieldBase-B1l44mOn.js";import"./Input-CTcO8bh6.js";import"./useTextField-CIhs8AK4.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-lMk2__PF.js";import"./DragAndDrop-BMuC6Sl3.js";import"./inertValue-BbdPdIhQ.js";import"./useListState-DwRDAVx4.js";import"./TagGroup-DleY5zMM.js";import"./useHighlightSelectionDescription-7rIFCR97.js";import"./useUpdateEffect-CXmeNXDj.js";import"./useHasTabbableChild-DWndl-xk.js";import"./chevron-down-CKeGw2KF.js";import"./Virtualizer-CoJEnWAk.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
