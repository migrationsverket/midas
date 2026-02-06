import{j as e}from"./iframe-D-REpNT2.js";import{$ as c}from"./Form-BfFx0FHq.js";import{G as d}from"./Grid-D86jOMUM.js";import{G as i}from"./GridItem-BRQIJKaI.js";import{a as x,R as u}from"./Radio-DdaRyCsC.js";import{C as I}from"./CheckboxGroup-cfuODo5V.js";import{C as G}from"./Checkbox-CVJsqz0x.js";import{T as t}from"./TextField-VuYzg-k_.js";import{S as l}from"./Select-BIkGHuEo.js";import{L as p}from"./ListBoxItem-BZr29KBr.js";import{B as a}from"./Button-MhaT5nTu.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BDMdsvrX.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-vWol_pr5.js";import"./useFocusRing-BWmdFu0w.js";import"./index-CBX90dgQ.js";import"./index-Bb_XCQXS.js";import"./clsx-Ciqy0D92.js";import"./Group-BmM75P_6.js";import"./FieldError-CA_O69rJ.js";import"./Text-C9Slm4PY.js";import"./Text-MiHH5yI1.js";import"./Button-CSGruNvs.js";import"./Hidden-DBxbBPM8.js";import"./useLabels-CL0mObZW.js";import"./useButton-BVLm7XF-.js";import"./SelectionIndicator-CYwlpBgk.js";import"./useField-pGjh_xZt.js";import"./VisuallyHidden-CjlKzDWm.js";import"./useControlledState-CRTz0NCq.js";import"./Label-BLUj1SK8.js";import"./Dialog-CrHh5riv.js";import"./RSPContexts-CXb92NO5.js";import"./OverlayArrow-DfQnH08H.js";import"./useResizeObserver-B9yDolf1.js";import"./Collection-Bu1IPCuJ.js";import"./index-C3LxNUCX.js";import"./Separator-BVe-YMpx.js";import"./SelectionManager-zKJSBzzj.js";import"./useEvent-D-eD8_or.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-5inR-ZqS.js";import"./ListKeyboardDelegate-CibTaz9W.js";import"./PressResponder-oUkAjckc.js";import"./useLocalizedStringFormatter-D5aBFhGc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-sckNPW58.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-gtZDJ8br.js";import"./createLucideIcon-BcZu8RhE.js";import"./useLocalizedStringFormatter-Cz89ib5x.js";import"./Heading-C72zqHqg.js";import"./info-DRFXZmmo.js";import"./Popover-DsVfs9l5.js";import"./check-m9YQjB35.js";import"./useToggleState-DIveHdpr.js";import"./TextFieldBase-CqmQtgj7.js";import"./TextField-Bv-CtPda.js";import"./Input-8tjaEJPd.js";import"./useTextField-Cj6RKvRJ.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Bf3uLCWU.js";import"./DragAndDrop-m9nH2Ziq.js";import"./inertValue-Bg-50atM.js";import"./useListState-DndeQ2JY.js";import"./Tag--kJX7SGQ.js";import"./useHighlightSelectionDescription-BUcRpiRb.js";import"./useUpdateEffect-U_RIkODl.js";import"./useHasTabbableChild-DU10uiiy.js";import"./chevron-down-CESLfe_8.js";import"./Virtualizer-BE14Nip4.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
