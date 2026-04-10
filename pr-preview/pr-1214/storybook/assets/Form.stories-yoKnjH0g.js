import{j as e}from"./iframe-ntYsoI3q.js";import{c}from"./Form-q--S1nBS.js";import{G as d}from"./Grid-CoYip8qc.js";import{G as i}from"./GridItem-DQKOh2XY.js";import{a as x,R as u}from"./Radio-DN-Am6Ib.js";import{C as I}from"./CheckboxGroup-BlM_DMjA.js";import{C as G}from"./Checkbox-Br-l0w_w.js";import{T as t}from"./TextField-DSrvpV6W.js";import{S as l}from"./Select-DZBtyBEC.js";import{L as p}from"./ListBoxItem-dpxjMQnT.js";import{B as a}from"./Button-Cjgmk6w1.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-D9nk-FO4.js";import"./utils-BJHfATlu.js";import"./clsx-B-dksMZM.js";import"./index-PknmiIVy.js";import"./index-FJM3BeIO.js";import"./clsx-Ciqy0D92.js";import"./Group-CA3PZ7_L.js";import"./FieldError-BR-RMZw1.js";import"./Text-DeKUVabC.js";import"./Text-DcoyKAFk.js";import"./Button-Czul53LM.js";import"./Hidden-BJHd_AQT.js";import"./useLabel-Dq9C3dm5.js";import"./useLabels-xSNV-NpM.js";import"./useButton-BE2eqaFK.js";import"./SelectionIndicator-7xtEuHmh.js";import"./useField-BT-2cJTY.js";import"./VisuallyHidden-Tbx6jsXW.js";import"./useControlledState-DrHB4IJb.js";import"./Label-DjnTj5Ne.js";import"./Dialog-aWieR_i3.js";import"./RSPContexts-Vvgjzfon.js";import"./OverlayArrow-BuYpS_zT.js";import"./useResizeObserver-fXUigDQo.js";import"./Collection-DCsSzMBi.js";import"./index-kwkfIc0O.js";import"./Separator-DbZKR2lQ.js";import"./SelectionManager-DlacRCpb.js";import"./useEvent-BZsGlSL3.js";import"./scrollIntoView-DyKyaLk8.js";import"./useDescription-FAfc1Eak.js";import"./ListKeyboardDelegate-DEfcmcZu.js";import"./PressResponder-BvfnRz9n.js";import"./useLocalizedStringFormatter-hhUVFxwM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DcS6Wy41.js";import"./getScrollParent-1fm_mwK8.js";import"./Modal-BCZqBgaH.js";import"./x-DVmtkFru.js";import"./createLucideIcon-DVRKw96B.js";import"./useLocalizedStringFormatter-CkAS-7e9.js";import"./Heading-Bb4w0_0o.js";import"./info-BweepCZS.js";import"./Popover-BD_g_Io3.js";import"./check-wTL4kPo5.js";import"./useToggleState-CtaCqYlS.js";import"./TextFieldBase-CBe1htja.js";import"./Input-klmdQr_w.js";import"./useTextField-B00liPAR.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Z5b1Rn97.js";import"./DragAndDrop-cmsz7vc7.js";import"./inertValue-Dqz0zcKC.js";import"./useListState-GyhjWu8U.js";import"./TagGroup-CcjWjUA-.js";import"./useHighlightSelectionDescription-DuR5S8UK.js";import"./useUpdateEffect-65LEw_qu.js";import"./useHasTabbableChild-Bh9mdG4J.js";import"./chevron-down-DPK2xQ4-.js";import"./Virtualizer-B_q5dZdc.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
