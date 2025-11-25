import{j as e}from"./iframe-Dme4aFdT.js";import{$ as c}from"./Form-HTp76sHB.js";import{G as d}from"./Grid-P4y03Enu.js";import{G as i}from"./GridItem-abxtiGo_.js";import{T as t}from"./TextField-BJvf7awx.js";import{S as l}from"./Select-DrUqvOSz.js";import{B as a}from"./Button-DKWrf8rk.js";import{R as x,a as u}from"./Radio-_2Pb_0gj.js";import{C as I}from"./CheckboxGroup-BHvX2VhB.js";import{C as G}from"./Checkbox-CuXCe5Gh.js";import{L as p}from"./ListBoxItem-fQJp0COx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-RWkis8G9.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cu9FWwIg.js";import"./useFocusRing-DWu_JWOd.js";import"./index-C7JOf_RQ.js";import"./index-C6e9A8g1.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-pPchGRRP.js";import"./TextField-Ct9diZ_N.js";import"./FieldError-D1kPuc3v.js";import"./Text-CMIivFWB.js";import"./Text-gw1qxFi7.js";import"./RSPContexts-GmODFMNz.js";import"./Group-tZthJ2i4.js";import"./Input-DzePpcyV.js";import"./Hidden-C10E5C8v.js";import"./Button-XAFJZG3z.js";import"./useLabels-Cct5OOSs.js";import"./useButton-DF_MCZ4k.js";import"./useTextField-CqpmIQFK.js";import"./useControlledState-BetURhw8.js";import"./useField-oEkr_deD.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BL5wFbOO.js";import"./Dialog-Cuz97ck8.js";import"./OverlayArrow-Clz9TAVy.js";import"./useResizeObserver-BkyJ2d6V.js";import"./Collection-W26yHb3J.js";import"./index-DlLHXnc9.js";import"./Separator-DWYlp_w5.js";import"./SelectionManager-6e5CdkHx.js";import"./useEvent-DYfcnNGN.js";import"./scrollIntoView-D3gv1S2x.js";import"./SelectionIndicator-CJrJ3N-9.js";import"./useDescription-DMhS4Cus.js";import"./ListKeyboardDelegate-CR4vArZj.js";import"./PressResponder-DV52zyiq.js";import"./useLocalizedStringFormatter-CkiUW1JU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-j8aW_06G.js";import"./VisuallyHidden-C5B2ZvOk.js";import"./x-tPwbUnSI.js";import"./createLucideIcon-CNaULXtJ.js";import"./useLocalizedStringFormatter-Dx4ypEyW.js";import"./Heading-yDDwOJL2.js";import"./info-BkoqP5MC.js";import"./Popover-BWFBMMxJ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-sihjMD2e.js";import"./DragAndDrop-BWBocmDW.js";import"./inertValue-BgrdDQSN.js";import"./useListState-Cxlel2y-.js";import"./Tag-BRik6EI_.js";import"./useHighlightSelectionDescription-Rck1cLGr.js";import"./useUpdateEffect-BzrmN92V.js";import"./useHasTabbableChild-BVgmrhmu.js";import"./chevron-down-1bV8hNLM.js";import"./Button.module-CtQ1deO8.js";import"./check-Cfk7Zp_l.js";import"./useToggleState-CKpCvUNl.js";import"./Virtualizer-Da0_AlpI.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
