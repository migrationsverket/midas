import{j as e}from"./iframe-C-Lam_ng.js";import{$ as c}from"./Form-cgQeppkl.js";import{G as d}from"./Grid-2MIuE9OL.js";import{G as i}from"./GridItem-CHVtczve.js";import{T as t}from"./TextField-BbpxXOGs.js";import{S as l}from"./Select-8hVnRwH6.js";import{B as a}from"./Button-P88LisFb.js";import{R as x,a as u}from"./Radio-C9f1-R0b.js";import{C as I}from"./CheckboxGroup-CUU9tD2E.js";import{C as G}from"./Checkbox-Bcgn3Eu2.js";import{L as p}from"./ListBoxItem-BovBf_qm.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-W06ddP_L.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CK88wI0l.js";import"./useFocusRing-BOxTCQ-z.js";import"./index-B-1MEL0a.js";import"./index-AgIsqBR_.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-jFtWvI21.js";import"./TextField-CxoIZ-zi.js";import"./FieldError-C41CocVt.js";import"./Text-BfdfpGmz.js";import"./Text-CpVobgrZ.js";import"./RSPContexts-B-YXtEWf.js";import"./Group-DskfgqpV.js";import"./Input-DwaXBZ7X.js";import"./Hidden-LjeV_3jg.js";import"./Button-fej9ya2E.js";import"./useLabels-CL-84yha.js";import"./useButton-CI7GwtHS.js";import"./useTextField-BKY-x7HE.js";import"./useControlledState-CKRNIuAr.js";import"./useField-B9038I5h.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DIKNXTtP.js";import"./Dialog-D85-23oJ.js";import"./OverlayArrow-BkOxcu8_.js";import"./useResizeObserver-BU5R8K1e.js";import"./Collection-Bk_dwAYv.js";import"./index-DuhlN3yt.js";import"./Separator-Bn6bUxSk.js";import"./SelectionManager-DS6MAhbr.js";import"./useEvent-z1sPjE67.js";import"./scrollIntoView-D5cAmATd.js";import"./SelectionIndicator-Hy3jm3Uq.js";import"./useDescription-_kbhm_E4.js";import"./ListKeyboardDelegate-DH8AGtvn.js";import"./PressResponder-D4nt81Wh.js";import"./useLocalizedStringFormatter-DdCEe0_z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CWmAp7Wq.js";import"./VisuallyHidden-_cUxrJf0.js";import"./x-BhnhKHvo.js";import"./createLucideIcon-44xnuqEI.js";import"./useLocalizedStringFormatter-h0NnrpaM.js";import"./Heading-BQiPV1r3.js";import"./info-CD34R5G6.js";import"./Popover-DcUOIW9J.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Zn2AVatm.js";import"./DragAndDrop-XnFN4dsF.js";import"./inertValue-CnBAQYn9.js";import"./useListState-DEpFxWr6.js";import"./Tag-CXbzQ-Lf.js";import"./useHighlightSelectionDescription-DWZia862.js";import"./useUpdateEffect-DTvoc4kN.js";import"./useHasTabbableChild-XQouJvTL.js";import"./chevron-down-CTWWrB84.js";import"./Button.module-D7V8WCeR.js";import"./check-CnfRZR2H.js";import"./useToggleState-DdhEihHI.js";import"./Virtualizer-QEFafBv9.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
