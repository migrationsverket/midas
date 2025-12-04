import{j as e}from"./iframe-CUQ35QY-.js";import{$ as c}from"./Form-CM90o-DO.js";import{G as d}from"./Grid-CuRHYXWU.js";import{G as i}from"./GridItem-D4kKpGvn.js";import{T as t}from"./TextField-BGLMTewx.js";import{S as l}from"./Select-CshzXX1t.js";import{B as a}from"./Button-B1Lfpc_P.js";import{R as x,a as u}from"./Radio-XMCCmHqg.js";import{C as I}from"./CheckboxGroup-AP_nHvof.js";import{C as G}from"./Checkbox-BXM5N_0L.js";import{L as p}from"./ListBoxItem-BXtwwyrk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-5RKy4vaX.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-t2gqBy82.js";import"./useFocusRing-B7idPrX2.js";import"./index-CGbKJlQM.js";import"./index-C6uWvgQh.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CwqM-Mgr.js";import"./TextField-BqmBljxP.js";import"./FieldError-BjkxW7lY.js";import"./Text-TgbZ0VlZ.js";import"./Text-NEiftwSw.js";import"./RSPContexts-DZARiAzW.js";import"./Group-D87zkB91.js";import"./Input-C5FHMjve.js";import"./Hidden-Ct1SE1DS.js";import"./Button-Bsh9_HoT.js";import"./useLabels-Bt6x9uRf.js";import"./useButton-BansXk_T.js";import"./useTextField-stxNtcwH.js";import"./useControlledState-6cnBDVnB.js";import"./useField-CNFYxSKs.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DPYqs3XR.js";import"./Dialog-CpdDlTkd.js";import"./OverlayArrow-MZd72Nlp.js";import"./useResizeObserver-CxbX0_JZ.js";import"./Collection-vZhapCR-.js";import"./index-B9eY4gM9.js";import"./Separator-Ces7Lb1C.js";import"./SelectionManager-Dbu5pjpk.js";import"./useEvent-DKevCmMh.js";import"./scrollIntoView-k0ZnzZN6.js";import"./SelectionIndicator-BuYH8QdD.js";import"./useDescription-DpHNilUH.js";import"./ListKeyboardDelegate-CSMrpsfr.js";import"./PressResponder-Vzfn8nnZ.js";import"./useLocalizedStringFormatter-CoOBbLCl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-oXbVstWc.js";import"./VisuallyHidden-Bxln8_qY.js";import"./x-DKHs1ZuY.js";import"./createLucideIcon-CfvbpDl0.js";import"./useLocalizedStringFormatter-DHMj4qxM.js";import"./Heading-DmIr2b1p.js";import"./info-DsodtU6p.js";import"./Popover-CbmKLSpx.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DjxWqgTS.js";import"./DragAndDrop-3NFue-ae.js";import"./inertValue-CnZWPXUk.js";import"./useListState-BQgLmsi_.js";import"./Tag-D_dP3Uih.js";import"./useHighlightSelectionDescription-CvD2rB7f.js";import"./useUpdateEffect-ww5ZR_jF.js";import"./useHasTabbableChild-B3uIIx5B.js";import"./chevron-down-BVJs8ckC.js";import"./Button.module-Co5e5YHp.js";import"./check-DPv1d1qn.js";import"./useToggleState-BrpRC7Rg.js";import"./Virtualizer-B2Y7n51R.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
