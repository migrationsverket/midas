import{j as e}from"./iframe-BqDkGuh1.js";import{$ as c}from"./Form-D9GatxtB.js";import{G as d}from"./Grid-TULIU11s.js";import{G as i}from"./GridItem-BUn1qdhn.js";import{T as t}from"./TextField-Cf264_V5.js";import{S as l}from"./Select-WekYwHra.js";import{B as a}from"./Button-DsUfXBsa.js";import{R as x,a as u}from"./Radio-s_UhEuvU.js";import{C as I}from"./CheckboxGroup-DyYVWHuY.js";import{C as G}from"./Checkbox-DgMPw_C2.js";import{L as p}from"./ListBoxItem-BvNPjTmO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-W193K7jS.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BUuh_lTo.js";import"./useFocusRing-B0vg45rI.js";import"./index-B8hlXOwE.js";import"./index-Dzcfq3Tc.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DYGoB-Py.js";import"./TextField-CkDVWpzV.js";import"./FieldError-yw2UMk6d.js";import"./Text-P0Uog9HF.js";import"./Text-CGQubPUz.js";import"./RSPContexts-BrQCiqr8.js";import"./Group-BpDpYx0G.js";import"./Input-CDcM8Eax.js";import"./Hidden-0zoVmhVR.js";import"./Button-BxGujilG.js";import"./useLabels-Bl_SgAjf.js";import"./useButton-xcFgy60K.js";import"./useTextField-DEEyYg0G.js";import"./useControlledState-D87rnCnG.js";import"./useField-Dapj1Pgq.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CXDiIvEe.js";import"./Dialog-DJgKKran.js";import"./OverlayArrow-DXfW_w3l.js";import"./useResizeObserver-B2POJnuI.js";import"./Collection-BQrYRO22.js";import"./index-Cu4-BjcK.js";import"./Separator-D-IR-f5V.js";import"./SelectionManager-DFWgDQwt.js";import"./useEvent-XcVfxEor.js";import"./scrollIntoView-uYMCGnr-.js";import"./SelectionIndicator-CEQfdIGJ.js";import"./useDescription-Bm9qBg99.js";import"./ListKeyboardDelegate-COMlNfzx.js";import"./PressResponder-DbN2tmM9.js";import"./useLocalizedStringFormatter-B8mdMXCK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CUQivi4p.js";import"./VisuallyHidden-CQi-zQEF.js";import"./x-B-WsG3hV.js";import"./createLucideIcon-DTrJOepx.js";import"./useLocalizedStringFormatter-v7TRxJsd.js";import"./Heading-yrJTarcr.js";import"./info-BLQj5oE6.js";import"./Popover-_5yJ1RZ5.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C_kLT4o3.js";import"./DragAndDrop-AAJcKJ3v.js";import"./inertValue-DVTN4u0u.js";import"./useListState-BUloFnMG.js";import"./Tag-CrCo8cAd.js";import"./useHighlightSelectionDescription-BM3l3s1Z.js";import"./useUpdateEffect-DkKRQtpi.js";import"./useHasTabbableChild-BFqt14Su.js";import"./chevron-down-ud45CsCw.js";import"./Button.module-CtQ1deO8.js";import"./check-CpZdIL4g.js";import"./useToggleState-BJSMrSqE.js";import"./Virtualizer-DIPU1GQS.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
