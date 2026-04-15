import{j as e}from"./iframe-BTaDbuxu.js";import{c}from"./Form-CRVSZQwH.js";import{G as d}from"./Grid-DfFcPcRe.js";import{G as i}from"./GridItem-DyPOi_yo.js";import{a as x,R as u}from"./Radio-CcFXuTTx.js";import{C as I}from"./CheckboxGroup-DuGNxpxN.js";import{C as G}from"./Checkbox-FIzzQDGi.js";import{T as t}from"./TextField-D-E1nhqQ.js";import{S as l}from"./Select-xj4LxwCo.js";import{L as p}from"./ListBoxItem-CH5SzM62.js";import{B as a}from"./Button-Cy0fOhbL.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BHhR7R8K.js";import"./utils-1uCA-_jS.js";import"./clsx-B-dksMZM.js";import"./index-Bb20tbAa.js";import"./index-D6fO5xxY.js";import"./clsx-Ciqy0D92.js";import"./Group-Bofc7W_S.js";import"./FieldError-BSmb6mHx.js";import"./Text-DMH4kU1u.js";import"./Text-BgkGdlQT.js";import"./Button-V9h2N0md.js";import"./Hidden-DHaMiUFe.js";import"./useLabel-J_84CvRn.js";import"./useLabels-DegCLMnY.js";import"./useButton-S82UpuFO.js";import"./SelectionIndicator-lL4f1q1r.js";import"./useField-12NpjcQ6.js";import"./VisuallyHidden-CqahcWwX.js";import"./useControlledState-CpRYTvJt.js";import"./Label-C6YyueRh.js";import"./Dialog-Cu8HywJD.js";import"./RSPContexts-BHVdxW7V.js";import"./OverlayArrow-CJLkq1Il.js";import"./useResizeObserver-BfE_d8Ln.js";import"./Collection-DjeNEEmf.js";import"./index-DdZfCU1H.js";import"./Separator-ChU6sIgy.js";import"./SelectionManager-DeqISQES.js";import"./useEvent-DlwZgChj.js";import"./scrollIntoView-BMucG0RA.js";import"./useDescription-DJkbGKg1.js";import"./ListKeyboardDelegate-Ddis9XgJ.js";import"./PressResponder-Cr7mUyzZ.js";import"./useLocalizedStringFormatter-XUeJ46d1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-gv079wbl.js";import"./getScrollParent-D2rHfLmL.js";import"./ModalOverlay-D3dqdf8I.js";import"./x--XPZcdcH.js";import"./createLucideIcon-B7TgxeN_.js";import"./useLocalizedStringFormatter-Bl_scK9Q.js";import"./Heading-Bly3ER8A.js";import"./info-C7_Arssk.js";import"./Popover-4Cm-SRAq.js";import"./check-0Rjjnyk-.js";import"./useToggleState-DhqMLYue.js";import"./TextFieldBase-DrZ7jwy-.js";import"./Input-DrCdW5E2.js";import"./useTextField-DXtDSAZ5.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BSJl_m8h.js";import"./DragAndDrop-Be43WoFX.js";import"./inertValue-Be-OtQTr.js";import"./useListState-ujwpCKsT.js";import"./TagGroup-nfBWjTLs.js";import"./useHighlightSelectionDescription-Y_YPMbbi.js";import"./useUpdateEffect-DUYs8y4H.js";import"./useHasTabbableChild-Chf1pm8f.js";import"./chevron-down-DtZa2rp9.js";import"./Virtualizer-Bjuv4tjk.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
