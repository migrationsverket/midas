import{j as e}from"./iframe-D-ypYuwn.js";import{$ as c}from"./Form-C8Tr2sr6.js";import{G as d}from"./Grid-prEV5zwD.js";import{G as i}from"./GridItem-DAv_K6jy.js";import{T as t}from"./TextField-Do7J5Aea.js";import{S as l}from"./Select-DUVb0SL4.js";import{B as a}from"./Button-U4O3N2IF.js";import{R as x,a as u}from"./Radio-C2aw_RYB.js";import{C as I}from"./CheckboxGroup-DvL_GnQ3.js";import{C as G}from"./Checkbox-CnMEmB1k.js";import{L as p}from"./ListBoxItem-EnLsw9L8.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DQGhytbb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D6-jghXl.js";import"./useFocusRing-ClaQwJdN.js";import"./index-DHSfPRsN.js";import"./index-DBHvdizX.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-ClowRUWZ.js";import"./TextField--naRKpFH.js";import"./FieldError-C0J98PPl.js";import"./Text-BuEv763R.js";import"./Text-DJIv6PG1.js";import"./RSPContexts-CmOqvCB5.js";import"./Group-BP2wtaAS.js";import"./Input-DNBo8YV5.js";import"./Hidden-Dz6be0Sh.js";import"./Button-89RGHRHn.js";import"./useLabels-kssSLeVE.js";import"./useButton-DhjrBguy.js";import"./useTextField-bD-VrVS6.js";import"./useControlledState-C653rY7f.js";import"./useField-lmNM_fT4.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BepKlGCv.js";import"./Dialog-di-kXyUH.js";import"./OverlayArrow-DCCM0y5p.js";import"./useResizeObserver-B3IJoa9y.js";import"./Collection-BbnMthkp.js";import"./index-BvfrIAUP.js";import"./Separator-1xL4orhw.js";import"./SelectionManager-D3zkJviI.js";import"./useEvent-D3gR2SWY.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dy8yIasa.js";import"./useDescription-BE4gCwvi.js";import"./ListKeyboardDelegate-rsQDn0w1.js";import"./PressResponder-Dq_MVEpe.js";import"./useLocalizedStringFormatter-qVUCbyvG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3dGmggM_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D4W03Dkt.js";import"./x-8_fCH_nT.js";import"./createLucideIcon-C4YzC_QF.js";import"./useLocalizedStringFormatter-rNpKh-Hw.js";import"./Heading-BkJ_tAnG.js";import"./info-BKKuJF_q.js";import"./Popover-Q9huNjjx.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-nZ7e3-ig.js";import"./DragAndDrop-CIH5ykdl.js";import"./inertValue-D0TGOH72.js";import"./useListState-CZrL_Kv-.js";import"./Tag-DJeigKgO.js";import"./useHighlightSelectionDescription-R9I10nwv.js";import"./useUpdateEffect-BqiFR5Q4.js";import"./useHasTabbableChild-DDVrg4-x.js";import"./chevron-down-CtUD1AO3.js";import"./Button.module-Co5e5YHp.js";import"./check-B9Uc6h0f.js";import"./useToggleState-DLHdDa6e.js";import"./Virtualizer-CB_5Uuzo.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
